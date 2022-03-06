---
title: "My Switch to Neovim"
image: "./neovim.jpg"
date: "2017-06-21"
tags:
  - editor
---

For the longest time I have been hopping from editor to editor. I have used [Notepad++](https://notepad-plus-plus.org/), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), and recently [Visual Studio Code](https://code.visualstudio.com/). I have known so many people who keep telling me to try and use Vim. They say you will love it. So, for the past 6 months I have been using [Neovim](https://neovim.io/). It has been a long challenge to not go back, but it is growing on me as an editor. Now I am not here to tell you that Vim is better than any other editor. I am not here to tell you that you should use it. I want to tell you why I enjoy using it and then you can make your own decision.

![Neovim with Tmux](https://camo.githubusercontent.com/be3ede934fb02c7751b5904fce91cb6227284cd1/687474703a2f2f692e696d6775722e636f6d2f7a324e47346b392e676966)

So the hardest part for me in using vim/neovim was learning the keyboard shortcuts. If you are not a keyboard shortcut person, then using Vim is out of the question. I like to use them but never train myself in them so this is one of the first things I had to do. I had to start memorizing them. The problem I ran into was there was just way too many. Then a friend of mine told me that instead of just opening a help document and learning them all, he told me to learn a new command a week. He told me that when I find a new command to learn, write it on a sticky note and put it on my monitor. So that is what I did, I found that I was hitting `w` or `e` to get to the beginning or ending of a line. So the first command set that I need helping getting into muscle memory was `Shift+I` and `Shift+A`.

So as I was watching others on YouTube and reading articles, they recommend learning `h,j,k,l`and to do so they recommended, [https://vim-adventures.com/](https://vim-adventures.com/). So I did that and learned to become a master of those keys. Man did that save my fingers so much. So then I had to train myself to not use the arrow keys to move. To do this, in my vimrc I put in a snippet to echo "Stop being stupid!", thanks [Nick Nisi](https://nicknisi.com/).

The other big mistake I made when I first started to learn vim, was to use someone elses vimrc verbatim. You should never ever do this, ever. You should start off with an empty or bare essential vimrc. Then when things are not what you need it to be, then add it to your vimrc. When I first started I did this and man it made things so confusing. Half of the plugins, I never used, others caused weird behavior that I was not expecting. So after awhile. So soon I ended up with my Neovim/vim look like this:

![How my Neovim looks like](neovim.jpg)

So if you want to look over my [vimrc](https://github.com/jrock2004/dotfiles/blob/master/config/nvim/init.vim), you may do so but remember, don't just copy it and use it as your own as it may not be what you need. Take pieces of it. Any questions, please comment below and I will try to answer them
