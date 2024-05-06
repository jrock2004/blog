---
title: "Java Hello World"
date: "2010-04-01"
tags:
  - java
  - tutorial
---

Well I have decided to jump back into Java programming due to some recent events. I went out and bought [Sams Teach Yourself Java in 24 Hours](http://www.amazon.com/Sams-Teach-Yourself-Java-Hours/dp/0672330768/ref=sr_1_1?ie=UTF8&s=books&qid=1270148003&sr=1-1) to help me in this journey. So to help me grasp the material I wanted to create blog posts/tutorials to help me and to help others who might be on this same goal.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q9BQGYz96VY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Oh and the two things that you will not see the void main for is applets and servlets. Here is the source code of the file I created

```java
class HelloWorld {
  public static void main(String[] args) {
      String sayHello = "Hello, World!";
      String myName = "John Costanzo";
      int myAge = 28;
      boolean theTruth = false;
      System.out.println(sayHello + " My name is " + myName);
      System.out.println("Is my age " + myAge + "?nThe answer is " + theTruth);
  }
}
```
