+++ 
title = "How Bloomberg Tracks Hundreds of Billions of Data Points Daily with MetricTank and Grafana" 
author = "michelletan" 
date = "2019-04-17" 
keywords = ["Bloomberg", "MetricTank", "Grafana"] 
cover_image = "/assets/img/blog/bargauge/cover.jpg" 
cover_opacity = "0.3" 
cover_blur = "3px" 
description = "Bloomberg Terminal's enterprise premium service handles about 120 billion pieces of data daily. Here's how they monitor it with Grafana and MetricTank." 
excerpt = "'People seem to notice when the Bloomberg Terminal doesn't work,' said Stig Sorenson, Head of Production Visibility Group at Bloomberg. 'We have had a few outages that were high profile, so about three years ago we decided to embark on a journey where we took telemetry a bit more seriously.'" 
categories = ["MetricTank", "Grafana"] 
+++

Bloomberg is best known as a media company with its news destination [site](https://www.bloomberg.com/), its award-winning magazine [Bloomberg Businessweek](https://www.bloomberg.com/businessweek), and its daily 24-7 social media program, [Tic Toc](https://twitter.com/tictoc?lang=en), on Twitter. 

But the main product for the 38-year-old company is actually [Bloomberg Terminal](https://www.bloomberg.com/professional/solution/bloomberg-terminal/), a software system that aggregates real-time market data and delivers financial news to more than 325,000 subscribers around the world. The enterprise premium service handles about 120 billion (that’s billion) pieces of data from financial markets daily, 2 million stories from its news division and affiliates, and a messaging network (think “Instant Bloomberg”) that fields 1 billion messages.

“With all this, people seem to notice when it doesn't work,” said Stig Sorenson, Head of Production Visibility Group at Bloomberg. “We have had a few outages that were high profile, so about three years ago we decided to embark on a journey where we took telemetry a bit more seriously.”

Since 2015, Bloomberg’s central telemetry team has been growing steadily -- and the same could be said for its influence within the company. Today, “we’re storing 5 million data points a second and running over 2,500 rules on our metrics stream,” said Software Developer Sean Hanson during his [talk](https://www.youtube.com/watch?v=9wrI2iwbP94&list=PLDGkOdUX1UjqKc3ryyoSpWZvs7yktklQr&index=5) at [GrafanaCon 2019](https://www.youtube.com/watch?v=EsU8558QQIw&list=PLDGkOdUX1UjqKc3ryyoSpWZvs7yktklQr) in Los Angeles. “We also do a bit more on the log side with about 100 terabytes of raw log data a day and a lot of legacy log rules.” 

<iframe width="560" height="315" src="https://www.youtube.com/embed/9wrI2iwbP94" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Their most impressive feat, however, was rallying 5,500 engineers around streamlining their monitoring systems. “It's a hard problem when you have a lot of independent users and a lot of teams,” Hanson admitted. “For a lot of users, monitoring is not a priority ... So we try to give them as much as we can without them actually having to do something.” 

Here’s how the telemetry team embarked on their “safari of stability” by solving three key problems within their infrastructure.

## 1. Centralizing Data

Historically Bloomberg isolated software so that outages only affected a small subset of customers. Teams would get an alert about a sub-failure and evaluate their individual products, utilizing their own data sources and their own telemetry stack.

However, working in silos led to issues when there was either an unforeseen single point of failure or when the alerts would snowball into multiple failures.

With teams working in isolation, “the outage would linger until it got bad enough that someone from the outside, either on our environment support team or a high-level manager, would be like, ‘Hey, I think you might all be working on the same problem independently,’” said Hanson. “Then the teams would piece together all of the individual data to track down a root cause.” 

The telemetry team’s first step to stem this problem was to deploy agents to as many machines as possible to collect system metrics -- file system, operating system, etc. -- as well as each machine’s process tables. The telemetry team also worked with key infrastructure teams to gain insight into system frameworks within individual services, queues, or databases. 

The goal was to centralize the data and provide a broader picture of the operating infrastructure at any given time. The Head of Engineering now has high-level system health dashboards in place to monitor outages. “Once we provided all of these displays, we were able to narrow down the pieces of data that could help triage outages as they happened or prevent them if we could alert on them,” said Hanson. 

The Grafana dashboards also became valued assets throughout the organization, from high-level execs such as Sorenson who want a monitoring overview, to developers who want drill-down links on all the panels, to programmers who extract insights through a query API for more complex analysis.

"We have one place that users go to, to configure everything for their metrics, logs, alerts, Grafana folders, and distributed traces" said Hanson.

More importantly, the team automated processes to implement SRE best practices moving forward. Firm-wide rules around CPU, memory, file system storage, and service frameworks “take effect as soon as users create a new service or spin up a new machine,” said Hanson. Plus, because they are hooked into the machine-building process now, “even the machine creation process can publish its own metrics and report failures.”

## 2. Unifying Alerts

Prior to the formation of the telemetry team, Bloomberg had various systems that created different notifications. 

Now, not only are alerts centralized. A link is served with every alert that shows correlation -- what happened around the same time on the same set of machines or for the same basic rule -- so teams can quickly detect whether it is an isolated incident or a problem with their software.

“All of the alerts we generate have a similar look and feel and a base set of information that we require which include our remediation plan,” said Hanson. “Every alert that comes out should have an action or a call to action available to you right at the top.”

In the case of tags, the team enforces tag key registration, not tag values, to ensure that when users try to register PIDs or timestamps as tag keys, they are alerted that they are off-base. 

“We really wanted it to be easy to do the right thing, hard to do the wrong thing, but still possible to do something non-standard that we decide is sane,” added Hanson. “We designed our APIs to try to facilitate this.” 

Recently the team has taken the initiative to meet with cross-functional teams “to talk about use cases and guide people to pre-built solutions where they exist or teach them how to use existing tools to build on top of,” said Hanson. “If there's a really good use case or if we see it a lot, we just build it into our system so that people don't have to even think about it. They just get it.”

## 3. Simplifying Queries

Bloomberg’s dashboards live in one “massive” Grafana instance that provides templates and uses the same query language and API as Graphite. 

As users adapted to using the metrics, “we had growing dimensionality where users really want to drill down a lot into their data,” said Hanson. “So they want to keep adding more tags or labels, and some of the frameworks like Kubernetes cause a lot of transient time series to come around.” 

In other words, more time series means more RAM. So this is where MetricTank came into play.

With MetricTank’s pattern-based pruning rules in the index and pattern-based retention rules, “we came up with a Goldilocks approach where users could pick their favorite flavor from three,” said Hanson. “If they want aggregate data for 10 years of trend analysis, they can pick longer lived. Or if they want advanced drilldowns, they can do that, but they don't get the data for as long … We let the users pick, we apply it as a tag, and MetricTank does the rest.”

One snag the team hit with MetricTank came after releasing their query API to users for programmatic access. Problems came up for “[users] making a lot of queries sequentially or for users using the tag-based auto-complete in Grafana,” said Hanson. “When you get two-, three-, five-second lag on auto-complete, it's pretty frustrating and noticeable. The more beta users that came onto the query API, the slower it got, until we had a daily report that took two days to run.”

Working closely with the Grafana team, the Bloomberg team implemented speculative querying which issues redundant queries to other replicas when slow peers were detected. This reduced the run time for daily reports down to four hours. “We also implemented native functions in MetricTank which prevented proxying through Graphite Web,” explained Hanson. “After that, we are now down to an hour and a half for our daily report. So there's really not much more we can optimize there without actually trying to optimize the report itself.”

## So What’s Next? 

Improving dashboard discoverability is the next item on the Bloomberg Telemetry punch list.

Bloomberg currently has more than 3,500 dashboards in more than 500 folders, and there are many generic dashboards that prove to be popular and copied internally. But while imitation is the best form of flattery, it’s a poor form of organization. 

Dashboards get copied repeatedly with names that are barely distinguishable from the next to the point that it’s hard to organically surface the original dashboards within the system. “People were only finding them by being linked through tickets,” said Hanson.

While folders and permission settings help limit access and editing rights to key dashboards, it didn’t solve the issue of rampant dashboard copies appearing in the system. So Bloomberg again reached out to Grafana Labs for a solution. 

Together, the teams are working to enhance the auto-complete function. “This would allow us to  search for keywords, descriptions, or even maybe metric names or tag labels inside the queries, which would be great,” said Hanson. 

The goal is for Bloomberg’s telemetry team to “score” dashboards based on popularity with a custom weighting system. They are hoping to develop functions such as tagging dashboards “official” vs. “experimental” so users know which ones are more reliable compared to others. 

Another big project: [Meta tags](https://grafana.com/blog/2019/04/09/metrictank-meta-tags/), a seamless and cost-effective way to add metadata, is also in the works.

In creating a sustainable monitoring infrastructure, “starting with some good open source technology gets you a big step up,” said Hanson. “But since you didn't build it, it might not work for you right off the bat. So we can’t be afraid to jump in and improve the product for yourself and the wider community.”

After all, “investing in telemetry pays dividends,” said Hanson, “which is my obligatory financial joke I save for the very end.” 

For more from [GrafanaCon 2019](https://grafana.com/blog/2019/03/19/grafanacon-l.a.-recap-grafana-6.0-lgtm-and-more/?utm_source=blog&utm_campaign=timeshift_82), check out all the talks on YouTube. 
