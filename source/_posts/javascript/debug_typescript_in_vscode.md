title: '在VS Code 上调试TypeScript'
date: 2017-06-07 06:58:26
tags:
  - Nodejs
  - TypeScript
  - CoffeeScript
  - VS Code
  - Debug
  - Gulp
  - Breakpoint Ignored Because Generated Code Not Found
  - 由于未找到生成的代码，已忽略断点(是否是源映射问题?)
keywords:
  - Nodejs
  - TypeScript
  - CoffeeScript
  - VS Code
  - Debug
  - Gulp
  - Breakpoint Ignored Because Generated Code Not Found
  - 由于未找到生成的代码，已忽略断点(是否是源映射问题?)
---

# 0 Introduction

上一篇([链接][PREV])已经说到, 最近用上了Typescript, 也在不同的项目中加上它. 仔细想想, TS 真的特别适合用在Nodejs 的开发上, 所以就开始了Nodejs 项目的改造.

[PREV]: /2017/06/05/javascript/js_auto_complete/

# 1 Now

现在TypeScript 的部署, 基本上就是将`src/`目录的`.ts`文件编译到`build/`上, 再运行`build/`上的文件.

感觉上这很累赘, 在开发环境上还好说, 但在生成环境上, 既要保证有相应的写入权限, 还要白白浪费位置(如果说编译完后在删除`src/`目录, 你当我没说上面的话). 加上之前是写`CoffeeScript`时有神器`require('coffee-script/register');`, 将`.coffee`文件编译成`.js`放到内存里面运行. 为了这个事情, 我G 了好几下, 发现TS 也有这种神器[`ts-node`][ts-node], 用法也差不多.

[ts-node]: https://www.npmjs.com/package/ts-node

# 2 Found

就在我为找到`ts-node`而高兴的时候, 发现一个问题, 就是断点. 在VS Code 上, 断点JS 文件很简单的事, 然而断点TS 文件, 却提示我`由于未找到生成的代码，已忽略断点(是否是源映射问题?)`. 这个容易, 直接复制G 一下就知道解决办法, 肯定也有人遇上这问题.

然而, 并没有.

喵? 是大家不需要这功能还是只是我的设置有问题? 不对不对, 肯定有人也和我一样的, 难道是新版本有了中文, 以前是英文, 所以大家搜的是英文? 嗯, 那试试看.

搜了一下, 找到这一报错信息的英文原版`Breakpoint Ignored Because Generated Code Not Found`, 突然觉得翻译这句话的人, 友好度MAX, 直接就提示咱们天朝人是**源映射问题**!!

很多歪果仁遇上这个问题, 不是调试TS 时遇上的, 而是做ES6 -> ES5 时遇上的, 嗯, 方法通用就好了.

# 3 Resolve

下面是解决时间

## Before

先看看目录结构
```
/
  |- build/
  |  |- index.js
  |  |- ...
  |
  |- src/
  |  |- index.ts
  |  |- ...
  |
  |- index.js
  |- package.json
```

首先是TS 的编译, 这里我用`Gulp`代替
```Javascript
// gulpfile.js
// ...
gulp.task('build', [..., 'build:ts']);
gulp.task('build:ts', () => {
    gulp.src('src/**/*.ts')
        .pipe($.sourcemaps.init())
        .pipe($.typescript())
        .pipe($.sourcemaps.write('.', {
            sourceRoot: (file) => {
                return `${file.cwd}/src`;
            }
        }))
        .pipe(gulp.dest('build/'));
});
// ...
```

注意了, 这里的`sourceRoot`一定要设置, 否则定位不回源文件的.

添加一个`VS Code`的Task 来触发它.
```javascript
// .vscode/task.json
{
    "version": "0.1.0",
    "command": "gulp",
    "isShellCommand": true,
    "args": [
        "--no-color"
    ],
    "tasks": [
        {
            "taskName": "build",
            "args": [],
            "isBuildCommand": true,
            "problemMatcher": [
                "$tsc"
            ]
        }
    ]
}
```

然后就是关键的`launch.json`了
```javascript
// .vscode/task.json
{
    "type": "node",
    "request": "launch",
    "name": "启动程序",
    "program": "${workspaceRoot}/index.js",
    "env": {
        "NODE_ENV": "development"
    },
    "preLaunchTask": "build",
    "sourceMaps": true,
    "outFiles": [
        "${workspaceRoot}/build/**/*.js"
    ]
}
```

这里就没什么好解释了, `preLaunchTask`是对应`tasks.json`的`taskName`, "sourceMaps"是使用`.map`文件, "outFiles"是输出文件的位置, 就是上面的Gulp 的输出位置.

不过旧版的VS Code 是支持`outDir`的, 现在新版已经遗弃了它, 用了`outFiles`去代替它.

## After

好了, 现在的目录结构是这样子
```
/
  |- .vscode/
  |  |- launch.json
  |  |- tasks.json
  |
  |- build/
  |  |- index.js
  |  |- index.js.map
  |  |- ...
  |
  |- src/
  |  |- index.ts
  |  |- ...
  |
  |- index.js
  |- gulpfile.js
  |- package.json
```

现在就可以尽情在`.ts`文件中使用断点了.

# 4 End

> Q: 为什么要Gulp 来编译TS?
>
> A: 其实在编译机不固定的时候, 不是每台的环境都含有`tsc`命令, 但`node`命令是必定存在的, 所以直接用了Gulp. 而且在部署的时候, 少装一个软件, 不是更加好吗?
