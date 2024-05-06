---
title: "Zenoss Local Templates"
date: "2009-11-13"
tags:
  - server
  - linux
  - windows
---

One of the coolest things I learned today was about creating local templates for specific devices. So lets say you have 5 Linux boxes and only 2 are running apache. I do not need to graph apache stuff on my 3 other boxes. So I go into the device that I want to have its own version of the template and click on the down arrow and go to more. Then click on templates. You will now see all the templates that are bound to the device class. The one that you want to change to the specific device click on Create local copy. Now you can edit that template and it will only make changes for that device. I am telling you that Zenoss is just a great piece of software.
