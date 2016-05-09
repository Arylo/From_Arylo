title: Automatically answer defaults when update config file
tags:
  - Arylo
  - PandoraBox
  - OpenWrt
categories: Server
keywords:
  - Arylo
  - PandoraBox
  - OpenWrt
date: 2016-05-06 18:25:18
---

# 0

最近在弄持续构建的东西, 其中一项就是我们`PadroaBox`的编译. 但随着开发的推进, Config 文件一直在变, 导致各种警告, 例如
```
WARNING: No feed for package 'python-readline' found, maybe it's already part of the standard packages?
WARNING: No feed for package 'python-mini' found, maybe it's already part of the standard packages?
```

或者最常见的
```
WARNING: your configuration is out of sync. Please run make menuconfig, oldconfig or defconfig!
```

# 1

是的, 对这个挺头疼的, 因为是自动运行的, 不能想平常那样进入`make menuconfig`后`Ctrl+C`出来, G了一下, 更新Config 文件有三种方法:

- `make config`
- `make menuconfig`
- `make oldconfig`

## `make config`

这个其实是`make menuconfig`的文字版, 没什么区别

## `make menuconfig`

这个就不说了, 常用常见

## `make oldconfig`

这个没接触过, 貌似和我想要的功能差不多, 但需要不断的回车

回车?

# 2

需要回车的话, 可以用`yes`命令, 

不过注意的是, 不能这样
```
yes | make oldconfig
```

这样不断的空输入, 所以不行, 
```
yes y| make oldconfig
yes n| make oldconfig
```

Y和N 都不是好选择, 因为New的item不知道是不配置所需要, 然后我这样, 重复输入一个空字符串, 这样就会不断附带一个回车, 这样符合需要了
```
yes ""| make oldconfig
```

# 4

**4?**

---
> Arylo, 走在半栈工程师的路上, 正在学习设计和前端
> 现时加入`Lintel`的`PandoraBox Team`, 负责打游击, 俗称打杂, 5黑里的辅助
> tomail:arylo.open@gmail.com
