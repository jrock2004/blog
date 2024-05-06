---
title: "Moving Your SVN Repo"
date: "2010-10-29"
tags:
  - server
  - development
  - linux
  - tutorial
---

One of the things that I sometimes have to do is move an SVN repo to another server or you just want to back it up. This tutorial will show you how to do this.

```bash
svnadmin dump /pathToYourRepo > reponame_dump
Example: svnadmin dump /var/svn/mywebsite > mywebsite_dump
```

So now you want to go move this file to your new server and create your subversion repo. Make sure you use the same name as the old one. Go to folder where you uploaded your dump file to and do the following:

```bash
svnadmin load /pathToYourRepo < reponame_dump
Example: svnadmin dump /var/svn/mywebsite < mywebsite_dump
```

So there you go. In this tutorial I did not include setting up the subversion server cause I made the assumption you know how to do this since you already have an SVN repo setup.
