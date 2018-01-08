title: "`mocha` 改成 `ts-mocha`"
tags:
  - Javascript
  - mocha
  - typescript
  - npm
  - nodejs
categories: Javascript
keywords:
  - Javascript
  - Arylo
  - mocha
  - typescript
  - npm
  - nodejs
date: 2018-01-08 13:37:43
---

# Get Start

原本的测试单元都是和源码用`tsc`编译到`dist`文件夹后, 再启动测试, 这样无疑浪费不少的时间, 无意间找到这个框架.

# Its Example

官方的写法, 就是像`mocha`那样, 直接运行`ts-mocha`就可以了, 但我就直接报错, 提示我`[ERROR] tsconfig_1.loadSync is not a function`.

`Google`了一下, 原因不明. 貌似没人遇上这个情况, 是我弄错了吗? 那行, 我去瞧瞧别人的例子.

# Other Example

别人也是直接用`ts-mocha`, 但有点不同, 在[`mocha.opts`][Other Mocha Opts]里面有一句`--require ts-mocha`,

```
--require ts-mocha
--require should
```

这个在文档中没有任何的说明, 难道用了就有神效?

# And Me

在`mocha.opts`里面补上`--require ts-mocha`后, 其余照旧(除了提出`tsc`这步), 测试成功运行. 可能原本官方就提供这个方法, 后来在`README`里面删除了. 不过现在可以了. 希望以后不要再踩这个坑吧.


[Other Mocha Opts]: https://github.com/sehrope/node-dogh/blob/master/test/mocha.opts