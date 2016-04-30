title: 'API 测试'
tags:
  - Javascript
  - REST
  - Testing
  - Unit
  - API
  - Nodejs
  - Gulp
categories: Luci
keywords:
  - Javascript
  - Arylo
  - REST
  - Testing
  - Unit
  - API
  - Nodejs
  - Gulp
date: 2016-01-06 00:29:24
---

# Front

最近`Lafite Theme`往`1.0.0`走去, 测试变得非常频繁, 更新一次, 基本都要重新测试, 虽然之前写了不少测试单元(用`Phantom`, 但因为各种各样的原因, 大部分的Unit都需要修改, 甚至完全失效. 关于这个, Kerwin基本崩溃状态, 之前不少Unit是他写的, 现在不行了, 重构的也是他...

## And

还是那句, 触一发动全身. 接口这里的测试很多问题, 最大的问题是, 用原生Nodejs写的, 我自己做的轮子, 现在过了段时间, 反而不知道轮子怎样, 也促使我这次重构TestUnit之路.	

# Content

## Thinking

鉴于之前是我自己做的轮子, 所以这次直接寻找成熟的插件来做这个事情. 在Theme 那边, Kerwin 用的是Karma+Jasmine(虽然是我安利的..., 经常漫长的狗哥(>30min), 最后选择了Mocha+Should+Supertest.

## Preparation

- [Mocha][mocha]
- [Should][should]
- [Supertest][supertest]

### Mocha

懒得介绍

### Should

比较像自然语法, 所以选他

### Mocha

比较简单, 所以挑它

## Script

在使用之前, 先磨好工具, gulp+coffee, 因为对CoffeeScript 的好感, 所以这里也使用它

首先写好测试运行的Gulp Task.
```CoffeeScript
gulp.task('test', ['test:mocha']);

gulp.task('test:mocha', function () {
	var testFilename = '*';

	if (args.u && args.u.length > 0) {
		testFilename = args.u;
	}

	return gulp.src('test/' + testFilename + '.spec.{js,coffee}', {
			read : false
		})
		.pipe($.if('*.coffee', $.coffee()))
		.pipe($.mocha({
			reporter : 'nyan',
			timeout  : 15000
		}))
});
```

`gulp test`一下, 就可以运行测试了, 单一测试也是可以的, eg.`gulp test -u wan`

然后可以开始动工了

## Unit

> Talk is cheap, show my code.


```CoffeeScript
supertest = require 'supertest'
should    = require 'should'

server    = supertest.agent "http://#{RouterUrl}/cgi-bin/luci"

describe 'Wan Test', () ->

	it 'Status', (done) ->
		server.get('/api/wan/status')
			.expect(200)
			.expect((res) ->
				# Expect Code
				# ...
			)
			.end(done)

	# Other Test
	# ...
		
```

# Last

我只是简单记录一下我干了什么而已...

---
> Arylo, 走在半栈工程师的路上, 正在学习设计和前端
> 现时加入`Lintel`的`PandoraBox Team`, 负责打游击, 俗称打杂, 5黑里的辅助
> tomail:arylo.open@gmail.com

[mocha]: http://mochajs.org
[should]: https://www.npmjs.com/package/should
[supertest]: https://www.npmjs.com/package/supertest