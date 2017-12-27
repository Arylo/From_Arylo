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
  - Typescript
  - Coffeescript
  - Express
  - Macha
  - Karma
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
  - Typescript
  - Coffeescript
  - Express
  - Macha
  - Karma
date: 2017-12-10 12:22:38
---

从13年接触angular开始，就不断接触摸索各种node库，感叹前端圈的变化之大。下面我将我用过的，收集来的库整理出来，望有缘人需要它们

# 博客类

- hexo
  + hexo-admin
    这个插件背后是一个美好的爱情故事
  + hexo-deployer-git
    自从某个版本出问题之后, 我就用`Tracis`帮我发布
  + hexo-filter-cleanup
    咱就是用这样压缩混肴的

# 构建工具

## Grunt

`Grunt`已经算是古老的产物, `Gulp`出现后就一下子超越他, 不过某些旧项目还是需要了解它的.

- grunt
  + grunt-contrib-htmlmin
  + grunt-contrib-stylus
  + grunt-contrib-cssmin
  + grunt-autoprefixer
  + grunt-contrib-imagemin
  + grunt-contrib-clean
  + grunt-contrib-copy
  + grunt-contrib-watch

## Gulp

- gulp
- gulp-cli
- gulp-jade
  `jade`已经改名叫`pug`
- gulp-pug
- gulp-ejs
- gulp-htmlmin
- gulp-processhtml
- gulp-typescript
- gulp-coffee
- gulp-coffeelint
- gulp-ng-annotate
- gulp-uglify
- gulp-stylus
- gulp-autoprefixer
- gulp-csso
- gulp-imagemin
- gulp-cached
- gulp-remember
- gulp-clean
- gulp-concat
- gulp-exec
- gulp-if
- gulp-lintspaces
- gulp-rename
- gulp-replace
- gulp-run-sequence
- gulp-supervisor
- gulp-tap
- gulp-load-plugins
- gulp-task-listing
- gulp-karma
- gulp-mocha

# 数据库相关

- mongoose
- lowdb

# 测试相关

- karma
  `AnuglarJS`测试用的
  + karma-coffee-preprocessor
  + karma-ie-launcher
  + karma-firefox-launcher
  + karma-safari-launcher
  + karma-chrome-launcher
  + karma-phantomjs-launcher
  + karma-jasmine
  + karma-coverage
  + karma-junit-reporter
  + karma-story-reporter
- macha
  + mochawesome
- should
- faker
  模拟数据用, 你懂的
- nyc
- istanbul
- source-map-support
- supertest
- supertest-session
  因为`supertest`不支持保存session
- phantomjs-prebuilt

# `Coffeescript`相关

- coffee-script
- coffeelint

# `Typescript`相关

- typescript
- ts-node
- tsconfig-paths
- tshint

# 工具集

- glob
- lodash
- md5
- md5-file
  可以自己用`md5`改写
- rxjs
- y-config
- schedule-cache
- validator
  + class-validator
- bluebird
- config-yaml
- yaml-config
  `config-yaml`和`yaml-config`的区别就是前者不需要根据环境变量, 就像平常`JSON.parse`一样, 后者就是多了一层环境变量的嵌套
- moment
- moment-timezone

# 基础加强集合

- fs-extra

# 运行环境

- cross-env
- yargs
  弄命令行工具时, 可以用它解析参数

# 服务器相关

- NestJS
  + @nestjs/core
  + @nestjs/common
  + @nestjs/testing
    测试`Nest`时需要它
- express
  + express-session
- multer
- body-parser
- cors
- cookie-parser

# 页面端相关

因为一直在angular圈打转，基本没用过vue和react，所以就没有它们的。

## AngularJS

- angular
  + angular-animate
  + angular-messages
  + angular-route
  + angular-translate
  + angular-translate-loader-partial
  + angular-file-upload

## Angular

- ngx-echarts
  背后是百度的`echarts`
- ng2-file-upload
- ng-zorro-antd
  蚂蚁的`UI`库, 不解释

# 客户端相关

- electron

# 调试相关

- debug
- browser-sync
- connect-livereload

# 日志相关

- log4js
- bunyan