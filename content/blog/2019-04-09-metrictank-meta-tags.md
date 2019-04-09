+++
title = "Metrictank meta tags"
author = "dieter"
date = "2019-04-09"
keywords = ["Graphite", "Metrictank", "meta tags", "tags"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Metrictank meta tags"
categories = ["Engineering", "Graphite"]
+++

# Coming Soon: Meta Tags in Metrictank

One of the major projects we're working on for [Metrictank](https://github.com/grafana/metrictank/) -- our large scale Graphite solution -- is the meta tags feature, which we started last year and are targeting to release in a few months.

A lot of people don't realize this, but [Graphite has had tag support](https://grafana.com/blog/2018/01/11/graphite-1.1-teaching-an-old-dog-new-tricks/) for more than a year.
Our mission with Metrictank is to provide a more scalable version of Graphite, so introducing meta tags was a logical next step. 

The meta tags feature is sponsored by Bloomberg, which is [one of the largest scale users of Metrictank](https://grafana.com/blog/2018/06/28/evolution-of-telemetry-at-bloomberg/), with tens of thousands of hosts being monitored and 4 million series in the index per Metrictank instance. 

## The Problem

The Bloomberg team wanted to be able to add a lot of tags to their metrics -- say, data center, host operating system or unit -- so they can query by them. 

As Stig Sorensen, Bloomberg's Head of Telemetry, put it: "The goal is to provide better filtering and group by capabilities in Grafana/Metrictank, by being able to augment the core tags with additional tags/metadata that should work like any first-class tags in Grafana."

But there are many, many metrics that would all share the same tag value. If you have a thousand metrics per host, and a thousand hosts in one data center, that would mean that you would have a million metrics all originating out of the same data center.

And if you wanted to add these tags to all your individual metrics -- say, adding one particular data center value to those million metrics -- that would be a lot of overhead.

These tags are so redundant, and if we have to store them for all the individual metrics, it would blow up the size of our index. We would use way too much RAM and disk space. And ultimately, it would slow things down.

## The Solution

We came up with the idea to exploit the redundancy and store these tags separately, with some kind of smarter association: Essentially all of these hosts automatically pretend that they have this additional tag that says, for instance, what data center they're in. That way, you can add a whole bunch of different tags to your thousands or millions of metrics without having to store them all individually.

It should also be a seamless experience: As an end user, you don't even have to realize that all this background juggling is going on when you query for all your metrics by operating system, unit, or data center. And when your metrics get returned to you, you would see all the tags associated with it, whether those tags are stored with the actual metric itself or as a meta tag. The user experience is just the same.

## Extrinsic vs. Intrinsic

Another way of thinking about meta tags is by using some ideas found in [Metrics 2.0](http://metrics20.org/). There are some tags intrinsic to the identity of the metric: If you change them, you’re referring to a different metric. But other tags are not part of the metric's identity. If you change them, you can still be looking at the same metric. They're called extrinsic.

Metrictank's regular tags are intrinsic, whereas meta tags are extrinsic, as they are not tightly coupled to the identity of the metric. You can change them, but you're still working with the same metrics.

## Compared to Prometheus Series Joining

The function of meta tags is comparable to what can be achieved in Prometheus with series joining. To add tags in Prometheus, you have to have separate series that declare these additional tags. So for example, you would have a series that has a host value, and then it would have an additional series tagged with a certain data center and operating system for that particular host.

As you query your data, you would have to write, "I want to have a join between the metrics that only have the host tag and this other metadata series that has the same host tag," and then pull in these additional tags by doing a series join.

But our feature offers a more transparent solution, allowing for what feels like native tags for filtering, grouping, auto-complete, etc. Unlike Prometheus's series joining, users don't have to do anything explicit. Additionally, with Prometheus, you can't backfill the external tags; with Metrictank meta tags, you will be able to add new tags to old series.

## Implementation

Our current tag index is fairly standard, using postings lists to link tag key/values to metric metadata. Query evaluation happens by ordering the individual query components by cost (cardinality) and executing them as a pipeline with some degree of parallelization. 

With the meta tags project, we're adding postings lists to link the meta tag key/values to "metarecords," where a meta record defines which tags (meta tags) should be added and for which query expression. This way, query patterns hitting meta tags can use the same query execution system, but using an additional step. (Execute the query on the meta tags postings lists, then execute its corresponding tag queries -- along with remaining query components on regular tags -- on the regular postings lists to resolve the metric metadata.)

As far as returning the data in a seamless way, we have an "enrichment" step wherein we add the meta tags as regular tags to the returned series, to make it transparant for the user. This part will most likely come with a cache to speed up enrichment of frequently queried series.

All meta tag operations are API-based, so you'll be able to add, remove, manage, and update all associations via an API call to any of the cluster nodes (which in turn propagates to other nodes), and the rules will be safely persisted as well.

The [design document](https://docs.google.com/document/d/1Kk3QYd3X1yIEUcRFigEjdx23dgZMEH2lM4pmka9oAcc/edit#heading=h.4h32hax3yfmx) covers various interesting edge cases and design constraints. One particular aspect that I find interesting is how to effect an update in meta tag rules across a Metrictank cluster. We weighed various consistency trade-offs but ultimately decided that at least for v1, a relaxed, eventually-consistent model will suffice. Here's an example: If you have a thousand hosts with a thousand series each, and you add a rule that says "For all of these thousand hosts, it should be known that they are a part of this data center," the implication is that as that rule is being applied when you query for that data center, you're not going to see all of these million series at once. You'll gradually get more and more results as the api tag associaton is deployed throughout the cluster. We can revisit this model later if needed.

For more details you can check out the [conversation on Github](https://github.com/grafana/metrictank/issues/660) or the [design document](https://docs.google.com/document/d/1Kk3QYd3X1yIEUcRFigEjdx23dgZMEH2lM4pmka9oAcc/edit#heading=h.4h32hax3yfmx).

## The Upshot

Meta tags will be a seamless, powerful feature for Metrictank. They're the next step in providing a scalable way to enrich large masses of series with redundant tags, but at a fraction of the cost and using a convenient API to manage the associations. They'll work seamlessly alongside regular tags. We've had several customers ask for a feature along these lines and are excited to be able to bring it to Metrictank, with the help of our friends at Bloomberg.

