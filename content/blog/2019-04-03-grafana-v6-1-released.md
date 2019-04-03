+++
title = "Grafana v6.1 Released"
author = "daniellee"
date = "2019-04-03"
keywords = ["Grafana", "Blog", "v6.1", "Stable", "Release", "Download"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Grafana 6.1 Stable Release"
categories = ["Release", "Grafana"]
+++

# v6.1 Stable released!

A few weeks have passed since the excitement of the major Grafana 6.0 release during GrafanaCon, which means it's time for a new Grafana release. Grafana 6.1 iterates on the permissions system to allow for teams to be more self-organizing. It also includes a feature for Prometheus that enables a more exploratory workflow for dashboards.

## What's New in Grafana v6.1

- [Ad hoc filtering for Prometheus]({{< relref "#ad-hoc-filtering-for-prometheus" >}}) - A new query-focused workflow for ad hoc data exploration and troubleshooting.
- [Permissions: Editors can own dashboards, folders, and teams they create]({{< relref "#editors-can-own-dashboards-folders-and-teams-they-create" >}}) - a new option to allow teams to self-organize more.
- [List and revoke user auth tokens in the API]({{< relref "#list-and-revoke-of-user-auth-tokens-in-the-api" >}}) - first step in building a new security feature in Grafana.

<a href="https://grafana.com/grafana/download/?utm_source=blog&utm_campaign=v61" target="_blank" class="btn btn--primary">Download Grafana 6.1 Now</a>

### Ad hoc filtering for Prometheus

{{< imgbox max-width="30%" img="/img/docs/v61/prometheus-ad-hoc.gif" caption="Ad-hoc filters variable for Prometheus" >}}

The ad hoc filter feature allows you to create new key/value filters on the fly with autocomplete for both keys and values. The filter condition is then automatically applied to all queries on the dashboard. This makes it easier to explore your data in a dashboard without changing queries and without having to add new template variables.

Other timeseries databases with label-based query languages have had this feature for a while. Prometheus recently added support for fetching label names from its API, and thanks to [Mitsuhiro Tanda](https://github.com/mtanda)'s work implementing it in Grafana, the Prometheus datasource finally supports ad hoc filtering.

Support for fetching label names was released in Prometheus v2.6.0, so that is a requirement for this feature to work in Grafana.

### Editors can own dashboards, folders, and teams they create

When the dashboard folders feature and permissions system were released in Grafana 5.0, users with the editor role were not allowed to administer dashboards, folders, or teams. In the 6.1 release, we have added a config option that can change the default permissions so that editors are admins for any dashboard, folder, or team they create.

This feature also adds a new team permission that can be assigned to any user with the editor or viewer role and enables that user to add other users to the team.

We believe that this is more in line with the Grafana philosophy, as it will allow teams to be more self-organizing. This option will be made permanent if it gets positive feedback from the community, so let us know what you think in the [issue on GitHub](https://github.com/grafana/grafana/issues/15590).

To turn this feature on, add the following [config option](http://docs.grafana.org/installation/configuration/#editors-can-admin) to your Grafana ini file in the `users` section, and then restart the Grafana server:

```ini
[users]
editors_can_admin = true
```

### List and revoke user auth tokens in the API

As the first step toward a feature that would enable you to list a user's signed-in devices/sessions and to log out those devices from the Grafana UI, support has been added to the [API to list and revoke user authentication tokens](http://docs.grafana.org/http_api/admin/#auth-tokens-for-user).

### Minor Features and Fixes

This release contains a lot of small features and fixes:

- A new keyboard shortcut `d l` toggles all graph legends in a dashboard.
- A small bug fix for Elasticsearch - template variables in the alias field now work properly.
- Some new capabilities have been added for datasource plugins that will be of interest to plugin authors:
  - There's a new oauth pass-through option.
  - It's now possible to add user details to requests sent to the dataproxy.
- Heatmap and Explore fixes.
- The Prometheus range query alignment was moved down by one interval. If you have added an `offset` to your queries to compensate for alignment issues, you can now safely remove it.

## Changelog

Check out the [CHANGELOG.md](https://github.com/grafana/grafana/blob/master/CHANGELOG.md) file for a complete list of new features, changes, and bug fixes.

## Download

Head to the [download page](https://grafana.com/grafana/download?utm_source=blog&utm_campaign=v61) for download links & instructions.

## Thanks

A big thanks to all the Grafana users who contribute by submitting PRs, bug reports, and feedback!
