+++
title = "New Visualizations Coming To Grafana - A Preview"
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

We have been working on a new panel & component architecture for the last half year (or more) and
it's finally starting to bear fruit in terms of new visualizations and capabilities.

As part of the family of single value type of visualizations (Singlestat, Gauge) we are going to
add a new one called Bar Gauge.

## Bar Gauge Basic Mode

This visualization started simple. Similar to a bar chart but this is trying to be a gauge. Each bar
color only depends on the thresholds defined and the color.

![bargauge_basic_v](/assets/img/blog/bargauge/basic_v.png)

And unlike the graph panel you can stack this has horizontal mode.

![bargauge_basic_h](/assets/img/blog/bargauge/basic_h.png)

## Bar Gauge Retro LED

So thinking about a vertical gauge this gave me ideas to try a different look. Taking inspiration from the
physical spectrum displays on old stereos that have discrete LED cells.

![bargauge_basic_h](/assets/img/blog/bargauge/inspiration.jpg)

This way of displaying a gauge is actually very nice as it allows us to show the threshold boundaries as
unlit LED cells. For a few examples of this display mode checkout the image below.

![bargauge_basic_h](/assets/img/blog/bargauge/bar_gauge_retro_led.jpg)


## Bar Gauge Gradient

Another way I could think of to visualize a bar gauge was to turn the thresholds into a gradient. This turned
out pretty well.

![bargauge_basic_h](/assets/img/blog/bargauge/gradient.jpg)

## Threshold editor

{{< imgbox max-width="50%" img="/assets/img/blog/bargauge/threshold_editor.jpg" caption="Threshold editor" >}}

All the thresholds for these new visualizations are defined using the new threshold editor we introduced
for the new Gauge panel in version 6.0.

<div class="clearfix"></div>

## Animations

Adding css transition animations was a simple one line change but made this auto refresh dashboard
look quite nice.

<video width="800" height="500" controls>
  <source src="/assets/img/blog/bargauge/bargauge_anim.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Other visualizations in the pipeline

Really excited to be working on new core visualizations again in Grafana. It feels like it was years since
there was a substantial update on this front (it is!).

* We plan to update the Singlestat panel as well to align it's options UI with that of new Bar Gauge and Gauge panel
* The new Gauge, Bar Gauge and Singlestat panel will be able to repeat vertically or horizontally for every series, table column or row.
* A rewritten Table panel with virtualized rendering (faster without paging) & new features.
* Some form of multi graph visualization (stacked graphs).
* Improved support for non time series data.


