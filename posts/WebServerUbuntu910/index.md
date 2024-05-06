---
title: "Web Server Ubuntu 9.10"
date: "2009-08-08"
tags:
  - linux
  - tutorial
---

So I thought I would write up a tutorial on how to install a web server that will support Apache, PHP, and MySQL. I will go over some configuration file adjustments as well. So lets get into this and lets open up your terminal and do the following:

```bash
john@jcwebconcepts.net:~$ sudo taskel install lamp-server
```

Now during this process you will be asked a few things. You will be asked for a MySQL password. The password you will set will be your root users password. When it is installing PHP it might ask you what type of module do you want to install for. You will want to select Apache2. This will take a few minutes to install. Once done you can open up your web browser and put in the address bar the IP address of your web server. Now lets edit the default file for your website.

```bash
john@jcwebconcepts.net:~$ sudo vim /etc/apache2/sites-available/default

    # If this is going to be internal only then you can leave this alone
    ServerAdmin webmaster@localhost
    # Now you need to add the following line. If this will be internal then put internal
    # IP. If this will be external then you would either put domain name or outside IP
    ServerName 192.168.2.110
    # Because you server will support PHP we need to setup a directory index
    DirectoryIndex index.php index.htm index.html
    DocumentRoot /var/www
            Options FollowSymLinks
            AllowOverride None
            AllowOverride None
            Options Indexes FollowSymLinks MultiViews
            Order allow,deny
            allow from all
    ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
            AllowOverride None
            Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
            Order allow,deny
            Allow from all
    ErrorLog /var/log/apache2/error.log
    # Possible values include: debug, info, notice, warn, error, crit,
    # alert, emerg.
    LogLevel warn
    CustomLog /var/log/apache2/access.log combined
Alias /doc/ "/usr/share/doc/"
    Options Indexes MultiViews FollowSymLinks
    AllowOverride None
    Order deny,allow
    Deny from all
    Allow from 127.0.0.0/255.0.0.0 ::1/128
```

The directory index basically tells the server what files to look for in one is not specified. For example if I do [https://www.jcwebconcepts.net/](https://www.jcwebconcepts.net/) the server will look in the server root directory for the following files: index.php index.htm index.html. If they do not exist you will get an error. And that is it for setting up your own web server in Ubuntu 9.04. I have tried this in the alpha 9.10 and it works as well.

<iframe width="560" height="315" src="https://www.youtube.com/embed/J8y51yESHyU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
