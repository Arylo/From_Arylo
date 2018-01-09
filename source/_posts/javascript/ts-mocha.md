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

# Update at 2018-01-09

之前用上了`ts-mocha`, 后来我看了一下代码, 其实就是一个`ts-node`的二次封装, 所以干脆就用回`ts-node`. 将`mocha.opts`里面的`--require ts-mocha`换成`--require ts-node/register`, 执行测试一下可以用.

## Generate Cover Reporter Fail

虽然测试正常运行, 但生成的覆盖报告却是空的, 可能是参数没有补齐. 好在`nyc`官方提供了[相关的文档][Nyc ts-node], 注意其中几点就行了:

1. 需要`source-map-support`

```bash
npm install --save-dev source-map-support
```

3. 补上重要的`nyc`参数

```json
{
  ...
  "extension": [
    ".ts", ".tsx"
  ],
  "all": true,
  "cache": true
  ...
}
```

再适当地用`include`和`exclude`, 覆盖报告就回来了.

[Other Mocha Opts]: https://github.com/sehrope/node-dogh/blob/master/test/mocha.opts
[Nyc ts-node]: https://istanbul.js.org/docs/tutorials/typescript/