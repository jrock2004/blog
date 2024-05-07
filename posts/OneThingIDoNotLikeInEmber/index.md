---
title: "One Thing I Do Not Like in Ember"
date: "2020-08-21"
tags:
  - ember
---

So I was interviewing someone for a role with my company and during the part where you ask the person, “Do you have any questions for me?” came up, he asked something different. Tell me one thing that you do not like in Ember.

I had to sit back and think about this. I did not want to cop out and say, there is nothing wrong in Ember, I like it all. EmberJS is a great framework to use and its improving all the time. So I thought about it for a second, and I remembered about how the API I work with, returns their properties in sentence case, instead of camel case.

In our code base, we have a bunch of serialization files that basically tell ember that something like, `FirstName` is really `firstName`. Of course at a certain point, Ember has come up with a better solution for this, and we have converted from doing this way, to the new way. Ember Data expects your API to send you back the data in a certain way. When it does not, there are things you need to do to change that output to be Ember Data friendly.

For you Ember developers out there, how would you answered this question? Comment below or hit me on Twitter.
