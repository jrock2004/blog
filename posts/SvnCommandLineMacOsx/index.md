---
title: "SVN Command Line Mac OSX"
date: "2009-09-14"
tags:
  - development
  - apple
---

In one of my previous tutorials I showed you how to setup an [SVN server](http://oldblog.dev/blog/2009/09/14/svn-command-line-mac-osx/blog/2009/09/03/setup-svn-server/). So now that is setup I am sure your next question is how do I use it. In the Mac realm there is limited access to how to communicate with an SVN. In this tutorial I am going to show you how to use Terminal to work with your SVN repository. So I created a folder in my users directory called Development.

```
cd Development
mkdir myWebsite
svn co http://ipaddressofserver/svn/myWebsite myWebsite
```

So now if you view the myWebsite directory you will see any files that are in the SVN directory. So now you will want to create a file and put some text in there. This can be anything from web files, images, executables, etc… Then when you are ready go back to the terminal and do the following:

```
cd Development
svn commit myWebsite -m "You would put some sort of message to explain what you are updating" --username jcostanzo
```

And that is pretty much it to command line work with SVN. There are tons more information about SVN command line. This is just the basics to get you started.
