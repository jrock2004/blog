---
title: "Using Expect"
date: "2010-01-07"
tags:
  - linux
---

Are you running a Linux or Unix server that there are process you need to automate? Is there a daily process that are just a waist of your time but not to your server? There is a nice application called [Expect](https://expect.nist.gov/) that can help you with this. This application can handle several protocols. Some are ssh, telnet, ftp, passwd, fsck, rlogin, tip, etc… This application does not need a server it is just a client. The client is installed where your script will run from. The nice thing about expect is the file can be executed on a webpage as well. So let me show you an example script:

```bash
#!/usr/bin/expect

###Usage: call the file with a username.

spawn ssh -i /var/employee/includes/id_rsa root@10.10.1.12
expect "The authenticity of host '10.10.1.12 (10.10.1.12)' can't be established.
RSA key fingerprint is 47:4a:6a:ce:65:99:e2:93:2b:7t:a9:48:19:64:f6:28.
Are you sure you want to continue connecting (yes/no)?"

send "Yesr"
expect "root@10.10.1.12's password:"
send "iamthegreatoner"
expect "#"
send "cd /homer"
expect "#"
send "rm -Rf $argvr"
expect "#"
send "cp -a default/ $argvr"
expect "#"
send "chown -R $argv:513 $argvr"
expect "#"
send "exitr"
expect eof
```

This script is executed by running the following:

```bash
expect thefilename.exp john
```

This is a script I use at work to reset my users profiles when they mess them up. As you can see then when you run the file you must pass an argument. So in this case you ssh into the server that has the user directories pass the name of the directory. So this script will remove the current users directory and cp the default profile directory to theirs. It will then set the right permissions for the user. **Note:** The group 513 may be different from server to server. Now you do not need to use ssh or anything like that. So if you want to have the script live in the same box you can remove the SSH information. Hope this helps and give it a try it is a nice tool.
