---
title: "A Look at WineXS"
date: "2009-08-18"
tags:
  - linux
---

Well earlier today I was looking around and I found an article about an application for Linux called [WineXS](http://tsx.nl/winexs.html). This application is a front end for wine in Linux. Wine is an application that will let you install some Windows applications and games. So let me show you how to install this app. The first thing you need to do is install wine. If you have wine installed then you can skip the first two lines.

```bash
sudo apt-get update
sudo apt-get install wine
cd $HOME
wget http://tsx.nl/files/winexs-1.4.2.tgz
tar zxvf winexs-1.4.2.tgz
cd winexs
./winexs
```

That is it. You can now start to use the app with all its glory.
