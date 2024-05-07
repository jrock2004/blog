---
title: "EmberJS with REST API"
date: "2020-08-26"
tags:
  - ember
---

Sometimes you have to work with API’s that are not following a certain standard. When working with these types of API’s, Ember data will not work with it unless you massage the data. This article is to talk about how can work with this and make it work better with Ember Data.

So first lets show what a REST Api should look like if you were building a simple blog

```javascript
posts: [
  {
    id: 1,
    title: "This is my first post",
    body: "Some description would go here",
  },
]
```

So for an API like, this, you would have a model called `post` that would have the attributes of `title` and `body` .

```js
import Model, { attr } from "@ember-data/modl"

export default class PostModel extends Model {
  @attr title
  @attr body
}
```

But lets say we are working with an API that will return the data a little different.

```js
IsSuccess: false,
ErrorMessage: null,
Posts: [
  {
    ID: 1,
    Title: 'This is my first post',
    Body: 'Some description would go here'
  }
]
```

So there are a few things that are a little different that we will not have to massage a little bit before ember data will understand

```js
import RESTSerializer from "@ember-data/serializer/rest"

export default class PostSerializer extends RESTSerializer {
  serialize(snapshot, options) {
    let json = super.serialize(...arguments)

    // For another prod use we would want to check these
    // first
    delete json.IsSuccess
    delete json.ErrorMessage

    return json
  }

  normalize(typeClass, hash, prop) {
    hash.id = hash.ID
    hash.title = hash.Title
    hash.body = hash.Body

    return super.normalize(...arguments)
  }
}
```

So this will work just fine. This is the way I use to do this. It worked but it was lots of writing. If you were working with an API with lots of properties, this would get tiresome. So let me show you another way you could remove some of the effort. Instead of using the normalize function, lets take advantage of another function called `keyForAttribute`

```js
import RESTSerializer from "@ember-data/serializer/rest"
import { camelCase } from "@ember/string"

export default class PostSerializer extends RESTSerializer {
  serialize(snapshot, options) {
    let json = super.serialize(...arguments)

    // For another prod use we would want to check these
    // first
    delete json.IsSuccess
    delete json.ErrorMessage

    return json
  }

  keyForAttribute(attr, method) {
    if (attr === "ID") {
      return "id"
    }

    return camelCase(attr)
  }
}
```

So this will make it a little easier and you do not have to map the API properties to the ember model properties. Maybe there is even a better way to do this them I am doing it. If so please comment below or hit me on Twitter.
