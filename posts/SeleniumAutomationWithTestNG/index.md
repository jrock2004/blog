---
title: "Selenium Automation With TestNG"
date: "2010-05-27"
tags:
  - automation
  - java
  - tutorial
---

I wanted to start off with a simple tutorial that shows you how to write some simple automation scripts. Basically you write Selenium scripts that will test/verify information on a webpage. Example would be lets say you have a webstore that has a shopping cart. You might want to write automation that goes thru purchasing something to make sure it is working. So here is the video and below that I will have the script as well.

<iframe width="560" height="315" src="https://www.youtube.com/embed/00dwMzEsUKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```java
package com.jcwebconcepts.tutorials.basics;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class SimpleBrowserTests {
    private String appURL = "http://www.jcwebconcepts.net";

    @Test public void openMyBlog() {
        FirefoxDriver driver = new FirefoxDriver();
        driver.get(appURL);
    }

    @Test public void searchGoogle() {
        FirefoxDriver driver = new FirefoxDriver();
        driver.get("http://www.google.com");
        driver.findElementByName("q").sendKeys("Apple");
        driver.findElementByName("btnG").click();
    }
}
```
