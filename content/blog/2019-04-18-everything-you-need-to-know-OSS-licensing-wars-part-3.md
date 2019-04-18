+++
title = "Everything You Need to Know About the OSS Licensing War, Part 3."
author = "raj"
date = "2019-04-18"
keywords = ["OpenSource", "Amazon", "Elasticsearch", "AWS"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "In the last installment of this blog, Raj Dutt discusses how Grafana Labs is reacting to the ongoing OSS licensing wars that have recently intensified."
excerpt = "In parts One and Two of this blog, we looked back at the ongoing open source licensing wars, focusing on the evolving situation between Elastic N.V. and AWS."
categories = ["OpenSource"]
+++



In Parts [One](https://grafana.com/blog/2019/03/20/everything-you-need-to-know-about-the-oss-licensing-war-part-1./) and [Two](https://grafana.com/blog/2019/03/28/everything-you-need-to-know-about-the-oss-licensing-war-part-2./) of this blog, we looked back at the ongoing open source licensing wars, focusing on the evolving situation between Elastic N.V. and AWS. In this final installment, we’ll offer some opinions on the situation, as well as share our own views on how we’re reacting at Grafana Labs.

## So Who’s Right?

As faithful readers of the previous two installments hopefully realize by now: It’s complicated. Both parties have blood on their hands.

The knock against commercial open source companies is that they are trying to have their cake and eat it too. They want to stop the public cloud vendors from offering their software as a service and making money off their work. But preventing someone from using your software for any purpose violates a core freedom of open source. 

Without those freedoms, many successful open source companies would not have been able to garner the adoption, mindshare, and support they enjoy today. With these new restrictions, they’re turning their back on open source, kicking the ladder out from under them and onto the community.

The knock against the public cloud companies is that they have been “unfairly” and “unsustainably” monetizing open source projects and companies; they’re making billions largely off the code others are creating. Plus, due to scale and channel advantages, the public cloud can stifle companies trying to offer their own software as a service.

## Reversion to a Monoculture

But without contributing back in any notable way (either through people or dollars), the public clouds definitely haven’t lived up to the open source ideal. What’s happening isn’t a sustainable cycle. 

I’ve mentioned how Linux and Red Hat both drove massive value and innovation for the whole infrastructure ecosystem. We’re talking about trillions of dollars of value, across many companies. It was truly a rising tide that lifted all boats. 

I don’t feel the same way currently about the rise of AWS or Amazon. To me it feels more like a tax on our infrastructure, and the reversion to the kind of monoculture that the open source community fought so hard against.

## Or the Beginning of a Change?

In [Part Two](https://grafana.com/blog/2019/03/28/everything-you-need-to-know-about-the-oss-licensing-war-part-2./), I pondered whether the new breed of open source companies could monetize fast enough to command their eye-popping valuations, and whether they’d be able to capture enough of the value that their open source projects create.

Arguably being the “center of mass” for their communities is the most valuable asset that companies like Elastic N.V. and MongoDB Inc. have. 

In releasing the Open Distro for Elasticsearch, AWS forced another, perhaps more interesting question to commercial open source companies: What happens if you get the balance of value creation and value capture wrong? Does it leave your community vulnerable to getting stolen right out from under you? 

## What Does This Mean for Elastic N.V.?

I’ve written about my admiration for Elastic N.V. before. I think they’ve built an incredible business. 

Overall, AWS’s move could be a positive thing for the Elasticsearch community, but it could really hurt Elastic N.V. the company. All of a sudden, much of its commercial differentiators are freely available in a permissive Apache2-licensed fork. That’s a huge potential hit to their monetization plans.

But running an open source project isn’t as simple as throwing some code over the wall and putting up a web page, as AWS has done. It’s about things like shepherding and supporting the community, encouraging committers, and having momentum on a compelling vision. AWS does not have a good track record at any of this. Yet.

## What Does This Mean for Grafana Labs?

We’ve watched these developments with great interest and had a lot of internal discussions and debates. We are still fine-tuning our strategy but are ready to double down on a few important details.

Firstly, we will continue to partner with cloud vendors. Grafana Labs is all about meeting our customers where they are; we have an inclusive “big tent” philosophy which is about more than connecting different data sources -- it’s about connecting different communities and being a trusted advisor to our customers. That’s why we’ve entered into commercial agreements with Microsoft and Google -- to provide a first-class experience for our common users who use Grafana with Azure Monitor or Stackdriver. We hope to replicate this arrangement with AWS.

In addition, while the overwhelming majority of the code we write is open source, we will continue to offer an Enterprise version that is commercially licensed and clearly not open source. But, we will not play games with licensing. Our open source software will be licensed under a standard OSI license, and our commercial software will not be open source. We will be very deliberate about what we monetize and whom we are targeting with our commercial products.

Finally, we will be watching the situation very carefully, and we will be very transparent with our plans if and when they change. We don’t take the community we’ve fostered for granted. Far from it, we consider it to be the foundation that everything we do depends on.

Maybe this is all wishful thinking, and I’m in denial because I run one of these new commercial open source companies. I hope not, because otherwise I’m just poking the 800-pound gorilla in the room.
