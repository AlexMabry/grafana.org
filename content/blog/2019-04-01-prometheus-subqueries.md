+++
title = "How We're Using Prometheus Subqueries at Grafana Labs."
author = "tom"
date = "2019-04-01"
keywords = ["Prometheus"]
cover_image = "/assets/img/prometheus_WAL_header.jpg"
cover_opacity = "0.6"
cover_blur = "1px"
description = "In the Prometheus 2.7 release, Ganesh Vernekar added a feature called Prometheus Subqueries. In this post we'll share a couple of real-life examples of how we use them at Grafana Labs."
categories = ["Prometheus"]
excerpt = "In the Prometheus 2.7 release, Ganesh Vernekar added a feature called Prometheus Subqueries. In this post we'll share a couple of real-life examples of how we use them at Grafana Labs."
+++

In the [Prometheus 2.7 release](https://github.com/prometheus/prometheus/releases/tag/v2.7.0), Ganesh Vernekar added a feature called "Prometheus Subqueries." Ganesh published [an explanation of how to use subqueries](https://prometheus.io/blog/2019/01/28/subquery-support/) over on the Prometheus blog. In this post we'll share a couple of real-life examples of how we use them at Grafana Labs.

Prometheus subqueries make it possible to do a certain class of queries against Prometheus in an ad hoc fashion. Previously Prometheus wouldn't allow you to take a [range vector](https://prometheus.io/docs/prometheus/latest/querying/basics/#range-vector-selectors) of the output of a function; you could only take a range vector of a timeseries selector. We mainly justified this for two reasons: (1) We argued performance of this would be poor, and (2) it conveniently stopped you from taking the [rate of a sum, something you should never do in Prometheus](https://www.robustperception.io/rate-then-sum-never-sum-then-rate).

But a lot has changed in the past few years. Prmometheus 2.0 introduced a new storage engine, and many improvements have been made to query performance. So justification (1) is no longer valid -- and at the [post-PromCon dev summit](https://groups.google.com/forum/#!topic/prometheus-developers/NdvpnJnttRo) back in August, we decided the time was right to add subqueries.

## Billing

The first example of how we use subqueries at Grafana Labs is for billing.  We do usage-based billing for Grafana Cloud, partly based on your P95 datapoints per minute. Before Prometheus 2.7 and subqueries, we needed to use a recording rule to calculate the ingestion rate:

```yaml
record: id_namespace:cortex_distributor_received_samples_total:sum_rate
expr: sum by (id, namespace) (rate(cortex_distributor_received_samples_total[5m]))
```

...and then a separate query to calculate the P95 of that using the [quantile_over_time](https://prometheus.io/docs/prometheus/latest/querying/functions/#aggregation_over_time) function:

```
quantile_over_time(0.95, id_namespace:cortex_distributor_received_samples_total:sum_rate[30d])
```

With subqueries, we can roll this all into one:

```
quantile_over_time(0.95, sum by (id, namespace) (rate(cortex_distributor_received_samples_total[5m]))[30d:])
```

The biggest benefit here is that we no longer need to use recording rules. They have to be declared up front, and changes made to them are not retroactively applied, making it very hard to experiment with ad hoc queries that require a range vector of a function's result.

## Capacity Planning

The second example of how we use subqueries at Grafana Labs is for capacity planning. We run Grafana Cloud on a set of Kubernetes clusters around the world. We need to ensure our jobs have the resources they need to serve traffic within our latency targets, but at the same time we do not want to be throwing money away on underutilized machines. As such we keep a close eye on our pods' CPU utilization, and ensure we size the containers' CPU requests appropriately.

To achieve good utilization, we size the containers' CPU requests at P95 of their CPU usage. Per-container CPU usage is exported by cAdvisor as a counter. To calculate the per-second CPU usage, you have to apply the `rate` function:

```yaml
record: container_name_pod_name_namespace:container_cpu_usage_seconds_total:sum_rate_5m
expr: sum by (container_name, pod_name, namespace) (rate(container_cpu_usage_seconds_total{namespace="cortex-ops", container_name!="POD"}[5m]))
```

And to see the P95 CPU usage over the last 7 days:

```
quantile_over_time(0.95, container_name_pod_name_namespace:container_cpu_usage_seconds_total:sum_rate_5m[7d])
```

With subqueries, we can now combine this into a single query:

```
quantile_over_time(0.95,
  sum by (container_name, pod_name, namespace) (
    rate(container_cpu_usage_seconds_total{namespace="cortex-ops", container_name!="POD"}[5m])
  )[7d:]
)
```

And as a bonus, you can use [kube-state-metrics](https://github.com/kubernetes/kube-state-metrics) to export the configured CPU requests as a metric (some jiggery-pokery is need to make the labels consistent with cAdvisor):

```
sum by (container_name, pod_name, namespace) (
  label_join(
    label_join(
      kube_pod_container_resource_requests_cpu_cores,
      "pod_name", "", "pod"
    ),
    "container_name", "", "container"
  )
)
```

And combine the two queries to find underprovisioned pods:

```
  quantile_over_time(0.95,
    sum by (container_name, pod_name, namespace) (
      rate(container_cpu_usage_seconds_total{namespace="cortex-ops", container_name!="POD"}[5m])
    )[7d:]
  )
>
  sum by (container_name, pod_name, namespace) (
    label_join(
      label_join(
        kube_pod_container_resource_requests_cpu_cores,
        "pod_name", "", "pod"
      ),
      "container_name", "", "container"
    )
  )
```

## Gotchas

As with "normal" queries, with subqueries you must never do a sum before a rate. For example, instead of `rate((success+failure)[1m])` you must do `rate(success[1m]) + rate(failure[1m]) `. This is because the `rate` function requires special handling for counter resets, which it cannot do if you have aggregated the counter with another. Avoid the temptation to simplify!

