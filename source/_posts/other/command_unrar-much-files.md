title: 'Mac 下批量解压RAR'
date: 2016-03-27 22:35:03
tags:
	- Command
	- MAC
	- OSX
	- unrar
	- 批量
	- Arylo
categories: 经验
keywords:
	- Command
	- MAC
	- OSX
	- unrar
	- 批量
	- Arylo
---

# 0

之前下了不少漫画, 不过都是`.rar`文件, 而且`Keka`解压不了他们, 无奈之下, 使用了大杀器`unrar`, 然而unrar不支持批量解压...
好吧, 既然不支持, 我写一个脚本去循环处理他们总得行了吧?

# 1

脚本写好了, 可以解压多个RAR了, 但每次只能解压几个, 如果要解压这么多文件(60+), 无用功太多, 加上程序猿的<惰性>, 我还是不干了.

# 3

为什么是3呢?

其实解压不是问题, 问题是以后也遇上这个问题怎么办呢?

甘好我在伯乐在线看到[这篇文章](http://blog.jobbole.com/99063/), 安利一下, 用上了`find`的`exec`

最后这样写就可以批量来弄了.
```Shell
find . -type f -name "*.rar" -exec unrar x -p扶她奶茶 -u {} \;
```

## 3-Fail

如果遇上`no terminating ";" or "+"`, 那就重新看一下我行命令最后面的转移符吧~
