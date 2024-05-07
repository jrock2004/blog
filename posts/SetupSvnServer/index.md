---
title: "Setup SVN Server"
authors:
  - jrock2004
date: "2009-09-03"
tags:
  - server
---

[SVN](http://subversion.tigris.org/) (which stands for Subversion) is a version control system. So let me speak some english here for you. Lets say you make a website for a customer. When you are finished it is version 1. A month or so later the customer calls you back and wants to add a page or 2. This would then be version 2. So you upload ver 2 to replace ver 1 and the customer hates it. Oh my I did not back up ver 1 and there are many changes that happened. Well if you are using SVN you can go in and tell the code to revert back to ver 1 and then upload those files and you are a happy camper. Well with the quick explaining what the SVN is, now lets show you how to setup the server for this. I will be installing this on a Ubuntu 9.04 box. I have tested this way with versions 8.04 and 8.10. Now I am assuming that you have Apache 2 and up already installed and configured. Lets installing the app Subversion and install the apache module libapache2-svn

```
sudo apt-get update
sudo apt-get install subversion libapache2-svn
```

Now that we got that installed lets add a new group for subversion

```
sudo addgroup subversion
```

Next we make a main directory that will hold all of our SVN. You can have multiple sites or repositories as they are called for different sites or projects

```
sudo mkdir /home/svn
```

**Note** There is really no wrong place that you can setup the svn directory

Now we just need to make some permission changes to the directory we just made

```
sudo chown -R www-data:subversion /home/svn
sudo chmod -R g+rws /home/svn
```

Next we are going to create the SVN. For this example I will name the SVN myWebsite . Now you can name your repository pretty much anything you want.

```
sudo svnadmin create /home/svn/myWebsite
```

We now have the SVN setup but now we need to get this configure so users can now connect to this SVN. We now need to edit /etc/apache2/mods- available/dav_svn.conf and make some changes to that file. You can add the following to the end of the file

```
DAV svn
SVNPath /home/svn/myWebsite
AuthType Basic
AuthName "myWebsite subversion repository"
AuthUserFile /etc/subversion/passwd
Require valid-user
```

If you have multiple repositories you would just add another section and change myWebsite to the name of the other repo. Now lets add 2 username and passwords that can connect to the SVN.

```
sudo htpasswd -c /etc/subversion/passwd jcostanzo
# You are prompted for the password. Go ahead and make one up
sudo htpasswd /etc/subversion/passwd bsmith
# Notice we took out the -c This is due to the -c is a flag that creates the passwd file
```

Lets go ahead and finish up

```
sudo chown -R www-data:subversion myWebsite
sudo chmod -R g+rws myWebsite
sudo /etc/init.d/apache2 restart
```

That is it. You know have a working SVN server. In a later tutorial I will show you how to setup an SVN client to connect to this repositories. Below is a youtube video showing you how to do what I described above.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RjIpRS7Pb_Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
