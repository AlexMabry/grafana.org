+++
title = "How SevOne Is Live Streaming Grafana Data Sources"
author = "jdam"
date = "2019-04-XX"
keywords = ["Grafana", "Livestreaming", "Datasources", "Prometheus"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "How SevOne is live streaming Grafana data sources"
excerpt = "SevOne, a 14-year-old company in the network monitoring space, started using Grafana for self-monitoring and fell in love with it. Now they've developed a feature to live stream data sources."
categories = ["Grafana"]
+++

[SevOne](https://www.sevone.com/), a 14-year-old company in the network monitoring space, started using Grafana for self-monitoring last year because there weren’t many frontend engineers in the organization at the time. 

“We fell in love with it,” SevOne Tech Lead Sean Lafferty said during his [GrafanaCon talk](https://www.youtube.com/watch?v=PfGprOffOxk&list=PLDGkOdUX1UjqKc3ryyoSpWZvs7yktklQr&index=32&t=11s) about how the company live streams Grafana data sources.

The company’s flagship product is a racked-and-stacked physical appliance that collects SNMP, Netflow, and more, monitoring some of the largest networks in the world, including carriers, telcos, and financial firms. SevOne is also about to release a new SaaS monitoring product that the team built from the ground up “to solve a lot of the pain around some of the largest Prometheus deployments,” Lafferty said.

##Extremely High Frequency Data

That requires streaming extremely high-frequency, extremely high-cardinality telemetry data. “As we started to build this out, we realized we needed a good way to visualize the value of having this high-frequency data,” he said. 

“We started using Grafana more and more, but we realized there was trouble getting the wow factor of having live sub-second data when Grafana has a one- or five-second timer,” Lafferty said. “We started turning the timer lower and lower in Grafana and trying to render the data faster and faster. This is not a great UX, and we also started to have other problems where if you have data at a 100-millisecond frequency, you start getting like 30,000 points over the wire every one second, two seconds. That’s not great because we have to pay for the egress, and the user has to bring that over their network.”

##A Need to Livestream

“We started to ask ourselves: How difficult could it be for Grafana to live stream this data for us? Can we do it in our data source? Would we have to fork Grafana? Would they be interested in taking this upstream?” Lafferty said. 

After a bit of investigation, the team found that there was a relatively simple solution. “This isn’t something that’s well-documented in Grafana, and I’m not sure if it’s even really officially supported,” Lafferty said, “but the data structure that you normally send as a data source, you can wrap that in an RxJS observable object.”

This feature exists in the Grafana code base because of some earlier experiments around web sockets. Basically:

1. Put your data in the observable object and use an http library that supports unclosed http connections (such as the fetch API) to listen for new data.

2. Feed that data into the RxJS observable, and you as the data source can implement live streaming without having to make any core changes to Grafana.

“It’s so much data to transfer over the wire, and we don’t have to resort to buffering the data,” Lafferty said. “It’s been a godsend for us as we’re trying to build this product that can handle millions of data points per second, and we need super-granular insight into how our message queue is performing and how ingestion pods and stuff are scaling up and down.”

##Use Cases and Caveats

Lafferty pointed to other possible use cases for this feature: IoT services that have big periods of no data, but then lots of super-granular, dense data; emergency services that need to see this data as fast as possible. 

But before that, he said that some improvements are needed. 

1. The panels never finish loading because the data’s always coming in, so a lot of the graph interactions, such as zooming, don’t work.

2. “It’s really easy to destroy the browser,” he said. “Once you’re using sub-second data, it’s just like a cannon pointed at your foot.” For example, if you’re repainting every time metrics come in, and they’re coming at 10 metrics per second, he pointed out, you might be repainting every hundred milliseconds. Repainting needs to be buffered.

3. It’s hard to control the life cycle of the open streams because the panel never finishes rendering.

4. If you have live data and non-live data together on a panel, UX can be confusing.

Still, Lafferty said the SevOne team is excited to continue working on the feature. If you’re interested in experimenting with it, check out Lafferty’s [example code](https://github.com/seanlaff/simple-streaming-datasource). 

