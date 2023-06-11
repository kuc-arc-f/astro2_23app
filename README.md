# astro2_23app

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/05/24

 update  : 2023/06/11 

***
### Summary

Astro 2 +  Cloudflare D1 app , todo, plan, er-chart, task-list

* todo : todo app, markdown input
* plan : schedule input
* er-chart : mermaid.js use, Er Chart create
* task-list: project, task List add

***
### API Server

* https://github.com/kuc-arc-f/d1-project8git

***
### Screen

* todo

![img](https://img-static-kuc.netlify.app/img/front_2023/ss-todo-0611_18d.png)

***
### setup
* .env
* PUBLIC_API_URL, PUBLIC_API_KEY
* auth info: PUBLIC_BASIC_AUTH_USER, PUBLIC_BASIC_AUTH_PASSWORD

```
PUBLIC_BASIC_AUTH_USER = "hoge"
PUBLIC_BASIC_AUTH_PASSWORD = "1111"

PUBLIC_API_URL=http://localhost:8787
PUBLIC_API_KEY="hoge123"

```

***
* (option) mail send setting, .env
```
# MAIL
PUBLIC_SMTP_HOST = "test.com"
PUBLIC_SMTP_PORT = 465
PUBLIC_SMTP_SECURE = true
PUBLIC_SMTP_AUTH_USER = "hoge"
PUBLIC_SMTP_AUTH_PASS = ""
PUBLIC_FROM_MAIL_ADDRESS = "from@test.com"
```

***
### Start

```
npm i

#start-dev

yarn  dev

# build

yarn build
```

***
* start

* http://localhost:3000/

***
### blog

https://zenn.dev/knaka0209/books/b5e25eac05b2c5

***

