+++
title = "Guest Post: How to show off your Grafana dashboard with digital signage"
author = "screenly"
date = "2019-04-04"
keywords = ["Dashboards", "Screenly"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.6"
cover_blur = "1px"
description = "Learn how to get the most out of your Grafana dashboards, combat the common problem of underutilized data, and allow your teams to make smarter decisions."
categories = ["Dashboards", "Screenly"]
excerpt = "Learn how to get the most out of your Grafana dashboards, combat the common problem of underutilized data, and allow your teams to make smarter decisions."
+++

If you had data that could transform your business and allow your team to make smarter decisions, what would you do with it? Your answer most likely isn’t that you would make the data hard to access and only glance at it once or twice per month. However, many businesses do just that. They build beautiful Grafana dashboards, and, after the first few days, they rarely look at the dashboards again. Teams get stuck in the day-to-day activities of their businesses, and data takes the back seat. Instead of using data to inform business strategy, teams hide their data behind a username and password, and this data does not become a part of daily workflows.

So, how can teams combat the common problem of underutilized data? The answer is simple: Show the data to your employees! If you want data to inform every decision, you need to make your data easily accessible from anywhere. Teams can use digital signage to share their Grafana dashboards on beautiful, always-on [display screens throughout the office](https://www.screenly.io/blog/2018/12/11/office-tv-display-software/). In this article, we show you how you can get the most out of your [Grafana dashboards with digital signs](https://www.screenly.io/blog/2018/11/06/digital-signage-grafana-dashboard/). 

## What components do I need to launch a digital sign for my Grafana dashboard?

A digital sign requires three key components: a display screen, a digital signage player (i.e. a computer), and digital signage management software. 

For your display screen, you can use any screen or monitor that is compatible with your digital signage player. For your display screen to be compatible with most digital signage players, choose a screen that accepts HDMI input and can display at [1080p HD resolution](https://www.screenly.io/blog/2018/06/28/do-i-need-4k-for-my-digital-signs/). Also, when selecting a screen, you must think about where you want to place the screen. Depending on where you want to put the screen in your office, you may need to purchase VESA-compliant mounting hardware. VESA is a set of standards for screen and monitor hardware. Note that a display screen doesn’t have to break the bank. You don’t need to purchase a new 65” smart TV to get your data in front of your team (although that would be nice!). An old screen or monitor you have lying around will work just fine. 

Next, you need to purchase a [digital signage player](https://www.screenly.io/digital-signage-players/). This device is a simply a computer-on-a-chip with custom software that will enable you to display your Grafana dashboard. When choosing a digital signage player, you need to make sure that the player can render live web pages to a screen, as you want your digital sign to display your Grafana dashboard in real time. On a similar note, you need to make sure that there is a way for your digital signage player to [access password protected web pages](https://www.screenly.io/blog/2018/11/27/website-auth-with-pro/). This feature will allow you to display your Grafana data on your digital sign while simultaneously allowing you to keep your Grafana account secure. As always, you want to keep costs in mind when choosing a digital signage player. While there are digital signage players that cost thousands of dollars, you do not need to pay for unnecessary processing power. For displaying a live Grafana dashboard, a [Raspberry Pi](https://www.screenly.io/blog/2018/09/20/raspberry-pi-digital-signage/) based digital signage player will serve your needs. 

Finally, you will need [digital signage management software](https://www.screenly.io/tour/) to complete your digital sign deployment. This software enables you to manage your digital signage content from anywhere via a web interface. This software is useful as it allows you to change out your display content quickly and easily. If you want to add another Grafana dashboard to your display, you can log in and add the web page to your content playlist in just a few clicks. This software is particularly useful to users who need to manage multiple screens in multiple locations. Without digital signage software, these users have to travel to each screen and update their content manually. This process requires a ton of labor hours that businesses can easily avoid with the right software. 

## Why can’t I just plug in a secondary display to my computer?

You may be wondering if plugging in a secondary display to your PC will do the trick for your Grafana dashboard. In some cases, this solution will work just fine. After all, you can still show your Grafana dashboard on the big screen. However, this simpler solution has a few drawbacks when compared to a proper digital signage set up.

First, using a secondary display with your existing computer can be quite a hassle. You need to ensure that the computer is always on for your Grafana dashboard to display. Also, you need to be careful to not slide private information onto the secondary display. This misstep can be easy to make after your secondary display is up for a few days. If you allocate a separate PC for your Grafana display to avoid these issues, you also allocate a lot of unnecessary processing power for your display. This additional processing power can yield significantly higher electricity costs over time when compared to the [electricity costs of a dedicated digital signage player](https://www.screenly.io/blog/2018/10/24/going-green-digital-signage/).

Secondly, if you use a standard PC, you forgo the ability to manage your display screen easily. Digital signage management software allows you to organize assets, group screens, and set playlists all from a single interface. If you use a standard PC, managing what shows on the display will consist of dragging images, videos, and web pages onto the secondary display by hand. This manual management can be very time consuming, especially if your business has Grafana dashboard displays in multiple locations. Any content scheduling or playlist building will require constant attention if it is done manually with a standard PC.

Third, a standard PC will become another machine that you and your IT team have to manage. You will need to maintain security and software updates for this machine just as you need to with an employee’s computer. With a dedicated digital signage player, these security and software updates are done over-the-air and automatically. These automatic updates allow you and your team to focus your energy and attention on more important tasks for your business. 

Budget-constrained teams may attempt to save money by forgoing a dedicated digital signage solution for their Grafana dashboard display. However, these teams must factor in the cost of labor hours that employees will need to spend on a [less sophisticated DIY digital signage solution](https://www.screenly.io/blog/2018/12/07/diy-digital-signage-issues/). When teams consider the cost of these hours, a dedicated digital signage solution is almost always the most cost-effective option for setting up a Grafana dashboard display.


## Connecting your Grafana dashboards to your digital sign

Once you have your digital signage solution set up and ready to go, you will need to connect your Grafana dashboards to your digital sign. Of course, the steps for this process vary depending on your digital signage hardware and software. Below, we detail the steps you need to take when using the Screenly Player and Screenly digital signage management software. 

The easiest option for displaying your Grafana dashboards with Screenly is to make your dashboards public. This step will provide you with a URL link to your live Grafana dashboard. Next, simply add this URL as an “Asset” within your Screenly account, and assign this asset to one of your screens. Your live Grafana dashboard will then start playing on your digital sign. It’s that easy. 

Connecting a password-protected Grafana dashboard to your digital sign is a more complicated process. However, these extra steps are often necessary for Grafana dashboards that display sensitive business information. A public URL link can easily fall into the wrong hands, and the business’s [critical data could thereby be exposed](https://www.screenly.io/blog/2018/11/16/digital-signage-hacks/). If you want to keep your Grafana dashboards private, you will need to authenticate your digital signs with your Grafana account. You can do this by using bearer tokens or by using basic auth. Read more details on each of these solutions below.

### Authentication with a bearer token 

To [connect your Grafana dashboard to your digital sign](https://www.screenly.io/blog/2018/11/27/website-auth-with-pro/) using bearer tokens, you first need to get an API key from Grafana. Note that you don’t need a separate API key for each screen. One API key will work just fine for multiple screens. You can find this API key by logging in to your Grafana account and navigating to the “Configure” tab on the left-hand menu. Next, click the “API Keys” button. Then, create a name for your API key. Select the “Viewer” role, and finish the process by clicking “Add.”

You will then see similar text to the following appear in a dialogue box:

`curl -H "Authorization: Bearer abc123= [Your Token]" https://grafana.yourdomain.com/api/dashboards/home`

Next, you will need to append “&kiosk” to the end of the URL for the Grafana dashboard or chart that you wish to display. This edit will disable menu bars from showing on your digital sign. This step allows you to have more room for your data on your Grafana screen. 

Once you have your Grafana bearer token and amended URL, head over to your Screenly account. Within your Screenly account, navigate to the Assets tab, and then click the “Add Asset” button. Then, add the amended URL as a web page asset. 

With the URL added as an asset within your Screenly account, you now need to provide your bearer token. This step enables Screenly to access your password protected Grafana graphs and dashboards. To add your bearer token, navigate to the recently added URL asset. Then, select “Advanced” and select “Add.” Type “Authorization” in the “Header” field and type your bearer token in the “Value” field. To finish, click “Save.”

After completing these steps, you can add this URL asset to a playlist within your Screenly account. You can then add individual screens to the playlist. That’s it! You now have password-protected Grafana dashboards and graphs on your Screenly powered digital signs!

### Authentication using basic auth 

You can also authenticate your screens using Basic Auth.  This method uses a base64 hash of your credentials instead of a bearer token. To generate this string locally using Python, use the code below:

```
import base64
auth = base64.b64encode(b"YourUsername:YourPassword")
print("Basic {}".format(auth.decode()))
Basic WW91clVzZXJuYW1lOllvdXJQYXNzd29yZA==
```

You can also generate the string using Bash via the code below:

`$ echo Basic $(echo -n "YourUsername:YourPassword" | base64)
Basic WW91clVzZXJuYW1lOllvdXJQYXNzd29yZA==`

Next, enter the generated string into the “Value” field in the advanced settings for the URL asset in your Screenly account. 

## How to use Grafana dashboards and digital signs with remote teams

Having a remote-only team is a growing trend among startups and established businesses alike. With high-speed internet, team members located across the world can collaborate as if they are each located in the same building. Businesses can save money on avoided rent and utility costs, and employees can save time and money by avoiding workplace commutes. Additionally, businesses can benefit from being able to hire talent from anywhere.

Remote teams need to pay attention to business data just as much as a centrally located team does. However, remote teams are not able to place a Grafana display screen on their office wall. Of course, remote teams don’t have an office. So, what is a remote team to do? 

At Screenly, we are a [remote-only team](https://www.screenly.io/blog/2016/11/23/how-we-work-at-screenly/) ourselves. Being the Grafana fans that we are, we wanted to build a Grafana display solution that works for our team, which is spread out across the world. We wanted to have the same benefits of an always-on data dashboard, but we also wanted the benefits of a remote team. So, to solve this problem, we provided each team member with a 7” desktop display screen. We then assigned each display to the same Screenly playlist, so each team member sees the same data. While we don’t have a central display screen, each team member has a live feed of Screenly’s business metrics on their home desk at all times. These displays enable Screenly to keep its business data top-of-mind for each team member around the world. 

## Remember that measurement doesn’t imply management

“If you can’t measure it, you can’t manage it.” You’ve likely heard this popular business adage in the workplace. Maybe you have even said it yourself. Many people credit Austrian-American management theorist Peter Drucker with this insight, and many consider this phrase to be at the foundation of modern management practices. However, as we have discussed above, measuring data isn’t the end of the story. If businesses don’t enable their team to interact with the measured data regularly, the collected data will have little effect on business outcomes. Far too often do teams sit on a trove of useful business data only to give it an occasional glance and continue things as usual. When teams do not regularly interact with the data behind their business, teams lose opportunities, continue mistakes, and leave significant revenue on the table.

Once your business has your Grafana dashboards displayed on a digital sign, be sure to put these tools to work. You and your team should [regularly discuss this data](https://www.screenly.io/blog/2019/01/14/communication-in-the-workplace/) and use it to track the team’s progress over time. If your team sees poor results for a particular business metric, your team must have an immediate meeting and make a plan on how to address the issue. Likewise, if your team is excelling on a particular metric, your team should take a moment to celebrate this success. The Grafana display in your office should be a source of useful information both when times are good and when times are bad, and your team should constantly use the display to keep a pulse on the health of your business. 

Put simply, you and your team must remember that measurement doesn’t imply management. Additionally, even if you have a stunning Grafana display, constantly showing your team the business’s critical data won’t result in optimal business outcomes either. Team’s need to review, discuss, and regularly work with their data in order to remain agile and competitive in today’s marketplace. 

## I want a Grafana display screen for my business. What next?

Congratulations! You made it to the end. So, you’ve read about Grafana dashboards and digital signage, and you want to launch a Grafana display for your business. First, you need a great Grafana graph or dashboard. If you don’t have a Grafana account already, get one and connect your data sources! For a digital signage player, check out the [Screenly Box 0](https://www.screenly.io/products/box0/). This product contains a Screenly Player and all the hardware you need to launch your first digital sign. Next, register for a [14 day free trial](https://www.screenly.io/pricing/) of Screenly’s digital signage management software. With that, you will be able to launch your first Grafana display. 

If you have any questions on displaying Grafana graphs and dashboards with digital signs, feel free to [reach out to us](https://support.screenly.io/hc/en-us/requests/new) at Screenly!

