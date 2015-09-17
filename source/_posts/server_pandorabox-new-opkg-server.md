title: 新的Opkg镜像开始运作啦!
date: 2015-06-09 16:16:53
tags:
  - Opkg
  - ipk
  - Pandorabox
  - OpenWrt
categories: 服务器
keywords:
  - Pandorabox
  - Opkg
  - ipk
  - GFW
  - 渣渣
  - Arylo
  - Lintel
---

# 新Opkg镜像开始运作了

平常Pandorabox 的opkg 都是往[Openwrt官方源](http://downloads.openwrt.org/snapshots/trunk/ralink/packages/)走的, 速度慢先不说, 有时候还被共产主义了, 加上没有做Pandorabox 兼容, 导致很多用户(发烧友)反应, 不能用!!!

搭建这镜像不难, 就是共产主义太过伟大了, 动不动就要你备案啊, 备案啊, 还是备案啊...
我们可是热爱科学, 热爱自由的新一代接班人! 所以尝试了几种方法跳过了这个步骤 (＾－＾)V

# 此镜像非彼镜像

镜像下的ipk 都是Lintel 大大编译的, 所以并非与Openwrt下的ipk 同步, 所以如果是使用其他非Pandorabox 的固件, (可能)会出现不兼容问题, 所以在这里说一下

# 留种不留人

简简单单不多说话

## 镜像地址

[http://downloads.pandorabox.org.cn/pandorabox/ralink/packages/](http://downloads.pandorabox.org.cn/pandorabox/ralink/packages/)

## 更改opkg源

> 修改路由器上的`/etc/opkg.conf`, 添加这一句

```
src/gz 14.09_base http://downloads.pandorabox.org.cn/pandorabox/ralink/packages/base
```
