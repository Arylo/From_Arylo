title: '[Gulp游记]gulp-tap'
date: 2016-06-28 01:43:19
tags:
  - Javascript
  - Gulp
  - Gulp游记
  - Arylo
  - 学习笔记
categories: Javascript
keywords:
  - Javascript
  - Gulp
  - Gulp游记
  - Arylo
  - 学习笔记
---

# gulp-tap

这个我不知道应该怎样说, 感觉平常的用法也不是什么正确用法...

## 用途一 debug

可以知道正在使用哪个文件, 平常最常用就是这个了.
因为不清楚有什么`file`通过了`gulp.src`, 用这个方法就一下子显示出来了

```js
gulp.src("**")
    .pipe(gulpTap(function (file) {
        console.log(file.path);
    }));
```

## 用途二 内容再分组

正在做的那个项目, 有很多的插件, 但格式都是统一的, 所以这个插件就可以更新一个`cwd`, 完成再分组.
一般我们都知道, 当进入通过`gulp.src`之后, `cwd`就不能再修改了, 但用了这个方法之后, 可以分别独立一个`cwd`, 不知这样好不好, 反正我觉得效果还行.

```js
/**
 *
 * - src/plugins
 *   - plugin-0
 *   - plugin-1
 *   - plugin-2
 *   - …
 */
gulp.src("src/plugins/*")
    .pipe(gulpTap(function(file) {
        gulp.src(file.path + '/css/*')
            .pipe(…)
    }));
```
