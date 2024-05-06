---
title: "Setting Up Nagios"
date: "2009-08-11"
tags:
  - server
  - linux
---

Well at work I have been messing with a server application call [Nagios](http://www.nagios.org/). This app is used to monitor your servers for certain issues. It can monitor anything from file space to processes running. It will ping servers and you will be notified if it has gone down. Now at first this is a little tricky to setup but once you do it you will get use to it. Now I have this running on Ubuntu servers. I do have some Windows servers but monitoring on those are limited. I will be trying to do this on some other versions of linux like gentoo or red hat. So lets get into this. Before you start this you would want to make sure that you have a configured and working Apache/www server running. You will need this for the GUI interface. First thing you need to do is find the server that is going to be the master server. The master server will hold the Nagios Server app. To install the server on Ubuntu do the follow:

```bash
sudo apt-get update
sudo apt-get install nagios3
```

During install you will need to tell nagios how you want to setup a mail server. The choices are Internet Site, Internet with smarthost, Satellite system, and Local only. Now the Internet with smarthost will take you thru setting up to use sendmail to point to another mail server. Internet Site will setup sendmail to send mail to the internet by itself. I am going to choose Internet Site. It will ask you for the System mail name will be your domain name.

Now lets setup the nagios user. First thing you want to do is check the /etc/nagios3/cgi.cfg to see what user it is expecting. So open that file and look for this line

```bash
authorized_for_system_information=nagios
```

If you are going to change the username for nagios, in that same file, do the following replace

```bash
:% s/nagiosadmin/nagios/g
```

Now it might show you something like nagiosadmin. You are welcome to change this but you will have to change it in multiple places. You are welcome to do that. I changed mine to just nagios as you can see. So save the file and run the following commands

```bash
cd /etc/nagios3
sudo htpasswd -c htpasswd.users nagios
**Note**: nagios needs to be what ever username is specifed in the cgi.cfg
```

So that should be good for a start. Lets start Nagios or restart it.

```bash
sudo /etc/init.d/nagios3 restart
```

Now in your web browser go to [http://\_ipaddress\_/nagios3](http://_ipaddress_/nagios3)

If something goes wrong or you get permissions error you might have to check the cgi.cfg to make sure your usernames match up. So now that you have a working install it is time to go over some configuration stuff. So lets check the first service that is setup in nagios. Open the localhost_nagios2.cfg in the /etc/nagios3/conf.d/

```bash
define host
{
    generic-host;
    host_name localhost
    alias localhost
    address 127.0.0.1
}
```

This file does not require and editing really. One last thing we want to edit is the contacts.cfg All you have to edit here is the email line to match your email address.

Here below is a video of what I have done above:

<iframe width="560" height="315" src="https://www.youtube.com/embed/a5b63s9jYik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
