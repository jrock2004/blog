---
title: "Setting Up a Git Server"
date: "2011-03-12"
tags:
  - development
  - tutorial
---

Version control is something that a lot of developers use. I have been using SVN for the longest time and ignoring Git. I found it confusing and I just left it alone. I did the same thing before I started to use SVN. I thought I would have learned by now. So take a look at the video below and I will also put the steps at the end of the post.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1gNFrPNF9-Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

On where the master git server will be hosted

```bash
mkdir /home/git/somerepo.git
cd /home/git/somerepo.git
git --bare init
```

Now lets go to your computer

```bash
mkdir somerepo.git
cd somerepo.git
git init
**Create a README file or you can type:
touch README
git add .
git commit -m "Some message"
git remote add origin username@yourservername:somerepo.git
git push origin master
```

Now this setup is just using the users that are already on the server. You can setup that you do not need to type in password. You can create just a git user. I hope that this tutorial has helped.
