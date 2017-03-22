title: '[Gulp游记]Gulp 学习笔记'
tags:
  - Javascript
  - Gulp
  - Gulp游记
  - 学习笔记
categories: Javascript
keywords:
  - Javascript
  - Gulp
  - Gulp游记
  - Grunt
  - 学习笔记
  - Arylo
date: 2015-08-30 01:46:55
---

# 1

我只是想记下关于我所学习的Gulp, 以防我某天失忆了

# 2

## 2.1

记下我平时用的Gulp 模块, 顺便做一个推荐

### 预处理
+ `gulp-processhtml`
+ `gulp-coffee`
+ `gulp-ng-annotate`
> 只要是使用`Angular`就推荐使用
+ `gulp-stylus`
+ `gulp-autoprefixer`
> 为CSS文件加前缀

### 调试
+ `browser-sync`
+ `connect-livereload`
+ `http-proxy-middleware`
+ `gulp-watch`

### 测试
+ `gulp-jshint`
+ `karma`
+ `gulp-karma`
> 然并卵, 其实只需使用`karma`就行了
+ `karma-jasmine`
+ `jasmine-core`
+ `karma-coffee-preprocessor`
+ `karma-coverage`
> 下面这些是启动器
+ `karma-chrome-launcher`
+ `karma-firefox-launcher`
+ `karma-ie-launcher`
+ `karma-safari-launcher`

### 压缩
+ `gulp-htmlmin`
> HTML 压缩
+ `gulp-uglify`
> JS 压缩
+ `gulp-cssmin`
+ `gulp-minify-css`
+ `gulp-csso`
> 很多人说`csso`更好, 我没有对比过, 不评论
+ `gulp-imagemin`

### 发布
+ `gulp-scp`
+ `gulp-scp2`
> 不知道这两个哪个好, [反正我用不了][ERROR_SCP]
+ `gulp-ftp`
+ `gulp-sftp`
+ `git-rev`
+ `git-rev-sync`
> 获取Git版本用
+ `gulp-concat`
> 减少Get连接数, 你懂的

### 流程控制
+ `gulp-if`
+ `merge-stream`
> 使Task 有唯一的出口用	
+ `streamqueue`
> 整合相同的流程

### 其他
+ `gulp-clean`
+ `gulp-cache`
+ `gulp-notify`
+ `gulp-rename`
+ `gulp-replace`
+ `gulp-tap` [Link](/2016/06/28/javascript/gulp-tap/)
> 我用于识别文件内容, 不知道其他人怎样用
+ `gulp-load-plugins`
> 自动加载Gulp模块
+ `gulp-task-listing`
> 获取全部Gulp Task
+ `moment`
> 一个时间显示模块, 很值得推荐
+ `yargs`
> 对命令行使用者很不错

[ERROR_SCP]: arylo.me/2015/07/08/js_npm-grunt-gulp-scp/
