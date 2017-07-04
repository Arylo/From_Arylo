title: '流程化运行Typescript 项目'
date: 2017-07-04 11:00:00
tags:
  - Nodejs
  - TypeScript
  - Gulp
keywords:
  - Nodejs
  - TypeScript
  - Gulp
  - ts-node
---

# 0 Introduction

之前([链接][PREV])说到, Nodejs 项目中, 开始用上Typescript. 在开发上非常流畅, 甚至在怀疑之前自己为什么不用它.

[PREV]: /2017/06/07/javascript/debug_typescript_in_vscode/

可这东西交到运维手上前, 发生了另外的事情.

# 1 ts-node 坑

项目的开始, 就用上了`ts-node`, 当时用得挺好的, 可惜在开发调试上强差人意, 所以在开发环境下, 并没有使用, 而是经过`gulp`转换一下, 由于历时比较久, 所以到放在生产环境上出现各种问题, 基于项目急需上线的关系, 觉得暂时也经过`gulp`转一下就上线.

# 2 Now

首先要考虑的是构建`Docker Image`的问题, 因为要构建的原因, 所以流程和命令, 能简化得简化, 这样不论运维, 还是新进的开发, 也能快速使用.

整理一下流程, 就是`Gulp  ===>  Run`. 但由于文件已经写好了, `NODE_ENV=production`就使用`ts-node`. 必须在不影响源码的情况下解决这个问题, 最简单的是在`node .`前面加上`NODE_ENV=development`, 在跨平台下, window的同事是用不上这段命令的, 好在, 万能google 告诉我们, 用`cross-env`就行了.

## 安装 cross-env

```bash
npm install -D cross-env
```

## 在package.json 追加命令

```json
"scripts": {
    "prestart": "./node_modules/.bin/gulp",
    "start": "cross-env NODE_ENV=development node ."
}
```

一开始也奇怪, 一般来说, `cross-env`并非全局变量, 应该写成`./node_modules/.../cross-env`. 但按照这个情况, 那经过`--save-dev`or`-D`安装的node module, 在npm script里是直接在全局中, 那么将`prestart`改为`"prestart": "gulp"`, 是否也能达成相同的效果呢?

答案是可行的.

# 3 And

经过这次折腾, 留意到`-D`有着原本不知道的能力, 那前面的项目的测试命令, 是否应该都改为这个形式呢, 这个要看项目时间吧.

毕竟.

程序猿都是`懒惰`的.