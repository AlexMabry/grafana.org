+++
title = "timeShift(GrafanaBuzz, 1w) Issue 83"
author = "trent"
date = "2019-03-29"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "TimeShift is back after a few weeks away with a lot of updates to share. GrafanaCon LA videos and presentations, details on Grafana v6.0.1, upcoming events we’ll be speaking at, and more!"
+++

### Welcome to TimeShift
This week we have a number of articles from the Grafana Labs blog we'd like to share, plus a new panel plugin and other updates. Also, take a look at our upcoming events. If you're going to be attending any of them, please come and say hello!

See an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v6.0.2</h3>
		<h5>Bug Fixes</h5>
		<ul>
			<li><strong>Alerting</strong>: Fixed issue with AlertList panel links resulting in panel not found errors. <a href="https://github.com/grafana/grafana/pull/15975" rel="nofollow noopener">#15975</a>, <a href="https://github.com/torkelo" rel="nofollow noopener">@torkelo</a></li>
			<li><strong>Dashboard</strong>: Improved error handling when rendering dashboard panels. <a href="https://github.com/grafana/grafana/pull/15970" rel="nofollow noopener">#15970</a>, <a href="https://github.com/torkelo" rel="nofollow noopener">@torkelo</a></li>
			<li><strong>LDAP</strong>: Fix allow anonymous server bind for ldap search. <a href="https://github.com/grafana/grafana/pull/15872" rel="nofollow noopener">#15872</a>, <a href="https://github.com/marefr" rel="nofollow noopener">@marefr</a></li>
			<li><strong>Discord</strong>: Fix discord notifier so it doesn’t crash when there are no image generated. <a href="https://github.com/grafana/grafana/pull/15833" rel="nofollow noopener">#15833</a>, <a href="https://github.com/marefr" rel="nofollow noopener">@marefr</a></li>
			<li><strong>Panel Edit</strong>: Prevent search in VizPicker from stealing focus. <a href="https://github.com/grafana/grafana/pull/15802" rel="nofollow noopener">#15802</a>, <a href="https://github.com/peterholmberg" rel="nofollow noopener">@peterholmberg</a></li>
			<li><strong>Datasource admin</strong>: Fixed url of back button in datasource edit page, when root_url configured. <a href="https://github.com/grafana/grafana/pull/15759" rel="nofollow noopener">#15759</a>, <a href="https://github.com/dprokop" rel="nofollow noopener">@dprokop</a></li>
		</ul>
		<p>Check out all the <a href="http://docs.grafana.org/guides/whats-new-in-v6-0/?utm_source=blog&utm_campaign=timeshift_83" target="_blank">new features and enhancements</a> in v6.0</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_83" target="_blank" class="btn btn--primary">Download Grafana v6.0.2 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Everything You Need to Know About the OSS Licensing War, Part 1.**](https://grafana.com/blog/2019/03/20/everything-you-need-to-know-about-the-oss-licensing-war-part-1./?utm_source=blog&utm_campaign=timeshift_83): Grafana Labs Co-founder and CEO Raj Dutt describes how a new breed of commercial open source company and dominance of the cloud has set off a licensing war that calls into question the very meaning of open source, and has the potential to change how software is developed, funded, and delivered. As a primer, check out the [spirited panel discussion](https://www.youtube.com/watch?v=hvX3Q8kGz_0) on the same subject from GrafanaCon.

<br />
<hr />
#### Grafana Plugin Update
We have a new panel plugin and a few plugin updates to share this week. To update or install any plugin on your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_83" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_83" target="_blank">Hosted Grafana</a>,	 update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/agenty-flowcharting-panel/versions/0.2.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Flowcharting Panel</strong> - Create flowcharts, diagrams, floorplans and more with this new panel.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/agenty-flowcharting-panel?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/simpod-json-datasource/versions/0.1.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>JSON Data Source</strong> - Version 0.1.3 allows you to use variables in the Additional JSON Data field.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/simpod-json-datasource?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/flant-statusmap-panel/versions/0.1.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Statusmap Panel</strong> - New enhancements include Grafana 6.0 support, InfluxDB and MySQL support, initial annotation support and more.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/flant-statusmap-panel?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/fetzerch-sunandmoon-datasource/versions/0.1.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Sun and Moon Data Source</strong> - 0.1.4 of the Sun and Moon Data Source adds support for datasource provisioning, and annotations for noon and midnight.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/fetzerch-sunandmoon-datasource?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/pr0ps-trackmap-panel/versions/2.0.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>TrackMap Panel</strong> - This latest update fixes issues with Grafana v6.X and adds support for Snapshots.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/pr0ps-trackmap-panel?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
 
<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://dzone.com/webinars/why-open-source-works-for-devops-monitoring" target="_blank">Webinar: Why Open Source Works for DevOps Monitoring | 03.26.19, 1PM EDT</a>:</strong>
			</p>
			<p>
				Learn how to use open source tools for your performance monitoring of your stacks, systems, and sensors in a way that is faster, easier, and to scale.
			</p>
			<p>
				In this webinar, Jacob Lisi from Grafana, and Chris Churilo from InfluxData will provide you with step by step instruction on how to use InfluxDB with Grafana, two popular open source projects, to capture and analyze untapped data from virtual and physical assets, giving you new visibility to customer experience and business growth.
			</p>
			<a href="https://dzone.com/webinars/why-open-source-works-for-devops-monitoring" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/devopsdays.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.eventbrite.ca/e/devops-days-vancouver-2019-mar-29th-30th-tickets-53622560522" target="_blank">DevOps Days Vancouver 2019 | Vancouver BC, Canada - 03.29.19-03.30.19</a>:</strong>
			</p>
			<p>
				<strong>Callum Styan: Grafana Loki - Log Aggregation for Incident Investigations</strong> - Get an inside look at Grafana Labs' latest open source log aggregation project Loki, and learn how to better investigate issues using Grafana's new Explore UI.
			</p>
			<a href="https://www.eventbrite.ca/e/devops-days-vancouver-2019-mar-29th-30th-tickets-53622560522" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/kubecon_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/register" target="_blank">KubeCon + CloudNativeCon Europe 2019 | Barcelona, Spain - 05.20.19-05.23.19</a>:</strong>
			</p>
			<p>
				<strong>May 21 - Tom Wilkie, Intro: Cortex<br />
				May 22 - Tom Wilkie, Deep Dive: Cortex</strong><br />
				Cortex provides horizontally scalable, highly available, multi-tenant, long term storage for Prometheus metrics, and a horizontally scalable, Prometheus-compatible query API. Cortex allows users to deploy a centralized, globally aggregated view of all their Prometheus instances, storing data indefinitely. In this talk we will discuss the benefits of, and how to deploy, a fully disaggregated, microservice oriented Cortex architecture. We'll also discuss some of the challenges operating Cortex at scale, and what the future holds for Cortex. Cortex is a CNCF sandbox project.
			</p>
			<p>
				<strong>May 23 - Tom Wilkie, Grafana Loki: Like Prometheus, But for logs.</strong><br />
				Loki is a horizontally-scalable, highly-available log aggregation system inspired by Prometheus. It is designed to be cost effective and easy to operate, as it does not index the contents of the logs, but rather labels for each log stream.
			</p>
			<p>
				Loki initially targets Kubernetes logging, using Prometheus service discovery to gather labels for log streams. As such, Loki enables you to easily switch between metrics and logs, streamlining the incident response process - a workflow we have built into the latest version of Grafana.
			</p>
			<p>
				In this talk we will discuss the motivation behind Loki, its design and architecture, and what the future holds. Its early days after the launch at KubeCon Seattle, but so far the response to the project has been overwhelming, with more the 4.5k GitHub stars and over 12hrs at the top spot on Hacker News.
			</p>
			<p>
				<strong>May 23 - David Kaltschmidt, Fool-Proof Kubernetes Dashboards for Sleep-Deprived Oncalls</strong><br />
				Software running on Kubernetes can fail in various, but surprisingly well-defined ways. In this intermediate-level talk David Kaltschmidt shows how structuring dashboards in a particular way can be a helpful guide when you get paged in the middle of the night. Reducing cognitive load makes oncall more effective. When dashboards are organized hierarchically on both the service and the resource level, troubleshooting becomes an exercise of divide and conquer. The oncall person can quickly eliminate whole areas of problems and zone in on the real issue. At that point a single service or instance should have been identified, for which more detailed debugging can take place.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/register" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/monitorama_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://monitorama.com/" target="_blank">Monitorama PDX 2019 | Portland, OR - 06.03.19-06.05.19</a>:</strong>
			</p>
			<p>
				<strong>Tom Wilkie: Grafana Loki - Prometheus-inspired open source logging</strong> -  Imagine if you had Prometheus for log files. In this talk we'll discuss Grafana Loki, our attempt at creating just that.
			</p>
			<a href="https://monitorama.com/" target="_blank" class="btn btn--outline">Learn More</a>
		</div>
	</div>
</div>


<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>We're Hiring</h4>
	<p>Have fun solving real world problems building the next generation of open source tools from anywhere in the world. Check out all of our current opportunities on our careers page.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_83" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_83" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">We are able to display <a href="https://twitter.com/hashtag/grafana?src=hash&amp;ref_src=twsrc%5Etfw">#grafana</a> dashboards in the office. You see some average KPI&#39;s on the image. The dashboards are switching from time to time. Everyone in the team can see what is going on. <a href="https://twitter.com/hashtag/developers?src=hash&amp;ref_src=twsrc%5Etfw">#developers</a> 🙌🎉 It is a small <a href="https://twitter.com/hashtag/angular?src=hash&amp;ref_src=twsrc%5Etfw">#angular</a> application. 😉 <a href="https://t.co/kwkrAFXocj">pic.twitter.com/kwkrAFXocj</a></p>&mdash; вנöяи (@BrocksiNet) <a href="https://twitter.com/BrocksiNet/status/1107684961287573504?ref_src=twsrc%5Etfw">March 18, 2019</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Awesome! Having dashboards up for the whole team to see is beneficial for all, and helps democratize metrics.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
We're always looking to make TimeShift better. If you have feedback, please let us know! Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_83).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_83).
