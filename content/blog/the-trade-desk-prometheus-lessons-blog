+++
title = "The Trade Desk: Lessons We Learned Migrating from Homegrown Monitoring to Prometheus"
author = "jdam"
date = "2019-05-01"
keywords = ["Prometheus", “TheTradeDesk”]
cover_image = "/assets/img/blog/bargauge/cover.jpg"
cover_opacity = "0.3"
cover_blur = "3px"
description = "The Trade Desk SRE Patrick O’Brien shares the lessons the company learned migrating from a homegrown monitoring system to Prometheus."
excerpt = "The Trade Desk recently moved from an old monitoring system based on Nagios, Graphite, and a number of homegrown pieces of software, to something more standard, based on Prometheus. SRE Patrick O’Brien talked about the lessons they learned along the way."
categories = ["Prometheus"]
+++

[The Trade Desk](https://www.thetradedesk.com/) provides a self-service, cloud-based platform for buyers of online advertising. Since its founding in 2009, TTD has grown into a publicly-traded company with more than 900 employees and a market cap of $8.89 billion. 

The company recently moved from an old monitoring system based on Nagios, Graphite, and a number of homegrown pieces of software, to something more standard, based on Prometheus. SRE Patrick O’Brien [gave a talk at GrafanaCon](https://www.youtube.com/watch?v=uAIZ6AsqWL8&list=PLDGkOdUX1UjqKc3ryyoSpWZvs7yktklQr&index=18) about the lessons they learned along the way to processing 11 million requests per second with Prometheus.

**1. Think about your (hard) alerts.**

When migrating alerts defined in a legacy alerting system into a new system, O’Brien said, “90% of those alerts will be insanely easy to move over. It’s the remaining 10% that will be difficult.” O’Brien’s advice: Spend time figuring out which ones will still be useful in the new system, and how you’ll actually migrate them. “Oftentimes, especially coming from Nagios, we’ll have Python scripts that do many different things in that single script to kind of figure out if there is an issue,” he said. “Those are the hard ones and that’s where your longest tail of the project will be.” 

**2. Prometheus documentation is clinical.** 

“I’m super happy to now hear that we can contribute better documentation,” O’Brien said. “You will get a lot of PromQL questions when you start rolling up Prometheus, and it’s best to kind of become an expert in that as much as possible.” 

**3. Do maths.**

“We immediately hit cardinality issues because we have a lot of hosts,” O’Brien explained. Users were told to make metric names generic and not embed any metadata into them, but add labels instead. “We hit 2 million metrics in the single namespace in like 30 seconds,” he said. “It was terrible and it was very painful... so maybe embed some metadata in that metric name.”

**4. Find a few internal evangelists.**

O’Brien gave a shout out to one TTD engineer, Nathan, who “knew many more developers than I knew, and so he was able to kind of work with them, show them in code how it works, show them the benefits, and was able to reach much further than I was able to reach. It was fantastic.” 

**5. Create a dedicated team.**
The more opinions on how to do something, the better,” he said.

**6. Get involved in the community.**

“This one kind of speaks for itself,” O’Brien said. “You learn more about the product, you learn more about the project, and you’re able to help everybody else out.”
