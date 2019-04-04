+++
title = "A Look at the Latest Cloud Data Source Plugins in Grafana"
author = "michelletan"
date = "2019-04-04"
keywords = ["Grafana", "CloudWatch", "AzureMonitor", "StackDriver"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "With the recent release of Azure Monitor and Google Stackdriver plugins, the engineers at Grafana Labs have their heads in the clouds."
excerpt = "With the recent release of Azure Monitor and Google Stackdriver plugins, the engineers at Grafana Labs have their heads in the clouds."
categories = ["Grafana"]
+++



The engineers at Grafana Labs have their heads in the clouds.

"This is a new world: We have hybrid clouds and multiclouds," Daniel Lee [told the crowd](https://www.youtube.com/watch?v=CoMX5Ky7uwQ&list=PLDGkOdUX1UjqKc3ryyoSpWZvs7yktklQr&index=13) gathered at [GrafanaCon 2019 in Los Angeles](https://grafana.com/blog/2019/03/19/grafanacon-l.a.-recap-grafana-6.0-lgtm-and-more/). And the advantage clients have when using Grafana’s hosted services is that "they can deploy them on any cloud," said Lee.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CoMX5Ky7uwQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

"With new data sources and new forms of data that you can get into Grafana, you can visualize, analyze, and understand all your systems," said Lee. "We keep moving with the times."

In addition to AWS Cloudwatch, which was added to Grafana in 2015, Grafana Labs recently released [Azure Monitor](http://docs.grafana.org/features/datasources/azuremonitor/) as well as [Google Stackdriver](http://docs.grafana.org/features/datasources/stackdriver/) plugins in Grafana v6.0.

"Grafana's all about avoiding vendor lock-in," said Lee. "It fits with our core vision of democratizing metrics."

Here is a look at the latest cloud data source plugins:

## Azure

[Microsoft’s Azure Monitor](https://azure.microsoft.com/en-us/) is no stranger to the Grafana community, having had a plugin for nearly two years.

The plugin supports four different Azure services: infrastructure metrics, application metrics and insights, and log-based metrics, in addition to monitoring. "You have support for three different types of metrics in one data source," said Lee. "As a bonus, you will get Grafana Alerting as well."

But if it's already a plugin, why move it into Grafana’s core offerings? "We're basically committing to a higher level of support," explained Lee. "With so many plugins, often support for them is sporadic. But now with Azure Monitor, we are committing to keeping it in tip-top shape, improving it, and fixing any bugs that come up."

So if any of the growing number of clients who use Azure Monitor reports an issue, "it will be resolved in one day," said Lee.

Like Grafana Labs, Microsoft wanted Azure to be flexible across different services. "One of the nice things is the ability to bring together a visualization that joins data from multiple sources, from something like CPU percentages to application insights," said Brendan Burns, Distinguished Engineer at Microsoft.

"With metrics, people want consistency," said Burns. While Azure supports government clouds as well as public clouds, "it's great to be across all of these clouds, but when you come to something like monitoring, you want it to look and feel the same no matter where you are."

In addition to being able to "mix and match" different data sources, "it's great to be able to provide Grafana to people who are using a SaaS-based monitoring inside of Azure," said Burns.

Other features of the Azure Monitor plugin that Burns highlighted included the ability to edit queries, even within the in-line Grafana experience.

Also, with its log analytics service, Azure can help manage a Kubernetes cluster, log straight to the standard output stream, get the data into log analytics, and visualize the information in Grafana. "That’s a really great ability for users," said Burns.

And capabilities such as dimension filtering, templating and alerting are "a nice value-add for a lot of people," said Burns.

In other words, said Lee, the Azure Monitor plugin "is a bit of a beast."

## Stackdriver

Google provides a broad suite of products through [Stackdriver](https://cloud.google.com/stackdriver/), which helps improve the development experience on GCP as well as other cloud environments.

Services included on Stackdriver are monitoring (for platform system applications, your metrics, and custom metrics), logging (for log-based metrics and alerting), APM (Trace and Profiler are provided; Debug is in production), and IRM (for command and control systems for instances and instance repositories). Instance response management was also introduced last year.

But there’s one area where GCP couldn’t get ahead of the game. "We've got lots of user feedback saying we, as a GCP user, like how Stackdriver improved over the years, but in terms of UI visualization, we still like the way that Grafana does things," said Joy Wang, Product Manager on Google Stackdriver.

So in early 2018, the GCP team reached out to Grafana Labs to collaborate on building a plugin together. Or as Wang put it: "I made some requirements, Daniel did all the work."

"It's been great to work with Google, helping us with all our questions," said Lee of the development process. "They're sort of guinea pigs in a way, because it's the first data source written in React in Grafana."

By October 2018, the beta version of the Stackdriver plugin was announced at Google Next, and a few months later, the feature advanced to GA on Grafana v6.0.

"At Google, lots of projects are open source, and we believe that as a GCP user, you benefit from open source solutions like Grafana [because] you get to choose what monitoring solutions you want for all the infrastructures that you have," said Wang.

Wang also gave GrafanaCon attendees a preview of the notable updates to Stackdriver coming this year. "Basically, we're doing a lot of things on the UI to allow users to put SRE best practices in place and also share those best practices with your coworkers," she said.

On the monitoring front end, Stackdriver will introduce more widgets as well as allowing users to apply group-bys and filters on a dashboard level and save views of one dashboard. "You can slice and dice your metrics in a different way," said Wang. "That will help users do in-context, ad-hoc analysis much faster."

Stackdriver is also introducing Kubernetes monitoring, and SLO monitoring is another key concept for Google SRE. "We're working on getting the service level monitoring and SLO monitoring out-of-box for users," said Wang.

Finally, there will be "APIs for everything," said Wang. "Later this year, we're also announcing account API dashboards that allow users to set up their monitoring from end to end automatically. We're also bringing up metric granularity and retention."

"That's only a fraction of the features that we're working on," said Wang. "There's a lot more to come."

## Oracle

The [Oracle Cloud Infrastructure](https://cloudnative.oracle.com/) (OCI) allows users to launch any type of instance from a VM to bare metal servers to GPU shapes, all for the same API and console. But recently "we've been focusing a lot on supporting container-native workloads," said Mies Hernandez van Leuffen, VP of Solution Development at Oracle Cloud Native Labs.

So in December 2018, Oracle [launched](https://www.oracle.com/corporate/pressrelease/oracle-cloud-native-framework-121118.html) the Oracle Cloud Native Framework, which consists of Oracle’s managed Kubernetes solution (OKE) as well as a container registry that is completely Docker v2 compatible.

"The managed Kubernetes solution runs plain vanilla Kubernetes, nothing forked," said Van Leuffen.

"At the same time, we've been working a lot with other companies rooted in open source to build up these ecosystem partnerships," said Van Leuffen. "To that end, we're pretty excited to launch our Grafana plugin."

The [Oracle plugin](https://grafana.com/plugins/grafana-oracle-datasource/license) can be installed either via local environment, through Kubernetes, or on a VM. It allows users to surface and graph metrics from the OCI monitoring service. "The current metrics that we support are the Compute Agent, Block Store, Load Balancer, and Virtual Cloud Networks," said Van Leuffen.

From the beginning, it hasn’t been a hard sell for companies to see the value in the Oracle plugin. "We have a pretty cool launching customer that is already using this in production," said Van Leuffen. "It's called [Booster Fuels](https://www.trybooster.com/), and they effectively bring the gas station to your car, as opposed to the other way around."

Added Van Leuffen: "Our mission is effectively to build customer deployable cloud native and container-centric solutions that bridge the gap between where OCI is today and what customers would like to use in terms of open source projects that we all know and love."

Check out more sessions from [GrafanaCon2019 on YouTube.](https://www.youtube.com/watch?v=EsU8558QQIw&list=PLDGkOdUX1UjqKc3ryyoSpWZvs7yktklQr)