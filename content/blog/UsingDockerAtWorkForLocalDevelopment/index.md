---
title: "Using Docker at Work for Local Development"
image: ./docker.jpg
date: "2018-06-18"
tags:
  - docker
  - apple
  - linux
  - windows
---

At the company I work for we wanted to setup [Docker](https://www.docker.com/) so local developers do not have to do all this work to get their machines configured for any projects. We also wanted to get away from have documentation for different developer laptops. We use Macs, Linux, and Windows machines. So now I have decided to go down the path of learning how to set this up and get this working for everyone.

![Docker whale](/docker.jpg)

Before I started learning, what I thought what we were eventually going to get is, one set of files that would work no matter what operating system our devs were using. So then I started research about Docker. I started by going through Docker's documentation. I took a course in [Pluralsight](https://www.pluralsight.com/) about it. Then I started searching YouTube for Docker talks to get me in understanding the basics. I still have way more things to learn but I feel like I am going down the right path.

So now I was ready to figure out what I needed Docker to do for us. I know that I need 2 services. One service was for [EmberJS](https://www.emberjs.com/) and the other service is for our web server [Nginx](https://www.nginx.com/). So I started by creating a _Dockerfile_ for the Ember service.

```dockerfile
FROM node:8.11.1-alpine
LABEL maintainer="John"

ENV EMBER_VERSION=2.18.2 APP_DIR=/myapp

RUN apk add --no-cache \\
  git && \\
  yarn global add ember-cli@$EMBER_VERSION bower@latest && \\
  mkdir -p $APP_DIR && \\
  cd $APP_DIR

COPY ./docker/entrypoint.sh /entrypoint.sh

EXPOSE 4200 7357 8080 9222 7020
WORKDIR $APP_DIR
VOLUME [$APP_DIR]

CMD ["/entrypoint.sh"]
```

This will create a NodeJS image that has bower, yarn, and EmberJS. Now we are ready to build our _docker-compose.yml_ file.

```yaml
version: '3'

volumes:
  ember-bower_components:
  ember-node_modules:

services:
  ember:
    build: .
    container_name: ember-app
    ports:
      - 7357:7357
      - 4200:4200
      - 9222:9222
      - 49152:49152
    volumes:
      - .:/myapp
      - ember-bower_components:/myapp/bower\_components
      - ember-node_modules:/myapp/node\_modules
      - ./docker/entrypoint.sh:/entrypoint.sh
    tmpfs:
      - /myapp/tmp
    environment:
      - API_HOST=http://someapi
      - API_KEY=sdfdfdsfdsfdsfsdfsdfsdf
    command: ["sh", "/entrypoint.sh"\]
  nginx:
    image: nginx:1.12.1-alpine
    container_name: nginx-app
    ports:
      - 8081:8080
    depends_on:
      - ember
    volumes:
      - ./docker/default.template:/etc/nginx/conf.d/default.template
      - ./dist:/usr/share/nginx/html:delegated
    environment:
      - SERVER_NAME=localhost
    command: /bin/sh -c "envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
```

So this got the Mac and Windows guys working. They can run _docker-compose up_ and get working on the code. If they needed to create a new component they just ran something like `docker exec -it ember-app ember g component my-component`. They continued to work just fine. So then I went fired up my [Solus Linux](https://solus-project.com/) and started it up. It worked just fine. So now I wanted to create a new component to test that out and it generated it. But when I opened the component and made some changes and hit save, I got a permission error.

So this is where I end this first part of the journey. Its now off to go figure a solution that will fix the Linux side, but also not break the Windows and Mac guys. So make sure to check back for part 2 that will talk about the solution I found. Any questions or comments, please leave a comment
