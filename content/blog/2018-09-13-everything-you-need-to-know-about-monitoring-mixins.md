+++
title = "Everything You Need to Know About Monitoring Mixins"
author = "jdam"
date = "2018-09-13"
keywords = ["Grafana", "PromCon", "Kubernetes", "k8s", "JSON", "yaml", "Jsonnet", "Ksonnet", "Grafonnet"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Monitoring mixins: A solution for packaging together templates for Grafana dashboards and Prometheus alerts related to a specific piece of software."
categories = ["Grafana", "Kubernetes", "Prometheus"]
excerpt = "Monitoring mixins: A solution for packaging together templates for Grafana dashboards and Prometheus alerts related to a specific piece of software."
+++

![GrafabaCon EU](/assets/img/blog/tom_mixins_promcon.jpg)

There are lots of great community-built dashboards available in the [Grafana website](https://grafana.com/dashboards), and we’ve made it easier than ever to share and download them. But it’s not uncommon for users to import a dashboard and find that it simply doesn’t work because the labels don’t match up. And the same can happen with Prometheus alerts that are shipped with software like etcd.

So how can we fix this? Tom Wilkie, Prometheus developer and VP Product at Grafana, recently gave a talk at [PromCon](http://promcon.io/) in Munich about monitoring mixins, a solution for packaging together templates for Grafana dashboards and Prometheus alerts related to a specific piece of software. The basic premise: “Dashboards and alerts should not be opinionated about the labels; labels should be configuration that you can feed into the dashboards and alerts,” said Wilkie. “We need a process where not only can alerts and dashboards not assume the label sets that they’re using in their queries, but also we can inject them dynamically, and we can stay up to date with changes upstream.”

#### ~~Yaml~~ ~~JSON~~ ~~jinja~~ ~~Go~~ ~~Python~~ Jsonnet

The first step to building mixins was finding a configurable and extensible language for expressing alerts and dashboards, which would allow them to be reusable. Wilkie began a process of elimination: Prometheus alerts are written in yaml, and JSON is a subset of yaml. But these configuration languages “are not very dynamic, or dynamic at all really,” he said. “You can’t really inject labels as I want to, or even inject any kind of configuration.”

The next possibility: string substitution, treating yaml config files as text files and using jinja or Go templates to substitute things in. “The problem there is your substitutions don’t really understand the structure of the configuration you’re manipulating,” he said. “How would you go and add a tag to all of your alerts? Unless that substitution spot has been enabled in the config, you can’t do it.”

Wilkie then presented another increasingly popular strategy of using a Go or Python program to generate config. “The chaps over at Weaveworks have written a Python library called Grafana Lib, and they use Python to generate their dashboards,” he said. “Which is great because you can now write Python code which goes in and modifies your dashboards.” But Wilkie eliminated this method as well, saying “this feels too much like writing programs, and it’s generally a bit of a pain.”

Moreover, he said, “this is not how they did it at Google.”

Just as the cloud native community has taken its cues from Google with Kubernetes (from Google’s Borg) and Prometheus (from Borgmon), Wilkie said he modeled his solution after how that company solved the problem internally. The closest thing available, he said, was the data templating Jsonnet, a powerful extension of JSON that’s easier to write: “It feels a lot like JSON, but it adds variables, conditionals, arithmetic, functions, imports, and error propagation.”

#### Demystifying Jsonnet

In his live demo at PromCon, Wilkie showed how powerful Jsonnet is, even though it’s quite terse.

First of all, you can refer to things, which is the basis on which configuration can be built. You can have a central config that gets referred to in various different places.

Secondly, you can do merges. “This is really the crux of Jsonnet,” he said. “It has really well defined merge semantics. So now you can imagine you use this system to merge in your config into the existing set of dashboards. And this is really the basis on which all the mixin stuff is built. You would take a mixin and merge in some specialization, some configuration.”

Wilkie then demonstrated recursive merges, hidden fields, and string substitution with Jsonnet—what he called “the tool kit we’re using to build up the mixins. There are only three or four operators you need to remember, and because they’re all single character operators, I think at first glance people tend to think it’s crazy.”

#### Watch the live demo:
<div class="video-wrapper">
	<iframe src="https://www.youtube.com/embed/VvJx0WTiGcA?start=7570" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
	</div>
<br />
[Download the presentation slides](https://promcon.io/2018-munich/slides/prometheus-monitoring-mixins.pdf)

#### Building a Mixin

There are four top-level keys in a mixin: config, dashboards, alerts, rules.

The alerts and rules use the same structure that’s in Prometheus yaml. The dashboard is a dictionary of JSON files that contains your Grafana JSON.

Using the [Kubernetes mixin](https://github.com/kubernetes-monitoring/kubernetes-mixin) as an example, Wilkie walked through the code. “In the config, typically every mixin will expose as a configuration the selector it wants to use to select the job, so here we’re looking at a Kube state metric,” said Wilkie. “I like to include the namespace in the job name. This stops me aggregating across jobs in different namespaces. This is how I express my opinion, but you can do it differently because you can override it because it’s Jsonnet.”

The ability to override also solves the problem that occurs when a label changes upstream. Wilkie said that for example, with the Kubernetes mixin, there are default selectors used, but “you can come along and use a different set of labels. So this is my config that overrides those. In my config, I’ve said I want everything to be prefixed with a namespace it lives in. I’ve even made the namespace configurable in certain cases. So this lives in our configuration mono repo, and it gets rendered out to the Kubernetes cluster every time you change anything. And for that I use [ksonnet](https://ksonnet.io/).” (Wilkie explained this further in his [KubeCon talk](https://www.youtube.com/watch?v=b7-DtFfsL6E).)

The definition of the alert “isn’t quite as pretty as yaml, but it’s better than JSON,” he said. “You build up your alert groups, you build up your list of rules, you have pod crash looping, and then in the query you do this big string substitution. I like to do it using name substitution, so I pass in the whole config dictionary to every string. And then I name the field in the config dictionary that I’m pulling out. You could just do `%s` and then do `config.kubestateselector`. But this helps if, for instance, and this is quite common, you might refer to the same selector multiple times within a single query. You might want to refer to multiple selectors within a single query. You’ll notice [the `%s`] is part of Jsonnet, and the curly brace is part of the PromQL query. So that’s how we’ve embedded the two languages. And then when it’s rendered, it gets substituted into the thing you’d expect, and it’s rendered out as yaml.”

#### Making Them Reusable

In an effort to make it easy for people to download, upgrade, and manage these mixins, CoreOS Software Developer and Prometheus contributor Frederic Branczyk built a package manager for Jsonnet called [Jsonnet-bundler](https://github.com/jsonnet-bundler/jsonnet-bundler). “It’s really straightforward,” said Wilkie. “You go and get it, you init, which just writes out an empty log file, and then you can install various mixins. It’s kind of modeled on goget: It builds a vendor tree full of all your mixins, and it will go and recursively fetch other Jsonnet libraries that mixins depend on. So [Grafonnet](https://github.com/grafana/grafonnet-lib) is a Jsonnet library for building Grafana dashboards, so you don’t have to manage the JSON yourself, but you can just do like `newpanel`, `newdashboard`, and so on.”

With that vendor tree of all your mixins, you can build Jsonnet snippets. The Kubernetes mixin has a readme that explains how to do it.

#### Mixins in the Wild

With that information, plus design docs for the package manager and for the mixin spec, available online, Wilkie hopes more people will contribute to the first four mixins ([etcd](https://github.com/etcd-io/etcd/tree/master/Documentation/etcd-mixin), [Consul](https://github.com/grafana/jsonnet-libs/tree/master/consul-mixin), [Vault](https://github.com/grapeshot/vault_exporter/tree/master/vault-mixin), and Kubernetes), which he mostly wrote himself.

The [Kubernetes mixin](https://github.com/kubernetes-monitoring/kubernetes-mixin), which he wrote with Branczyk, has gained the most traction. There are now nine more contributors to it, from different companies including Google, MongoDB, and the San Diego Supercomputer Center. And going forward, the Kubernetes mixin’s set of alerts and dashboards will be used in all new versions of [OpenShift](https://www.openshift.com/).

There’s now also a [Prometheus ksonnet mixin](https://github.com/grafana/jsonnet-libs/tree/master/prometheus-ksonnet). “This defines a set of alerts that we think you should be running if you’re running Prometheus,” Wilkie said. “We have a node_exporter mixin. This one’s still quite a work in progress, trying to describe standard alerts and dashboards for your nodes.”

And most excitingly for Wilkie, others in the community seem to be playing with mixins too. “This chap whom I’ve never met before, he’s written a mixin for something extraterrestrial,” Wilkie said. “I haven’t checked it out yet but it’s NASA space weather something, and it’s got a Jsonnet mixin in it.”