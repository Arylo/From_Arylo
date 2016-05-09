title: '服务器又被黑了!'
date: 2015-04-27 06:36:16
tags:
  - 被黑了
  - 服务器日志
categories: Server/Log
keywords:
  - Pandorabox
  - Hacked
  - GFW
  - 渣渣
  - Arylo
  - Lintel
---

# 前言

服务器又被黑了...

## 上回回顾

上次服务器被黑是14日前, 详情点击->[服务器被黑了!](http://arylo.me/2015/04/14/server_org-hacked/)<-

# 忏悔文

> 是的, 起因一定是我, 不用解释了...

IP被封了, 原因是垃圾邮件源...
因为IP被封, 加上没用密码, 只能召唤Lintel来修复...
L进去一看, 发现又是`git`和`test`这两个用户被登录过...而且还得到了管理员权限...
关于这一点, 我俩都不太明白, 两个`nologin`的用户, 竟然可以获得`bash`的权限, 真不太明白.
之后的事就是L去重置, 我去做IP解封...
弄得差不多了, 已经4点多了...(后面还没有睡得觉..唉)

## 下个小结论

- 我俩觉得, 服务器这次好在没什么贵重数据, 否则这个事情可能会导致不可磨灭的效果...加上我俩毕竟都是自学的人, 关于这个系统配置方面没有系统地学习过, 估计报个班什么的学一学比较实际一点.
- 下一次服务器架构要咱们商量一下再执行
- 拒绝弱密码!!
- 因为GFW的存在, 服务器运营商的邮件没有及时地发到L的手中, 所以没有留意警告`email说有大量的邮件发送`, L说以后要抄送一份给我(先听着)
- L太忙了, 不止GFW的影响, 工作忙不过来, 所以连这警告也被略过了...

# 马后炮

- 系统重置了, 没什么贵重的数据在, 所以商量了一下, 决定重置服务器.
- 换系统了, ubuntu 安全性应该不差, 但还是有心理阴影.
- 开了seliunx, 情况应该好一点了吧?
- 上docker, 这个是潮流趋势, 我尝试一下, 应该效果不错? 如果可以的话, 我会补上结构.
- 不再自带邮箱服务, 以免继续被hack.
- SSH端口要改为其他

## 20150428更新

这两天都在关注docker的事, 不过最近在处理搬办公室的事, 加上在做新界面, 时间一压再压, 希望能在五一的时候开始试启用吧!

PS.这回L听到我用docker之后, 又要我一个人把服务器搭好...好吧...