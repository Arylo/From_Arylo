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

从13年接触angular开始，就不断接触摸索各种node库，感叹前端圈的变化之大。下面我将我用过的，收集来的库整理出来，望有缘人需要它们

# 博客类

- npm:hexo
  + npm:hexo-admin
    这个插件背后是一个美好的爱情故事
  + npm:hexo-deployer-git
    自从某个版本出问题之后, 我就用`Tracis`帮我发布
  + npm:hexo-filter-cleanup
    咱就是用这样压缩混肴的

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

# 数据库相关

- npm:mongoose
- npm:lowdb

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
- npm:macha
  + npm:mochawesome
- npm:should
- npm:faker
  模拟数据用, 你懂的
- npm:nyc
- npm:istanbul
- npm:source-map-support
- npm:supertest
- npm:supertest-session
  因为`supertest`不支持保存session
- npm:phantomjs-prebuilt

# 语言相关

## `CoffeeScript`

- npm:coffee-script
- npm:coffeelint

## `TypeScript`

- npm:typescript
- npm:ts-node
- npm:tsconfig-paths
- npm:tshint

# 工具集

- npm:glob
- npm:lodash
- npm:md5
- npm:md5-file
  可以自己用`md5`改写
- npm:rxjs
- npm:y-config
- npm:schedule-cache
- npm:validator
  + npm:class-validator
- npm:bluebird
- npm:config-yaml
- npm:yaml-config
  `config-yaml`和`yaml-config`的区别就是前者不需要根据环境变量, 就像平常`JSON.parse`一样, 后者就是多了一层环境变量的嵌套
- npm:moment
- npm:moment-timezone

# 基础加强集合

- npm:fs-extra

# 运行环境

- npm:cross-env
- npm:yargs
  弄命令行工具时, 可以用它解析参数
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

# 页面端相关

因为一直在angular圈打转，基本没用过vue和react，所以就没有它们的。

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

# 调试相关

- npm:debug
- npm:browser-sync
- npm:connect-livereload

# 日志相关

- npm:log4js
- npm:bunyan