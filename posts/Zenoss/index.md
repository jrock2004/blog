---
title: "Zenoss"
date: "2009-10-21"
tags:
  - server
  - linux
  - windows
---

[Zenoss](https://www.zenoss.com/) is a monitoring tool that everyone should start to look at. In the past when you mention system monitoring software, people would say [Nagios](https://www.nagios.org/) . Now do not get my wrong there is nothing really wrong with Nagios but it lacks somethings for my taste. Now I could continue on with comparing Nagios to Zenoss but this is not what I am looking to do in this blog post. I want to share with you the features that have attracted me to start using Zenoss. First thing I like is the support for getting help with Zenoss. On freenode via IRC, the #zenoss room is filled with people who are will to help you with your struggles. I would mention some names but I will leave that for the reader to decide if they every have to visit there. The next thing I really like is that when you are setting it up for the first time you can put in your subnet or IP range and it will scan for all available devices. I got my devices added within 5 minutes of getting into the interface. GUI administration is something also that I really like. Now I know there are a ton of command line guys out there but sometimes is makes it easier. It also helps if some people you work with do not like the command line. I really like the Google map API interface that will let you map out your servers and see them on a map of the world. If you were like me and have some older servers that finding packages for are just a little bit hard; Then you are in luck. With Zenoss you can run commands via SSH. Now the cool thing is that you can specify your username and password so there is no copying your RSA keys or anything like that. Now I am starting to catch on to the SNMP protocol which I use for my newer machines. SNMP will give you more data than the SSH commands will. You can also connect to Windows computers with the username and password from that box as well. Another big thing I like is that you can get graphs from one application. So no need to run Nagios and Cacti.

There are tons more features that could make this into a novel to post about. Zenoss has already done this with their PDF manuals. Go ahead and [download them here](https://community.zenoss.org/community/documentation) . Trust me you will love this system monitoring tool.
