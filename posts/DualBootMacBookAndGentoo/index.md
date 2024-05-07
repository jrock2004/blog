---
title: "Dual Boot MacBook 5,2 and Gentoo"
date: "2011-04-27"
tags:
  - linux
---

One thing that I have always wanted to do was dual boot my Mac computer so I could run Linux on real hardware instead of emulation. This tutorial is going to show you how to accomplish this. A thing to note is you can do this with any Linux distro. Also the Mac that was used in this tutorial was a 13 inch White MacBook 5,2 version.

## Things needed for this process:

- Boot manager: [rEFIt](http://refit.sourceforge.net/)
- Gentoo minimal ISO: [Gentoo x86](http://mirrors.kernel.org/gentoo/releases/x86/autobuilds/current-iso/)
- USB Keyboard and Mouse
- Wired Internet Connection

## Partition HD

### Mac already installed

- Open boot camp assisant
- Set the partition size to the size you want
- When this is done go ahead and click quite and install later
- At this point you are done with partitioning your drive

### Mac not installed

- Turn on your Mac and hold the option key down until the selector comes up
- Insert your Mac CD in and wait for it to show. Click on it
- When the CD is loaded you will want to open disk utilities in the menu up top
- Click on your hard drive and then on the right click the partition tab
- Under volume scheme you want to select two partitions
- !!!!! Need to work on it ending of this part

You are down with the drive partition now. We now need to move into the boot loader tool that is going to help us along the way

## rEFIt

- Now go ahead and install the rEFIT application
- **Note:** There is nothing fancy with this install
- Now reboot to verify that the boot loader app comes up. If it does not try rebooting again

You are now done with the boot loader and we are now ready to install Gentoo

After downloading and burning the ISO file to a disc you are ready, you are ready to start. Plug in your USB keyboard for now, insert the gentoo disc you burnt and restart. Remember to hold option key down so you get the option to boot to your CD. Now I am not going to go thru all the steps to install because this is well documented on Gentoo’s website. This can be found [here!](http://www.gentoo.org/doc/en/handbook/handbook-x86.xml)

So lets highlight the sections that you need to make some adjustments since you are not doing a typical dual boot on a regular PC

### Boot parameters

When you get to the book parameters, you will want to type the following:

```bash
gentoo maxcpus=1 vga=791
```

### Partition table

Here is the partition setup I have and you are welcome to follow it. Now yours might be different but should be close. If you are a cfdisk fan like I you will need to open your sda parition in fdisk, to delete the partition created by apple. Also do not worry about the warnings about unsupported GPT table. Its ok, so here is what my partitions looks like after I am done setting up the partitions that the guide tells us too

- sda1 - GPT
- sda2 - Mac HFS/HFS+
- sda3 - Linux root
- sda4 - Linux swap

After you are done with this you will want to type the following: modprobe hid-apple This is done so your drivers get loaded for the apple keyboard. At this point you can remove the USB keyboard. When downloading the stage3, make sure you download the i686 one Now I do not use the genkernel. If you follow the install guide you use ext2 for the boot partition. So for some reason the kernel does not have this enabled so that is the only thing at this time I enable, beyond what is already enabled. After you exit you will want to back up the .config file. I like to do this so I can keep my kernel config files backed up. When you are setting up your grub or lilo, you want to make sure on the kernel line that you add the following:

```bash
maxcpus=1
```

## After Gentoo install

After you are done installing and you reboot you will want to leave your reboot until you get to the rEFIt menu. It does take a little bit to get to it so do not be too concerned. When you get there select the partitioning tool. You will get an error but that is ok. Hit any key and shut off your Mac. Now turn it back on and when you hear the ding hold the option key. Select the hard drive that says Windows. you should boot into Gentoo. If so then clap your hands. Log in as root and restart your computer. Try going into your Mac OS. If you can then you can go to rEFIt site and get the uninstall directions. Congratulations, you have just installed and got Gentoo somewhat working on your MacBook.
