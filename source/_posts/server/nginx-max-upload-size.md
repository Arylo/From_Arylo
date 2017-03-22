title: "Gitlab, 文件过大导致上传失败"
date: 2015-06-28 13:16:27
tags:
  - gitlab
  - nginx
  - docker
categories: Server/Gitlab
keywords:
  - docker
  - gitlab
  - nginx
  - Pandorabox
  - M1
  - Arylo
  - Lintel
---
# 先说说前面的事

M1已经开始步入正轨, (貌似一直测试还没有发货), 不过硬件已经开源, 需要的玩家(或者厂商)可以免费使用, 我在这里打个广告, 留下传送门: <http://downloads.openwrt.org.cn/PandoraBox/PandoraBox-PBR-M1/HW/>

# L大的召唤之术

昨晚呢, 嗯, L大又找上我, 说他push不了, (就是自己搭的gitlab, 是服务器配置问题, 还扔了个链接我, 叫我跟着改.

嗯, 就是这个链接<http://stackoverflow.com/questions/7489813/github-push-error-rpc-failed-result-22-http-code-413> 后来还有它<http://blog.csdn.net/suirosu/article/details/40045983>

我瞧了一下, 主要问题接入受限制了, 不过问题来了! 我该改哪里?

我和大家普及一下, 咱这服务器, 不是所有服务都一股脑地全部塞进去的, 而是用**docker**, 一块一块地拼上去的, 单是**nginx**就有两个, 一个是根的nginx, 一个是gitlab 这个container 的nginx, 难道两个都要改?
好吧, 我改, 改改改! 先改根nginx, 不就是在conf下加上, `client_max_body_size 20M;`, 我重启了一下服务, L大立刻说, 行了!

行了?行了?后面不用改了吗?

# 关于后面

其实不是后面不用改, 而是后面的, 别人已经写好了, 最大为*20M*
```
NGINX_MAX_UPLOAD_SIZE: Maximum acceptable upload size. Defaults to 20m.
```

---

这次只是我的日常记录, 干了什么, 做了什么, 留下日志, 以免后面被人说我没干事...

话说 <http://www.pandorabox.org.cn/> 准备可以下载最新的pandorabox 固件, 现在和朋友在准备写一个关于提供文件列表json 的组件(也为了后面的插件下载)
