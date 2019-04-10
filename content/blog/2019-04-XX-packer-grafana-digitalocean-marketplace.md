+++
title = "Automating Building the Grafana Image on DigitalOcean with Packer"
author = "goutham"
date = "2019-04-10"
keywords = ["Grafana", "DigitalOcean", "Packer"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "How to automate the building of the Grafana image on DigitalOcean."
categories = ["Grafana"]
excerpt = "The DigitalOcean Marketplace lets you launch a range of open source software, including Grafana, with just a few clicks. Here's how we automated the building of the images."
+++


I recently gave a talk at [DigitalOcean Tide](https://go.digitalocean.com/tide-blr.html) in Bangalore on "Grafana and the DigitalOcean Marketplace." The DO Marketplace lets you launch a range of open source software, including Grafana, with just a few clicks. This post is not about the marketplace -- I'm going to talk about how we automated the building of the images.

### Prologue

When I was making the demo for the talk, I noticed that the image was launching Grafana v5.4.3 -- but [the 6.x series launched](https://grafana.com/blog/2019/03/19/grafanacon-l.a.-recap-grafana-6.0-lgtm-and-more/) last month. I then looked into how the images are made. It was quite simple: The 1-click apps are just snapshots of droplets.

Detailed instructions are given [here](https://github.com/digitalocean/marketplace-partners/blob/c0c064d61f64b63cb9589a64c7c0bb42ad0c41b2/marketplace_docs/build-an-image.md). The application should be installed and configured to start on boot, and you should clean the droplet of logs and keys. For Grafana, that meant following the [install guide](http://docs.grafana.org/installation/debian/) and then running the [cleaning script](https://github.com/digitalocean/marketplace-partners/blob/c0c064d61f64b63cb9589a64c7c0bb42ad0c41b2/marketplace_docs/build-an-image.md#cleaning-up-your-build-droplet). But this is a manual process that will still take up nearly an hour of a person's time. Luckily, the whole thing can be automated away.

### Automating the Image Building

I noticed that DO itself [documented](https://github.com/digitalocean/marketplace-partners/tree/c0c064d61f64b63cb9589a64c7c0bb42ad0c41b2/marketplace_docs/templates) how you can automate things using either [Fabric.py](http://www.fabfile.org/) or [Packer](https://packer.io/). I used Packer several years ago to set up AMI building and deployment when I was an intern. I quite liked the tool back then and realized this could be a perfect opportunity to use it again!

The concepts behind Packer are super simple. It has two main things, **builders** and **provisioners**. [**Builders**](http://packer.io/docs/builders/index.html) let you create images on various platforms like AWS EC2 and DigitalOcean, while [**provisioners**](http://packer.io/docs/provisioners/index.html) let you run commands and manipulate the VM before creating the image. The config file for the Grafana image is super simple and can be seen [here](https://github.com/grafana/packer-do-marketplace/blob/f1f285412573720ec1c5532c81853a1b44310972/grafana-marketplace.json).

You can see we're using the DigitalOcean builder and configuring the various parameters for it, like the snapshot name, the droplet size, location, etc. Next up are the provisioners. [First](https://github.com/grafana/packer-do-marketplace/blob/f1f285412573720ec1c5532c81853a1b44310972/grafana-marketplace.json#L16-L25) we execute all the commands to install Grafana detailed [here](http://docs.grafana.org/installation/debian/). Then we [copy over the MOTD](https://github.com/grafana/packer-do-marketplace/blob/f1f285412573720ec1c5532c81853a1b44310972/grafana-marketplace.json#L26-L30) so that when users log in, they'll know where to find the documentation.

Finally we [run the commands](https://github.com/grafana/packer-do-marketplace/blob/f1f285412573720ec1c5532c81853a1b44310972/grafana-marketplace.json#L31-L35) to clean the VM of any history and security keys and also verify that the image will pass all of DO's approval checks. I took the cleanup script from [here](https://github.com/digitalocean/marketplace-partners/blob/master/marketplace_docs/build-an-image.md#cleaning-up-your-build-droplet) and made some modifications to fix the issues below.

This turned out to be hardest part of the job because the validation script continued to fail with:

```
digitalocean: Updating apt package database to check for security updates, this may take a minute...
digitalocean:
digitalocean: [FAIL] There are 8 security updates available for this image that have not been installed.
digitalocean: Here is a list of the security updates that are not installed:
digitalocean:
digitalocean: Checking for log files in /var/log
digitalocean:
digitalocean: [WARN] un-cleared log file, /var/log/auth.log found

------------------------------------------------------------------------------------------------
Scan Complete.
One or more tests failed.  Please review these items and re-test.
------------------------------------------------------------------------------------------------
7 Tests PASSED
1 WARNINGS
1 Tests FAILED
------------------------------------------------------------------------------------------------
Some critical tests failed.  These items must be resolved and this scan re-run before you submit your image to the marketplace.

```

It drove me nuts that running `apt-get -y update; apt-get -y upgrade` in the `clean_image` step didn't fix it. Some Googling made me realize this was because `apt-get` wasn't updating the kernel, and required me to add the `--with-new-pkgs `: `apt-get -y --with-new-pkgs upgrade`. Now when I added that, Packer was stuck, as updating grub throws up an interactive prompt. The flag combination of `-yq` didn't help either. :/ But finally, the Google and Stackoverflow gods showed me some mercy, and it finally worked after I set the `DEBIAN_FRONTEND=noninteractive` environment variable.

The commands finally became:

```
apt -y update
DEBIAN_FRONTEND=noninteractive apt -y upgrade
```

And Packer could successfully build and store the snapshot!

### Epilogue

Setting up and using Packer again was fun, and now having the latest version of Grafana on the marketplace is easier than ever. But it stills requires me to run the commands on my laptop after every release. I'm hoping to automate it, make it part of Grafana's official release process, and run it through CircleCI.
