title: 搬家了
date: 2015-04-16 17:55:09
tags:
  - Arylo
  - GitHub
  - GitCafe
  - DNSPod
categories: Server
keywords:
  - Arylo
  - GitHub
  - GitCafe
  - DNSPod
  - Goddady
---

# 不再是孤魂野鬼了

一直想都想拥有属于自己的域名, 关于这个, Lintel大大可是纠结了好久, 但他想要的域名一直被人占据了...我这个名字比较冷门(也不没有Lintel大大有名), 所以域名什么的, 还是很容易拿到的

# 路途崎岖

## 中国用户不允许使用优惠码

其实这样域名我弄了好久了, 一到提交订单的时候就提示我
```
There was a problem processing your transaction. Please verify your payment information or use an alternate form of payment.
```
我试了一下不用支付宝付款, 用银联付款.
然而是不行的(；一_一)
将`China`换成`Hong Kong`之后, 反而成功了!! (恭喜狗爹获得手指一只!!!)

## DNSPod更新了

以前看其他人的教程, 都是可以选择线路的, 现在线路只有付款用户可以使用, 这也是正常的事, 免费什么的, 总有那么一天会被剥夺的.
好在群众智慧是强大! 只要将电信/联通/教育网都转到GitCafe那边去, 默认交给GitHub就行了
```
	@	A		电信		207.226.141.135
	@	A		联通		207.226.141.135
	@	A		教育网		207.226.141.135
	@	A		百度		207.226.141.135
	@	CNAME	默认		arylo.github.io.
```
