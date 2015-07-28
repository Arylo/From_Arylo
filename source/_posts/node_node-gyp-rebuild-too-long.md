title: 'node-gyp rebuild时间过长'
date: 2015-07-28 02:12:00
tags:
  - nodejs
  - npm
  - nvm
  - osx
  - mac
categories: nodejs
keywords:
  - nodejs
  - npm
  - nvm
  - osx
  - mac
  - rebuild
  - brew
  - node-gyp
  - arylo
---

# F
最近从Windows转到OSX上面, 环境什么的都要重新配置

因为最近在做前端开发, 而且用上不少npm相关的东西, 所以也要搭建nodejs环境。例如`grunt`, `gulp`, `bower`, `nrm`, `nvm`..etc

# Q
不过呢, 在安装的`hexo-cli`的时候出现了很奇怪的问题, 就是在`node-gyp rebuild`消耗的时间过于长, 这个问题灰常特别, 因为在ubuntu上面是没有这个问题. `--verbose`一下, 发现它在不断的编译.

## Try0
在Google了一圈, 基本都没有什么解决方法. 在V2EX上还有人说是地址被墙了, 应该换成taobao的源, 那下载会快很多, 大哥, 我老早就`nrm use taobao`了, 有关系吗?

## Try1
有人说, `brew`安装的`node`是缺斤少两的, 所以才会有这种情况, 需要在官网下载源码, 覆盖它, 文件就解决了.
然而, 我就是为了这个问题, 把在官网下载的`node`活生生的删除了, 步骤见[这里](https://gist.github.com/TonyMtz/d75101d9bdf764c890ef), 再用`brew`安装的, 所以这个也不行


# A
关于这个问题, 我也没什么解决方法, 就是放在那里等, 让它编译, 编译完之后, 问题解决了...
估计是CPU性能不够强悍, 不爽这编译速度(毕竟用惯了公司的服务器- .-, 而且, 为什么没有加上`-j`这种参数!!
查看编译日志, 好像一直在编译最新的`node`, 有人能告诉我是什么问题吗?

# Version
```bash
 ~ $ npm -v
> 2.12.1
 ~ $ node -v
> v0.12.7
 ~ $ nvm --version
> 0.25.4
```

---
> Arylo, 走在全栈工程师的路上, 正在学习设计和前端
> 现时加入`Lintel`的`PandoraBox Team`, 负责打游击, 俗称打杂
> tomail:arylo.open@gmail.com