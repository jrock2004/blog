---
title: "Basic Cocoa App"
date: "2009-07-14"
tags:
  - development
  - apple
---

Well I started looking into Cocoa programming so I could develop some Mac applications. So here is my first tutorial on how to develop using Objective-C language.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fGZufe9sfGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I will post the Hello.h and the Hello.m files cause I know they are tuff to read.

```javascript
//  Hello.h
//  HelloWorldApp

//  Created by John Costanzo on 7/13/09.
//  Copyright 2009 JC Web Concepts. All rights reserved.

#import
@interface Hello : NSObject
{
    IBOutlet NSTexField *textField;
}
- (IBAction)sayHello:(id)sender;
@end
```

```javascript
//  Hello.m
//  HelloWorldApp

//  Created by John Costanzo on 7/13/09.
//  Copyright 2009 JC Web Concepts. All rights reserved.

#import "Hello.h"
@implementation Hello
- (IBAction)sayHello:(id)sender
{
  //Say Hello
  [textField setStringValue:@"Hello, World!"];
}
@end
```
