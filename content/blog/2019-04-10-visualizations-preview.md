+++
title = "Sneak Preview of New Visualizations Coming to Grafana"
author = "torkel"
date = "2019-04-10"
keywords = ["Grafana"]
cover_image = "/assets/img/blog/bargauge/cover.png"
cover_opacity = "0.4"
cover_blur = "2px"
draft = true
description = "Preview upcoming visualizations that are being worked on right now!"
excerpt = "TODO"
categories = ["Grafana"]
+++

We have been working on a new panel and component architecture for the last half year (or more), and it's finally starting to bear fruit in terms of new visualizations and capabilities.

We don't introduce totally new ways to visualize data very often, so we're excited to share with you this new addition to the family of single value type of visualizations (Singlestat, Gauge): Bar Gauge.

Given the way you can lay out dashboards, you can represent a lot of high resolution in a bar gauge that stretches across a whole dashboard. With a more traditional gauge, it’s not so easy to see the levels from a distance. It works when you have a very small area, but when you want something that stretches across, it doesn’t utilize that space very well. This led me to start thinking about how we can make that sort of visualization better.

## Bar Gauge Basic Mode

This visualization started simple: It's similar to a bar chart, but is trying to be a gauge. There is a minimum and a maximum, and each bar color only depends on the thresholds defined and the colors assigned to them.

![bargauge_basic_v](/assets/img/blog/bargauge/basic_v.png)

And unlike the graph panel, you can stack this in horizontal mode.

![bargauge_basic_h](/assets/img/blog/bargauge/basic_h.png)

## Bar Gauge Retro LED

But I wanted a different mode that was more visually interesting. I started thinking about old stereos that had these physical spectrum displays with discrete LED cells.

![bargauge_basic_h](/assets/img/blog/bargauge/inspiration.jpg)

I started trying to mimic that in the visualization, creating these cells that light up if you reach a certain threshold. The nice thing about this way of visualizing a gauge is that you can see the threshold boundaries in the unlit cells. You can easily see if it's close to warning or to being red. Also, it just looks really cool! For a few examples of this display mode, check out the image below.

![bargauge_basic_h](/assets/img/blog/bargauge/bar_gauge_retro_led.jpg)


## Bar Gauge Gradient

Next, I turned the thresholds into a gradient. Instead of a single color, you can start with a pre-defined “OK” color and add different colors to different thresholds. You can go from green to yellow to orange to red, or the reverse, or any other combination. It’s super flexible, and you can have any number of thresholds. I think this turned out pretty well.

![bargauge_basic_h](/assets/img/blog/bargauge/gradient.jpg)

## Threshold Editor

{{< imgbox max-width="50%" img="/assets/img/blog/bargauge/threshold_editor.jpg" caption="Threshold editor" >}}

All the thresholds for these visualizations are defined using the new threshold editor we introduced
for the new Gauge panel in version 6.0.

<div class="clearfix"></div>

## Animations

Adding css transition animations was a simple one-line change, but it made this dashboard look quite nice. So if you have an auto-updating dashboard, you can get animated transitions between different states.

<video width="800" height="500" controls>
  <source src="/assets/img/blog/bargauge/bargauge_anim.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Other Visualizations in the Pipeline

I shared a preview of the Bar Gauge on Twitter recently, and the response was... positive.

<blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr"> <a href="https://t.co/JwZTVogRNy">pic.twitter.com/JwZTVogRNy</a></p>&mdash; santak (@santak) <a href="https://twitter.com/santak/status/1106695407277473792?ref_src=twsrc%5Etfw">March 15, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

We're excited to be working on new core visualizations again in Grafana. It feels like it has been years since there was a substantial update on this front. (Because it has been!)

* We plan to update the Singlestat panel as well, to align its options UI with that of the new Bar Gauge and Gauge panel.
* The new Gauge, Bar Gauge, and Singlestat panel will be able to repeat vertically or horizontally for every series, table, column, or row.
* The Table panel will be rewritten with virtualized rendering (faster without paging) and new features.
* Some form of multi graph visualization (stacked graphs) is in the works.
* We're planning improved support for non-timeseries data.

TORKEL TO ADD SENTENCE HERE ON HOW TO TRY OUT THE NEW VISUALIZATION AND GIVE FEEDBACK.

