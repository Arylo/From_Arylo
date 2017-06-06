title: '让旧JS 文件野支持TS 智能提示'
date: 2017-06-05 14:17:26
tags:
  - Arylo
  - Typescript
  - Smart Complete
  - 智能提示
  - jQuery
  - Newifi
  - VS Code
keywords:
  - Arylo
  - Typescript
  - Smart Complete
  - 智能提示
  - jQuery
  - Newifi
  - VS Code
---

# 0

最近用上`Typescript`, 顺势用上了VS Code. 鉴于TS的智能提示实在太好用了, 所以就开始思考怎样将这个功能引入到日常的维护及开发中.

# 1

为什么要先拿Newifi 开刀呢? 因为最近在弄Newifi OS4 的兼容和适配.

# 2

然而试验并不是很成功. 一开始考虑是按照常规js 转ts 的方式, 但并不可行, 一个是因为是试验, 一个是因为js 的混肴压缩是写在Makefile 文件, 在编译机不能为了这个去专门去加一个脚本作转换.

后来想想, 什么都不改不就好了嘛, 就得出现在的方案. 不过百度(X歌)一番之后, 发现做的人不多, 其实也是很正常的事. 现在的用上ts 的工程基本都是`源码 => 编译构建(gulp/webpack) => 运行`, 但我们是`源码 => 打包(makefile)`, 加之makefile 是由编译Newifi OS 时触发的, 更加难以控制.

# 3

现在Newifi 使用的是旧jQuery 的继承形式, 用`Class.extend({...})`

```javascript
// 声明
// api.js
Class.extend({
  setWanProto: function (proto) {
    // proto 可以使用的是'pppoe', 'dhcp', 'static'
    ...
  },
  ...
});
// 使用
// newifi.js
newifi.api.getWanProto('pppoe');
```

根据[官方样例][1], 我们将文件写成:

```typescript
// api.d.ts
declare namespace newifi {
  export interface api {
    getWanProto(proto: string): Promise
  };
};
```

但在`newifi.js`里输入`newifi.`后, 没有提示api. 嗯? 这是怎么回事呢? 啊, 可能我少了那`///`, 好吧, 我补回来.

```typescript
/// <reference types="./api.d.ts" />
```

这样总得可以了吧, 好吧试一下, `newifi.`, 嗯, 非常好, 有提示`api`, 好, 回车.

擦? 文件头部竟然**自动出现**`var api = require('./api')`, 哥, 你还好吗? 我这个项目都是es5, 你require 干什么呢!

难道?

其实VS Code是不支持的?

[1]: http://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

# 4

非也非也, 一脸茫然之后, 我将我自己的模块添加了`.d.ts`([文件地址][2]), 然后在js 文件下, 可以正常弹出提示, 难道之前哪里错了?

可能是真的错了, 写JS 久了就把原本的知识扔掉了, 刚好翻了`Kotlin`的文档, 看回interface, 发觉, 我为什么要用interface 呢? 这不是多余操作吗? 直接上namespace 不久好了嘛! 嗯嗯, 的确, 我将interface 改成namespace 后就可以正常提示了, 估计一开始就写js 的人(泛指**大部分**培训班出来的), 完全不明这个什么和什么. interface 在`OO`中太普遍了, 但在JS中却是稀有物种.

[2]: https://github.com/Arylo/y-config/blob/29827b8a23feac26d69cf8239b6c186132517d31/index.d.ts

# 5 完整写法

整合namespace, 和使用type aliase 后:

```typescript
// api.js
Class.extend({
  setWanProto: function (proto) {
    // proto 可以使用的是'pppoe', 'dhcp', 'static'
    ...
  },
  ...
});
// api.d.ts
type ProtoValue = 'pppoe' | 'dhcp' | 'static';

declare namespace newifi.api {
  function getWanProto(proto: ProtoValue): Promise;
  ...
};
```