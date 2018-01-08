title: '好用的Node 库'
tags:
  - Javascript
  - Npm
  - Nodejs
  - Node
  - Angular
  - AngularJS
  - Grunt
  - Gulp
  - TypeScript
  - CoffeeScript
  - Express
  - Macha
  - Karma
  - Hexo
categories: Javascript
keywords:
  - Javascript
  - Npm
  - Nodejs
  - Node
  - Arylo
  - Angular
  - AngularJS
  - Grunt
  - Gulp
  - TypeScript
  - CoffeeScript
  - Express
  - Macha
  - Karma
  - Hexo
date: 2017-12-10 12:22:38
---

从13年接触angular开始，就不断接触摸索各种node库，感叹前端圈的变化之大。下面本人将用过的，收集来的库整理出来，望有缘人需要它们

# 博客类

- npm:hexo
  + npm:hexo-admin
    这个插件背后是一个美好的爱情故事
  + npm:hexo-deployer-git
    自从某个版本出问题之后, 我就用`Travis`帮我发布
  + npm:hexo-filter-cleanup
    咱就是用这个压缩混肴的

# 构建工具

## Grunt

`Grunt`已经算是古老的产物, `Gulp`出现后就一下子超越他, 不过某些旧项目还是需要了解它的.

- npm:grunt
  + npm:grunt-contrib-htmlmin
  + npm:grunt-contrib-stylus
  + npm:grunt-contrib-cssmin
  + npm:grunt-autoprefixer
  + npm:grunt-contrib-imagemin
  + npm:grunt-contrib-clean
  + npm:grunt-contrib-copy
  + npm:grunt-contrib-watch

## Gulp

- npm:gulp
- npm:gulp-cli
- npm:gulp-jade
  `jade`已经改名叫`pug`
- npm:gulp-pug
- npm:gulp-ejs
- npm:gulp-htmlmin
- npm:gulp-processhtml
- npm:gulp-typescript
- npm:gulp-coffee
- npm:gulp-coffeelint
- npm:gulp-ng-annotate
- npm:gulp-uglify
- npm:gulp-stylus
- npm:gulp-autoprefixer
- npm:gulp-csso
- npm:gulp-imagemin
- npm:gulp-cached
- npm:gulp-remember
- npm:gulp-clean
- npm:gulp-concat
- npm:gulp-exec
- npm:gulp-if
- npm:gulp-lintspaces
- npm:gulp-rename
- npm:gulp-replace
- npm:gulp-run-sequence
- npm:gulp-supervisor
- npm:gulp-tap
- npm:gulp-load-plugins
- npm:gulp-task-listing
- npm:gulp-karma
- npm:gulp-mocha

# 语言相关

## CoffeeScript

- npm:coffee-script
- npm:coffeelint

## TypeScript

- npm:typescript
- npm:ts-node
- npm:tsconfig-paths
  当用的`TS`的`paths`功能时, 就需要它了
- npm:tshint

# 基础加强集合

- npm:glob
- npm:fs-extra
- npm:rimraf
  平时用于`npm script`, 比系统提供的稳定
- npm:mkdirp
  `fs-extra`里面已经有这个功能了, 现在用于`npm script`
- npm:targz
  用来处理`.tar.gz`压缩包
- npm:config-yaml
- npm:yaml-config
  `config-yaml`和`yaml-config`的区别就是前者不需要根据环境变量, 就像平常`JSON.parse`一样, 后者就是多了一层环境变量的嵌套
- npm:once
- npm:bluebird
- path-exists
  因为`fs.exists`已经[deprecated](https://github.com/iojs/io.js/issues/103)

# 工具集

- npm:lodash
- npm:md5
- npm:md5-file
  可以自己用`md5`改写
- npm:rxjs
- npm:y-config
- npm:node-schedule
- npm:schedule-cache
  我用`node-schedule`弄了一个定时`Cache`库
- npm:validator
  + npm:class-validator
- npm:moment
- npm:moment-timezone
- npm:ms
  相关时间和毫秒互转
- npm:optional
  其实就是一个自带`trycatch`的`require`

# 运行环境

- npm:cross-env
- npm:nrm
- npm:nvm

# 服务器相关

- NestJS
  + npm:@nestjs/core
  + npm:@nestjs/common
  + npm:@nestjs/testing
    测试`Nest`时需要它
- npm:express
  + npm:express-session
- npm:multer
- npm:body-parser
- npm:cors
- npm:cookie-parser
- npm:socket.io
- npm:nodemailer
- npm:http-proxy-middleware

# 数据库相关

- npm:mongoose
- npm:lowdb

# 页面端相关

因为一直在angular圈打转，基本没用过vue和react，所以就没有它们的。

- npm:jquery
- npm:bootstrap
- npm:fullpage.js

## 图表

- npm:echarts
  百度的图表库
- npm:datavjs
  淘宝的图表库
- npm:d3

## 动画

- npm:animate.css
- npm:theaterjs
  很炫的输入动画库

## AngularJS

- npm:angular
  + npm:angular-animate
  + npm:angular-messages
  + npm:angular-route
  + npm:angular-translate
  + npm:angular-translate-loader-partial
  + npm:angular-file-upload

## Angular

- npm:ngx-echarts
  背后是百度的`echarts`
- npm:ng2-file-upload
- npm:ng-zorro-antd
  蚂蚁的`UI`库, 不解释

# 客户端相关

- npm:electron
  + npm:electron-builder
  + npm:electron-packager

# 命令行端相关

- npm:yargs
  可以用它解析命令行参数
- npm:inquirer
  写过`yo`的脚手架就知道这个提示是多好用
- npm:chalk
- npm:cliui
- npm:os-homedir
  获取用户目录位置
- npm:get-stdin

# 测试相关

- npm:karma
  `AnuglarJS`测试用的
  + npm:karma-coffee-preprocessor
  + npm:karma-ie-launcher
  + npm:karma-firefox-launcher
  + npm:karma-safari-launcher
  + npm:karma-chrome-launcher
  + npm:karma-phantomjs-launcher
  + npm:karma-jasmine
  + npm:karma-coverage
  + npm:karma-junit-reporter
  + npm:karma-story-reporter
- npm:mocha
  + npm:mochawesome
- npm:should
- npm:rewire
  用于改写库的私有变量, 相当好用
- npm:faker
  模拟数据用, 你懂的
- npm:nyc
- npm:istanbul
- npm:source-map-support
- npm:supertest
- npm:supertest-session
  因为`supertest`不支持保存session
- npm:phantomjs-prebuilt
- npm:coveralls
  会将测试报告上传到`coveralls.io`, 常用的写法是`cat ./coverage/lcov.info | coveralls`
- npm:standard
  统一处理`.js`格式问题
- npm:cheerio
  性能优秀, 可以用来做`HTML`爬虫解析

# 调试相关

- npm:debug
- npm:browser-sync
- npm:connect-livereload
  当年的F5解放组件, 但现在通过`socket`接收刷新信号来取代它取代了

# 运维相关

- npm:forever
- npm:pm2
  自从有了`pm2`之后, 就没`forever`的事了

# 日志相关

- npm:log4js
- npm:bunyan
- npm:morgan

# 文档生成

- npm:apidoc

---

> 下面是别人推荐或者自己收集起来的, 暂时没有尝试过

# 页面端相关

## Angular

- npm:ng2-admin
  + github:ngx-admin

# 测试相关

- npm:randexp
  根据`RegExp`规则生成随机字符串
- npm:jest
- npm:ava
- npm:tape
- npm:enzyme