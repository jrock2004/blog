---
title: "Linux System Backup"
date: "2009-08-13"
tags:
  - linux
---

Well today at work I was given a task to backup a server then reformat the machine and setup a new one. So I sat to think about how am I going to back this up. Am I only going to backup certain files? Or should I just do the whole system? I chose to do the whole system due to age of the OS and applications. What if I needed to go back to the way it was. So I thought I would just quickly show you the single command I ran that did the work for me. I mount my terabyte drive to the system and ran the following:

```bash
tar cvzpf /mnt/extdrive/backupfilename.tgz --same-owner --exclude=/mnt/extdrive/backupfilename.tar.gz --exclude=/proc/* --exclude=/media/* --exclude=/dev/* --exclude=/mnt/* --exclude=/sys/* --exclude=/tmp/* /
```

That is what I did to do my backup. If you want to use this you can but you might need to make some changes. If you like this backup method and it works for you, you can put it in a bash script and setup a cron to do this on a regular basis.

```bash
#!/bin/bash
tar cvzpf /mnt/extdrive/backupfilename.tgz --same-owner --exclude=/mnt/extdrive/backupfilename.tar.gz --exclude=/proc/* --exclude=/media/* --exclude=/dev/* --exclude=/mnt/* --exclude=/sys/* --exclude=/tmp/* /
```

Save the file then do:

```bash
chmod a+x filename
```

Add it to the crontab and you are done
