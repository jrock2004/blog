---
title: "Mplayer Playlist"
date: "2010-03-31"
tags:
  - linux
---

Ok I know this type of post is not like me but I thought I would post it since I needed to research on how to do this. Well a lot of my development is done in the Linux environment. All my music comes from CD’s or purchases from iTunes. In the Linux realm I have found that purchased music is not liked. So when I program in the Gentoo I mount my iTunes music folder. Since I am in command line most of the time I use Mplayer to listen to my music. So I needed to figure out how to tell Mplayer to play everything in my Music folder. I got tired or having to pick a new song all the time. So let me show you how I did this. Ok the first thing you want to do is run the[<8;90;5m following command from my home directory to create the playlist:

```bash
$ find /media/prl/iTunes Music/ > myMusic
```

Now the two things you would need to change is where the main folder of your music is and the other thing is what you want to name your playlist. Instead of myMusic you could say JohnsPlaylist. Now that you got the playlist to run it you would run this command

```bash
$ mplayer -playlist ~/myMusic
```

If you want to shuffle the playlist you would do

```bash
$ mplayer -playlist ~/myMusic -shuffle
```

Well I hope this might have help some other people who maybe had the same struggles I did.
