title: 'Gulp-scp无法传输'
date: 2015-07-08 16:40:27
tags:
  - Javascript
  - NPM
  - Grunt
  - Gulp
  - SCP
categories: Javascript
keywords:
  - Javascript
  - NPM
  - Grunt
  - Gulp
  - SCP
---

# 浪费了一个下午

之前我用WinScp的同步功能, 但只要`gulp clean`, 就立刻报错, 无奈之下只好寻找相关的gulp组件

在npm下就有两个相关的gulp组件, 分别是`gulp-scp` 和 `gulp-scp2`, 我一个个地说

# Gulp-scp
## NPM地址

<https://www.npmjs.com/package/gulp-scp>

## 配置如下
```javascript
gulp.src('./build/index.html')
    .pipe(scp({
        "host": scpConf.host,
        "port": scpConf.port,
        "user": scpConf.username,
        "path": "/www/"
    }))
    .on('error', function (error) {
        console.log(err);
    });
```

## 然并卵

可能是在Window下, 所以一直报错`ssh: F: no address associated with name`
所以, SKIP

# Gulp-scp2

## NPM地址

<https://www.npmjs.com/package/gulp-scp2>

## 配置如下
```javascript
gulp.src('./build/index.html')
    .pipe(scp({
        "host": scpConf.host,
        "port": scpConf.port,
        "username": scpConf.username,
        "password": scpConf.password,
        "path": "/www/"
    }))
    .on('error', function (error) {
        console.log(err);
    });
```

## 然并卵

这个更过分, 连报错都没有, 就一直卡在那里...


---
> Arylo, 走在全栈工程师的路上, 正在学习设计和前端
> 现时加入`Lintel`的`PandoraBox Team`, 负责打游击, 俗称打杂
> tomail:arylo.open@gmail.com
