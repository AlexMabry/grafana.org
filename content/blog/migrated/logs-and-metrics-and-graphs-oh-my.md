---
title: "Logs and Metrics and Graphs, Oh My!"
author: brian_brazil
date: 2016-01-05
categories:
  - "Monitoring"
  - "Prometheus"
  - "Guest"
aliases:
  - /logs-and-metrics-and-graphs-oh-my/
---

Grafana is used by hundreds of thousands of users on a wide variety of [data sources](http://docs.grafana.org/datasources/overview/). Among these there is a division in approaches to collecting the data. These are logging as exemplified by Elasticsearch as part of the ELK stack (Elasticsearch, Logstash and Kibana), and metrics as exemplified by Prometheus.

What do I mean by monitoring? Monitoring means knowing what’s going on inside your system, how much traffic it’s getting, how it’s performing, how many errors there are. This is not the end goal though, merely a means. Our goal is to be able to detect, debug and resolve any problems that occur, and monitoring is an integral part of that process.

Let’s look at how logs and metrics help us with this goal.


### Logs

Logs come in a variety of forms. On a Unix system you’ll find a variety of logs, from text logs in /var/log/syslog, binary logs in wtmp and a multitude of application logs usually organised under /var/log.

When it comes to monitoring, what we’re going to talk about today are application logs. More particularly request logs. For each request, there’ll typically be a line in the file telling us which endpoint did it hit? How long did it take? What was the return code? What was the source IP address?

	127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326

Logs can be shipped off to a central ELK stack, analysed to provide aggregation information and ultimately graphed.

### Metrics

Metrics are also varied, we’re going to just look at one type of metric called a Counter. Every time an event of interest happens you increment a variable inside your process. This might be a request being completed, an error occurring, or incrementing a variable by the duration of a request to a particular endpoint.

Implementations vary in what types of variables you can have, being able to increment by non-whole numbers is handy for things like latency which tends to be fractions of a second. Even better is if your instrumentation library abstracts away the problem of measuring time, and leaves handling units to a front end system like Grafana.

	# HELP api_http_request_total HTTP requests to the API
	api_http_request_total{method="post",code="200"} 5027
	api_http_request_total{method="post",code="400"} 1023

At regular intervals the current values of all the metrics are transferred to the monitoring system, which will allow you to analyse them on the fly to produce graphs. For example Prometheus can scrape all the values every 10s and calculate how quickly each is increasing when a graph is needed.

### Graphing

![](/assets/img/blog/migrated/Screenshot-2016-01-04-16-53-30.png)

Both approaches allow creation of high-level graphs to know how many requests your application is serving, how quickly and with how many errors. Both also allow you to slice and dice. Want to know how many errors were served from /my/endpoint on server #3 over the last hour? No problem.

### Pros and Cons

Being able to create some of the same graphs is not to say that each approach is identical, each comes with its own costs and benefits.

Logs contain individual events, so as your user base and features grow so does the amount of logs you have to handle. That means higher I/O and network requirements, 10 servers logging 1KB for each of 1000 requests per second will fill most of a 100Mbit connection! This puts a limit on how much your logging platform can handle. On the plus side you can drill down to individual events and see for example the exact slow request that bumped the average latency.

Counters are maintaining aggregate state across events, so drilling down to individual requests isn’t possible for anything bar the lowest-traffic of services. This aggregation means that the amount of requests per second isn’t what affects the load on your system, rather it’s the number of metrics you have. Whereas the 1KB of logs per request might let you have the equivalent of 100 metrics, at 1000 requests per second the same amount of network bandwidth would allow for 1,000,000 metrics per server every 10 seconds.

For the sake of operational sanity, actually pushing such a high level of logs or metrics is not advised :)

<table class="plain" cellpadding="1" cellspacing="1" border="0" style="font-size: 60%;">
	<th colspan="8" style="border: none; text-align:center;">Requests</th>
	<tr>
		<td style="border:none;"></td>
    	<td  style="border-left: 2px solid #000; border-top: 2px solid #000;">GET</td>
        <td  style="background-color:#555; border-top: 2px solid #000;color: white">/foo</td>
        <td style="border-top: 2px solid #000;">200</td>
        <td  style="background-color:#555;color: white; text-align:right; border-top: 2px solid #000; border-right: 2px solid #000;">2326</td>
        <td>true</td>
        <td  style="background-color:#555; text-align:right;color:white;">3</td>
        <td style="text-align:right;">0</td>
    </tr>
    <tr>
    	<th style="border-top: 2px solid #000; border-left: 2px solid #000; border-bottom: 2px solid #000;">Logs</th>
    	<td >POST</td>
        <td  style="background-color:#555;color: white;">/endpoint</td>
        <td>500</td>
        <td  style="background-color:#555; text-align:right; border-right: 2px solid #000; color: white;">1234</td>
     	<td>true</td>
        <td  style="background-color:#555; text-align:right;color: white">1</td>
        <td style="text-align:right;">15</td>
    </tr>
    <tr>
    	<td></td>
    	<td style="border-left: 2px solid #000; border-bottom: 2px solid #000;">GET</td>
        <td  style="background-color:#555; border-bottom: 2px solid #000;color:white;">/foo</td>
        <td style="border-bottom: 2px solid #000;">200</td>
        <td  style="background-color:#555;color: white; text-align:right; border-right: 2px solid #000; border-bottom: 2px solid #000;">700</td>
    	<td>true</td>
        <td  style="background-color:#555; text-align:right;color:white;">4</td>
        <td style="text-align:right;">0</td>
    </tr>
    <tr>
    <td style="border: none;"></td>
    <td style="color:#555;">▼</td>
    <td style="color:#555;">▼</td>
    <td style="color:#555;">▼</td>
    <td style="color:#555; text-align:right;">▼</td>
    <td style="color:#555; text-align:center;">▼</td>
    <td style="color:#555; text-align:right;">▼</td>
    <td style="color:#555; text-align:right;">▼</td>
    </tr>
    <tr>
    	<th rowspan="2" style="border:none; vertical-align:middle;">Metrics</th>
    	<td>GET : 2</td>
        <td  style="background-color:#555;color:white;">/foo : 2</td>
        <td>200 : 2</td>
        <td  style="background-color:#555;color:white;">latency_sum : 4260</td>
        <td>mobile : 3</td>
        <td  style="background-color:#555; text-align:right;color:white;">images : 8</td>
        <td style="text-align:right;">records_processed : 15</td>
    </tr>
    <tr style="border-bottom: 1px solid #efefef;">
    	<td>POST : 1</td>
        <td  style="background-color:#555;color: white;">/endpoint : 1</td>
        <td>500 : 1</td>
        <td  style="background-color:#555;color: white;">latency_count : 3</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
<br/>

### Comprehensive Toolbox

Logs and metrics are complementary. If you’ve taken the [Inclusive Monitoring]( http://www.robustperception.io/monitoring-not-just-for-outages/) approach, you will have added instrumentation to thousands of places throughout your codebase. Metrics give you an aggregated view over this instrumentation. Logs give you a view of a smaller number of metrics, but give you information about every single request or event.

Metrics are good as a first port of call when dealing with a problem. Combined with well-designed dashboards they allows you to narrow down to which subsystem of which application is behaving oddly. From there you can bring in profiling tools, data mine your logs and cross-check against the source code itself as you deep dive.

Don’t limit yourself by using only one approach to collecting data for monitoring, incorporate both logs and metrics and get the best of both worlds.

