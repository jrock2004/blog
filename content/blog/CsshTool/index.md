---
title: "CSSH Tool"
date: "2009-05-08"
tags:
  - linux
---

A fellow colleague told me about an application that he was told was a must. [CSSH](http://cssh.sourceforge.net/) is an application that allows you to send a command to multiple computers. So lets say you have to update multiple linux/unix computers to update for work or home. If these computers are running SSH server you can use CSSH. You need to be running X Windows for this application to work. Basically you install CSSH on one of the computers then you can run the following command from the terminal.

```bash
$ cssh root@192.168.2.100 root@192.168.2.101 root@192.168.2.103
```

So let me put this in an example just in case I am not being understood. Lets say you hve 10 computer running Ubuntu. Using CSSH you can send apt-get update and apt-get upgrade to all 10 computers at once. This saves you from having to type that command in 10 different terminal windows.

```bash
#!/bin/bash

cssh root@192.168.2.100 root@192.168.2.101 root@192.168.2.103
```
