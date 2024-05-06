---
title: "Vim in VS Code"
date: "2019-05-24"
tags:
  - apple
  - editor
---

I know that this is not a new add on or anything like that, but man did I misjudge the power of this [Vim add on.](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) For the longest time I thought that all this did was just allow you to was move around with h,j,k,l. Man, was I totally wrong and I apologize to the author of this add on.

When you typically use vim, you have your vimrc/init.vim to have your settings and plugins that you will use to help you in your day to day. In vim I loved being able to do ,, to save my file that I was working on.

```
{
  "vim.normalModeKeyBindings": [
    {
      "before": ["<leader>", "<leader>"],
      "commands": [
        ":w"
      ]
    }
  ]
}
```

So as you can see, we can add keymaps to when we are in normal mode. There is support for keymaps when in visual mode as well. I could go on about other mappings, but I will just embed my gist that I have of my settings file for VS Code.

[Link to Gist](https://gist.github.com/jrock2004/34c134d3a4a8bfb84336fd5d52472237#file-settings-json)
