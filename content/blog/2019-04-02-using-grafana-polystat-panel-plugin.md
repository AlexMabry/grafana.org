+++
title = "Grafana Plugin Tutorial: Polystat Panel (Part 1)"
author = "brian"
date = "2019-04-02"
keywords = ["Tutorials","Grafana","Plugins","Prometheus"]
cover_image = "/assets/img/grafana_logo_transparent.png"
cover_opacity = "0.6"
cover_blur = "1px"
description = "Part 1 of the grafana-polystat-panel plugin tutorial."
categories = ["Plugins","Prometheus"]
excerpt = ""
+++

## Polystat

The [grafana-polystat-panel plugin](https://grafana.com/plugins/grafana-polystat-panel) was created to provide a way to roll up multiple metrics and implement flexible drilldowns to other dashboards.

This example will focus on creating a panel for [Cassandra](http://cassandra.apache.org/) using real data from [Prometheus](https://prometheus.io) collected from our [Kubernetes](https://kubernetes.io) clusters. We'll focus on the basic metrics for CPU/Memory/Disk coming from cAdvisor, but a well-instrumented service will have many metrics that indicate overall health, such as requests per second, error rates, and more.

This panel allows you to group these metrics together into an overall health status, which can be used to drill down to more detailed dashboards. For this Cassandra example, the end result will look like this:

![panel goal](/static/assets/img/blog/plugins/grafana-polystat-panel/wrappingup-pernode.gif)


## The Basics

Getting CPU, memory, and disk utilization will give enough metrics to demonstrate the idea behind compositing metrics and displaying them in Grafana. The PromQL queries below are simple and can be adapted with template variables to make the panel more "general purpose." To get started, some simple queries will be used, then later modified.

### CPU

```
container_cpu_usage_seconds_total{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra"}
```

The above query with polystat will show a large number of polygons (one per metric):

![all cassandra pods](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query.png)

There are quite a number of pods displayed (we have multiple Cassandra clusters), so we will narrow this down to just a single cluster:

```
container_cpu_usage_seconds_total{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"}
```

The names still don't show up since they are very long (hint: tooltips will show them). Adding `{{pod_name}}` to the Legend field will result in a better display:

![all cassandra pods with legend](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_with_legend.png)

Result:

![all cassandra pods with legend result](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_legend_result.png)

The query needs a little more work -- the metric is a counter -- so we'll use irate to get instantaneous per-second values.

```
irate(container_cpu_usage_seconds_total{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"}[1m])
```

![all cassandra pods cpu rate](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_legend_result_rate.png)

### Disk

While CPU is interesting, disk space in cassandra is usually what tends to run out, so we'll add this query to show disk usage:

```
container_fs_usage_bytes{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"}
```

```
container_fs_limit_bytes{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"}
```

```
container_fs_limit_bytes{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"} - container_fs_usage_bytes{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"}
```

### Memory

To complete our stats, add this memory query:

```
container_memory_usage_bytes{namespace="metrictank", pod_name=~"cassandra-sfs-.*", container_name="cassandra", cluster="ops-tools1"}
```

We can now see the result:

![all cassandra pods all stats](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_all_stats.png)

### Formatting

The stats themselves have "short" as the value type in Grafana. Switching to the options of polystat, we can adjust them to something more meaningful:

![cpu overrides](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_override_cpu.png)

![disk overrides](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_override_disk.png)

![memory overrides](/static/assets/img/blog/plugins/grafana-polystat-panel/simple_query_override_memory.png)

### Thresholding

The next step is to create thresholds for each of the metrics. In the thesholds section, add a new threshold, set the name to match a metric, and configure as needed. This example sets a 60% warning and 80% critical for CPU utilization.

![cpu threshold setting](/static/assets/img/blog/plugins/grafana-polystat-panel/cpu_threshold_setting.png)

The panel will now look like this:

![cpu threshold result](/static/assets/img/blog/plugins/grafana-polystat-panel/cpu_threshold.png)

### Composites

Now that we have basic metrics and thresholds, we can create composites. (NOTE: The composite being created here is for a single node to keep everything simple, but the final result will have all nodes displayed.)

Composites allow you to group multiple metrics together and display a single item with the threshold state reflected.
The polygon is given the color of the "worst" state. The tooltip will show individual states, sorted by worst to best.

To create a composite, click Add in the Composites section:

![composites](/static/assets/img/blog/plugins/grafana-polystat-panel/composite_default.png)

This will create a new composite named "Cassandra" and will include all metrics that match CPU/Memory/Disk.

![composite cassandra](/static/assets/img/blog/plugins/grafana-polystat-panel/composite_cassandra.png)

The result of the composite will change the polystat to show a single polygon that represents three different metrics, and will animate to show the value for each metric.

![animated](/static/assets/img/blog/plugins/grafana-polystat-panel/cassandra_animated.gif)

### Clickthroughs

There are three levels of clickthroughs provided by this panel.

1. Default clickthrough
2. Override clickthrough
3. Composite clickthrough

The order of precedence is most-specific to least-specific (3, 2, 1).

#### Default Clickthrough

You can set a clickthrough to be used globally when there are no override or composite clickthroughs defined for a polygon.

In this example, the clickthrough is set to:

```
dashboard/db/cassandra
```

![clickthrough default](/static/assets/img/blog/plugins/grafana-polystat-panel/clickthrough_default.png)

Clicking on the polygon will take you to the Cassandra dashboard, in the same Grafana server. The clickthrough can be any valid url.

The plugin also includes parameters that can be passed to other dashboards.

```
dashboard/db/cassandra?var-environment=$Cluster&var-instance=All
```

![clickthrough default](/static/assets/img/blog/plugins/grafana-polystat-panel/clickthrough_with_variable.png)

Additional variables can be passed; see this for details: https://github.com/grafana/grafana-polystat-panel#single-metric-variables.


#### Override Clickthrough

In the overrides section, you can specify a clickthrough that applies for that specific override. This is mainly used when not using composites.

Setting the clickthrough for CPU to be...

```
dashboard/cpu?var-node=${__cell_name}
```

...will take you to a dashboard named "CPU" and pass the value of the clicked polygon.

#### Composite Clickthrough

The third type of clickthrough is used to specify where to go when a composited polygon is clicked. The implementation is the same as above.

Composites have another set of variables that can be passed to clickthroughs. See: https://github.com/grafana/grafana-polystat-panel#composite-metric-variables.

### Templating

To keep the example above simple, the names are hardcoded. Leveraging Grafana template variables will make the dashboard more flexible.

The queries use "namespace" and "cluster," so let's create those.

Add a template variable to allow selection of different clusters:

![templated variables](/static/assets/img/blog/plugins/grafana-polystat-panel/template_variables.png)

## Almost there

The dashboard will look like this, showing a single node with three different metrics displayed.

![dashboard completed](/static/assets/img/blog/plugins/grafana-polystat-panel/wrapping_up1.png)

![dashboard completed with animation](/static/assets/img/blog/plugins/grafana-polystat-panel/wrapping_up2.gif)

## Wrapping Up

To complete the panel, just modify the composites to match regex per-node.

![composite1](/static/assets/img/blog/plugins/grafana-polystat-panel/composite1_final.png)
![composite2](/static/assets/img/blog/plugins/grafana-polystat-panel/composite2_final.png)

After changing the composites, the end result will look like this:

![panel goal](/static/assets/img/blog/plugins/grafana-polystat-panel/wrappingup-pernode.gif)

## About Part 2

Part 2 will detail more composite options and advanced features to make them even easier to create.

If you have created some dashboards already with polystat, we'd love to see them!
