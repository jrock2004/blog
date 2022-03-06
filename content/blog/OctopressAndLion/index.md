---
title: "Octopress and Lion"
date: "2012-03-04"
tags:
  - general
---

I just bought a few weeks ago a new MacBook Pro and I love it. So now it was time to setup my computer to use rvm and Octopress. So I logged into the Mac App store and downloaded the newest version of Xcode and installed it. I then went to the Octopress webstite and followed the directions on setting up RVM.

I ran into several errors about make and gcc-4.2. So after searching around the internet I found some help. It appears that after version 4.1, Ruby and xcode do not play nice. So I downgraded my version of Xcode and had to install a [patch for gcc](https://github.com/kennethreitz/osx-gcc-installer/downloads) . Lastly you will want to add the following to your bash_profile or your zshrc:

```
/usr/bin/gcc-4.2
```

Now, just restart your terminal app and then go ahead and follow the [Octopress site](http://octopress.org/docs/setup/) to finish setting it up.
