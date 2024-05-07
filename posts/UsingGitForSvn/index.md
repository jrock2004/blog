---
title: "Using Git for SVN"
date: "2012-01-04"
tags:
  - development
---

So I have switched from SVN to Git and I am very happy about it. When I am at work I am stuck using SVN and I hate it. So I learned about a command that git has called git svn. It allows me to clone an SVN repo and locally use Git for it. I can make my commits and keep things versioned via Git. When I am done I can then commit it to the SVN repo and nobody would know I used Git instead of SVN. What is nice is it will commit all the changes, not just one massive one. I have yet to run into and issue but that’s ok if I do. So if you are a Git user stuck in an SVN world, then this is the way to save yourself. Let me show you an example of how to use this.

```bash
git svn clone "urlToSVNrepository"
git svn clone "http://svn.google.com/sampleTest"

git svn clone "urlToSVNrepository" -T trunk -b branches -t tags

git svn clone "http://svn.google.com/sampleTest" -T trunk -b branches -t tags
```

So now you have your svn project using git, which is nice. What also is nice is your project no longer has a bunch of .svn folders like you see in SVN land. That should be one of many things that will make you want to do this. I will make tutorial video on this soon so stay tuned if you are interested.
