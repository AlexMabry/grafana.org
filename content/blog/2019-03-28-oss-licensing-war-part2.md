+++
title = "Everything You Need to Know About the OSS Licensing War, Part 2."
author = "raj"
date = "2019-03-28"
keywords = ["Grafana", "GrafanaCon", "OSS", "License"]
cover_image = "/assets/img/blog/hyperspace_falcon.png"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Where we left off: AWS had taken the Elasticsearch software and launched their own cloud offering in 2015, and Elastic N.V. had doubled down on an 'open core strategy.'"
categories = ["Grafana", "GrafanaCon"]
excerpt = "Where we left off: AWS had taken the Elasticsearch software and launched their own cloud offering in 2015, and Elastic N.V. had doubled down on an 'open core strategy.'"
+++

[Where we left off](https://grafana.com/blog/2019/03/20/everything-you-need-to-know-about-the-oss-licensing-war-part-1./): AWS had taken the Elasticsearch software and launched their own cloud offering in 2015, and Elastic N.V. had doubled down on an "open core strategy."

Once AWS decides to offer a project like Elasticsearch, it immediately becomes a truly formidable competitor to anyone trying to do the same, even the company behind the software itself. AWS has huge scale, operational expertise, and various network effects that really compound.

Over time, however, AWS struggled to keep up with all the new versions of Elasticsearch, and all the innovation coming out of Elastic N.V. The version they had originally taken had to be heavily customized, and it fell behind the latest and greatest from Elastic N.V. and the open source community. It became "vintage" -- not a good look for software.

To me, this is almost unconscionable on the part of AWS, given the huge revenues brought in by the service. The engineering effort required by AWS would have been minimal. It should have been an easy decision for them to invest in some upkeep and maintenance and at least rebase their code.

Despite these problems, it’s rumored that the revenue of the AWS Elasticsearch service has grown to eclipse the entire revenue of Elastic N.V. AWS had captured more value selling Elasticsearch than the company that had created it. It was a testament to the power of AWS.

## An Escalation of Hostilities

Last year, a whole slew of open source companies -- including Elastic N.V., MongoDB Inc., Confluent (the company behind Apache Kafka), and Redis Labs (the company behind Redis) -- made pretty drastic and sudden changes to their licenses.

Elastic N.V. evolved their "open core" strategy, further blurring the lines between open source and commercial. They started to make some of its commercial software available for "free" to its users, and even allowed them to see the source code of that software. But the company carefully added restrictions to its license so that public cloud providers couldn’t do the same.

Some of this code was "open" but not open source. Elasticsearch was walking a very fine line deliberately designed to protect itself from the likes of AWS. Some thought they weren’t being clear enough about what was open and what was not. Had they gone too far?

MongoDB Inc. took a more direct approach, releasing MongoDB in its entirety under a new license, the SSPL. Its main purpose was to prevent public clouds like AWS from using the software to offer a MongoDB service. Was MongoDB even open source anymore? Did the company care? Did the community? The Internet was abuzz.

MongoDB Inc. had previously disclosed to investors that it soon expected 50 percent of its revenue to come from delivering MongoDB as a service. The world was trending toward consuming software as a service, and the license change would prevent anyone else from competing with the company’s ability to offer that. It seemed like a winning strategy.

These commercial open source companies were fighting back -- and fighting for their valuations.

They’re faced with an existential question, particularly when they’re VC-funded and burning money: Can they monetize fast enough to command their eye-popping valuations? Can they capture enough of the value that their open source projects create?

## The Nuclear Option

The war took on a more sinister and existential tone in early March, when [AWS announced its "open distribution for Elasticsearch"](https://aws.amazon.com/blogs/opensource/keeping-open-source-open-open-distro-for-elasticsearch/) (ODE) project, which strives to provide a "truly open source" (Apache2 licensed) distribution of Elasticsearch.

AWS had gone from taking open source to forking it.

The new fork of Elasticsearch will not only power Amazon’s hosted offerings, but it also has the potential to split or shift the center of mass of the open source community away from Elastic N.V.’s own offering.

AWS downplays the fact that this is a fork in their blog:

> "Our intention is not to fork Elasticsearch, and we will be making contributions back to the Apache 2.0-licensed Elasticsearch upstream project as we develop add-on enhancements to the base open source software."

I think that it is a fork, and that AWS is being disingenuous. It’s a fork because of the intentions and the messaging, not because they say their "intention" isn’t to fork. It’s a fork because attempts to merge changes back will be half-hearted at best on both sides.

So the codebases will diverge, and the community has the potential to split. But that’s obviously the implicit threat being made by AWS with this shiny new "distribution."

The ability to fork is what gives open source its power. It’s an indictment against the leadership and governance of the open source project, a call to arms to the community to choose sides. Indeed, after waxing on how awesome Elasticsearch is, and how it has "played a key role in democratizing analytics of machine-generated data," AWS spoke out pretty aggressively against Elastic N.V. in the blog:

> "Unfortunately, since June 2018, we have witnessed significant intermingling of proprietary code into the code base. While an Apache 2.0 licensed download is still available, there is an extreme lack of clarity as to what customers who care about open source are getting and what they can depend on."

Elastic N.V. did play a bit fast and loose with how it reframed "open" and how it made the default distribution of Elasticsearch veer more into shareware territory than open source. But the company also went out of its way to make pure open source versions of its software available and to communicate what it was doing. Fundamentally, Elasticsearch is still very much a liberally licensed open source project, and Elastic N.V. has invested significantly to improve it over the years.

And AWS adds insult to injury:

> "The maintainers of open source projects have the responsibility of keeping the source distribution open to everyone and not changing the rules midstream."

So a company that makes most of its money selling a closed source cloud that has lock-in as a goal -- and capturing a huge amount of the value created by open source -- is preaching to open source companies that they have to stay purely open source? This makes me laugh.

AWS doesn’t "support OSS" as it claims. It just wants to commoditize popular open source software so it can rent out its high-margin computers. AWS simply doesn’t have the political capital in the open source world to make that kind of moral judgement.

But could this be a new dawn at AWS? Are things changing? The company currently has a poor reputation, even compared to other public clouds, when it comes to participating in open source communities. Can AWS get good at running open source projects and actually build a real community of users, not just customers? It’s certainly within the realm of possibility.

What about Elastic? Where do they go from here?

And what about Grafana Labs? How has watching this unfold changed our perspective? Will we start playing the same licensing games used by companies like Elastic and MongoDB? Are we worried about our business?

Stay tuned for the third and final part of the blog, for my own opinions on these topics.
