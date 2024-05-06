---
title: "Hosts File"
date: "2010-03-25"
tags:
  - apple
  - linux
  - windows
---

As a web developer one of the tools that I love to use is built right into the operating system. I have come across some jobs where the coder has coded everything in absolute paths. Well if you are like me and like to test stuff on a local server first, then you will run into some issues. If your page calls an file it will call it from the remote server and not the local one. There are other examples but I will spare you of them. Lets get to this hosts file. The hosts file exists in modern day operating systems. You can find it in Linux, Mac, Unix, and or Windows. Let me show you where these files exist.

On Mac or Linux

```bash
/etc/hosts
```

On Windows

```bash
C:Windowssystem32driversetchosts
```

So now let me show you some magic. So now on your testing box I would add a new entry. It can be added anywhere you want. So add this line

```bash
127.0.0.1    jcwebconcepts.net
```

Of course you could substitute with any domain. So now when you test your files/scripts and the point to the absolute path you will pointing to your local box. Of course when you are done I like to comment that out. Just in case I forget that I have that and I want to look at the remote site. Now if you want to see the test environment on another computer the line you add to the host file will be different. First get your IP of the test box. Mine is 192.168.2.120

```bash
192.168.2.120    jcwebconcepts.net
```

So you an start to see the things you can do with the hosts file that can help you. Instead of recoding all those absolute paths to relative you can edit the hosts file and test it that way.

Here is a video that explains some of this

<iframe width="560" height="315" src="https://www.youtube.com/embed/ubVRUWiA4hU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
