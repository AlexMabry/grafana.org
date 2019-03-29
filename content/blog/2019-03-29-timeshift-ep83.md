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
excerpt = "This week we have updates and articles from the Grafana Labs team, some initial impressions on our Prometheus-inspired log aggregation project Loki, and lots more. Plus learn how to make your own air quality monitor."
+++

### Welcome to TimeShift
This week we have updates and articles from the Grafana Labs team, some initial impressions on our Prometheus-inspired log aggregation project Loki, and lots more. Plus learn how to make your own air quality monitor.

See an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Beta Release: Grafana v6.1.0-beta1</h3>
		<h5>Major New Features</h5>
		<ul>
			<li><strong>Prometheus</strong>: Ad-hoc Filtering makes it easier to explore data in a Grafana dashboard.</li>
			<li><strong>Permissions</strong>: A new option so that Editors can own dashboards, folders and teams they create. This makes it easier for teams to self-organize when using Grafana.</li>
		</ul>
		<p>Check out all the <a href="https://community.grafana.com/t/release-notes-v6-1-x/15772" target="_blank">features and bug fixes</a> in the latest beta release.</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_83" target="_blank" class="btn btn--primary">Download Grafana v6.1.0-beta1 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Everything You Need to Know About the OSS Licensing War, Part 2.**](https://grafana.com/blog/2019/03/28/everything-you-need-to-know-about-the-oss-licensing-war-part-2./?utm_source=blog&utm_campaign=timeshift_83): Part 2 of our OSS licensing war series picks up where we left off: In 2015, AWS had taken the Elasticsearch software and launched their own cloud offering, and Elastic N.V. doubled down on an 'open core strategy.'

[**Grafana Logging using Loki**](https://blog.giantswarm.io/grafana-logging-using-loki/): Julien dives into Loki, its architecture, configuration, and some various use-cases.

[**Tinder & Grafana: A Love Story in Metrics and Monitoring**](https://grafana.com/blog/2019/03/26/tinder--grafana-a-love-story-in-metrics-and-monitoring/?utm_source=blog&utm_campaign=timeshift_83): Two years ago, when it was time for the L.A.-based company to find and implement a perfect metrics monitoring partner, the process proved to be more slow-burn love affair versus whirlwind romance.

[**Scaling Graphite to Millions of Metrics**](https://klaviyo.tech/scaling-graphite-to-millions-of-metrics-543b830877f7): The folks at Klaviyo discuss the challenges they overcame to scale their Graphite stack to reliably handle over a million active metric keys at any given time across 17 million total metric keys.

[**Dynamic Configuration Discovery in Grafana**](https://johnharris.io/2019/03/dynamic-configuration-discovery-in-grafana/): John provides an introduction to how dynamic configuration discovery works in Grafana for data sources and dashboards.

[**Build an air quality monitor with InfluxDB, Grafana, and Docker on a Raspberry Pi**](https://www.balena.io/blog/build-an-environment-and-air-quality-monitor-with-raspberry-pi/): Learn how to build your own air quality monitor. Collect metrics for temperature, humidity, barometric pressure, and air quality, and visualize all your data in Grafana.

[**Timeseries and Timeseries Again (pt. 2)**](https://leonallen22.github.io/2019/03/26/timeseries-and-timeseries-again-pt-2.html): Leon describes his initial impressions of using our Prometheus-inspired log aggregation project Loki in part 2 of his series focused on the metrics stack he uses at work. Check out [part 1](https://leonallen22.github.io/2019/02/16/timeseries-and-timeseries-again.html) to get up to speed.

[**Writing React Plugins for Grafana**](https://grafana.com/blog/2019/03/26/writing-react-plugins/?utm_source=blog&utm_campaign=timeshift_83): In Grafana 6.0 we started the migration to using React in Grafana. This post will walk you through how to create plugins for Grafana using [ReactJS](https://reactjs.org/).

[**How to deploy Telegraf, InfluxDB, and Grafana with Puppet Bolt**](https://puppet.com/blog/how-deploy-telegraf-influxdb-and-grafana-puppet-bolt): Check out a demo to configure and deploy monitoring stack via Puppet Modules.

[**What’s New in Prometheus 2.8: WAL-Based Remote Write**](https://grafana.com/blog/2019/03/25/whats-new-in-prometheus-2.8-wal-based-remote-write/?utm_source=blog&utm_campaign=timeshift_83): Learn about Prometheus' new Write-Ahead Logging (WAL) for the remote_write API, which was included in the Prometheus 2.8 release. It’s a change intended to safeguard client metrics in the face of any network issues.

<br />
<hr />
#### Grafana Plugin Update
Three plugin updates to share this week. Update or install any plugin on your on-prem Grafana via the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_83" target="_blank">grafana-cli tool</a>, or update with one-click on <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_83" target="_blank">Hosted Grafana</a>.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/raintank-worldping-app/versions/1.2.5/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>WorldPing App</strong> - WorldPing v1.2.5 has been released which adds support for Grafana v6.0 and includes a few minor bug fixes.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/raintank-worldping-app?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-polystat-panel/versions/1.0.16/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Polystat Panel</strong> - Polystat panel v1.0.16 has been released and includes a fix for variable encoding in clickthrough urls.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-polystat-panel?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/instana-datasource/versions/2.2.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Instana Data Source</strong> - The latest update of the Instana data source has lots of bug fixes as well as some new features:
				<ul>
					<li>Application metrics have been added</li>
					<li>The datasource connection check has been improved</li>
					<li>Support added for <code>beacon.meta</code> grouping</li>
				</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/instana-datasource?utm_source=blog&utm_campaign=timeshift_83" target="_blank"><strong>Install</strong></a>
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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/percona_live_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.percona.com/live/19/observability-monitoring-track" target="_blank">Percona Live 2019 | Austin, TX - 05.28.19-05.30.19</a>:</strong>
			</p>
			<p>
				<strong>Tom Wilkie: Grafana Loki - Grafana Loki: Like Prometheus, But for logs.</strong> -  Loki is a horizontally-scalable, highly-available log aggregation system inspired by Prometheus. It is designed to be cost effective and easy to operate, as it does not index the contents of the logs, but rather labels for each log stream.
			</p>
			<a href="https://www.percona.com/live/19/observability-monitoring-track" target="_blank" class="btn btn--outline">Learn More</a>
		</div>
	</div>
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
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/influxdays.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://influxdays.com/london-2019/" target="_blank">InfluxDays London 2019 | London, United Kingdom - 06.13.19-06.14.19</a>:</strong>
			</p>
			<p>
				<strong>David Kaltschmidt - Mixing metrics and logs with Grafana + Influx</strong> -  Imagine if you had Prometheus for log files. In this talk we'll discuss Grafana Loki, our attempt at creating just that.
			</p>
			<a href="https://influxdays.com/london-2019/" target="_blank" class="btn btn--outline">Learn More</a>
		</div>
	</div>
	<br />
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

#### How are we doing?
We're always looking to make TimeShift better. If you have feedback, please let us know! Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_83).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_83).
