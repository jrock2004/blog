---
title: "Zenoss MySQL Database"
date: "2009-11-18"
tags:
  - server
  - linux
---

One of the things I never understood after installing Zenoss, was where is this mysql database. I found out that with Zenoss it sets up it’s own MySQL server and it is even smart to put it on a different port. So lets say you want to access this database and see what it looks like. This can be done by doing the following:

```bash
su zenoss
mysql -u zenoss -p
```

Just enter the password for your zenoss database and then you can have access to the MySQL server. Hope this helps out someone.
