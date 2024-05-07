---
title: "Applescript"
date: "2009-05-29"
tags:
  - development
  - apple
---

So I decided to look at Apple Scripting and I will tell you it is not that bad. I still have to kind the site that has all the built-in keywords but it works. Let me show you a little script I made that will prompt you to type in a PHP function name(mysql_connect) and it will open up your browser and take you to the PHP page with that function

```javascript
set phpFunction to ""
try
  set phpFunction to text returned of (display dialog "Which PHP Function do you want to look up?" default answer "echo")
end try
open location "http://www.php.net/" & phpFunction
end run
```

Let me explain what is going on here. The set phpfunction is creating a varible that will hold the text. Display dialog is setting up a prompt Window. The dialog has 2 parts. First part is what is text is going to display in the box. The second part is if you wanted some default text in the text box where the user would type in. The open location is telling it to open your web browser. The phpfunction is adding the function you typed in the box to the URL string. And that is it for some Apple Script.a
