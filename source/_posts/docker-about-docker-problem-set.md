title: '多灾多难的Docker问题杂锦'
date: 2015-05-10 14:27:33
tags:
  - Pandorabox
  - Docker
  - Arylo
categories: Docker
keywords:
  - PandoraBox
  - Docker
  - Arylo
  - CreateSnapDevice
  - DeviceMapper
---

# 声明
## 最后更新日期
```
Data: 2015.06.08
```

## 遇上问题的版本号
### CentOS 版本
> System Version: CentOS 7
> Docker Version: 1.5.0

### Ubuntu 版本
> System Version: Ubuntu 14.10
> Docker Version: 1.6.1

# 杂锦

## Docker 自动启动
```
# CentOS
systemctl enable docker
# Ubuntu
service docker enabled
```

## DeviceMapper 修复
错误:
```
Error response from daemon: Error running DeviceCreate (createSnapDevice) dm_task_run failed
```

解法:
```
# CentOS
systemctl stop docker

thin_check /var/lib/docker/devicemapper/devicemapper/metadata
# if no error
thin_check –clear-needs-check-flag /var/lib/docker/devicemapper/devicemapper/metadata

systemctl start docker
```
但如有用Error呢? 先去修复!
```
# CentOS
thin_dump -r /var/lib/docker/devicemapper/devicemapper/metadata -o /tmp/metadata.xml
thin_restore -i /tmp/metadata.xml -o /var/lib/docker/devicemapper/devicemapper/metadata
```
网上基本都是说, 如果没有错误就`thin_check –clear-needs-check-flag`, 但却一句不提有错误的话该怎样.

## 缺失thin_check
错误:
```
thin_check: command not found
```

解法:
```
# CentOS
yum install lvm2
```

## Pull 失败
错误:
```
error downloading dependent layers
```

解法:
```
Pull 其他Image, 完成后再Pull回来
```

---
```javascript
/**************************************************
 * 2015-06-08 更新分隔
 **************************************************/
```
---


## 阿里云下 docker 启动失败
错误:
```
FATA[0000] Get http:///var/run/docker.sock/v1.18/containers/json: dial unix /var/run/docker.sock: no such file or directory. Are you trying to connect to a TLS-enabled daemon without TLS?
```

起因:
```
因为ubuntu放在阿里云上面, 而阿里云把所以内网IP都占用了, 所以要搞一下配置文件
```

解法:
```
arylo@PandoraBox:~$ sudo docker -d
# INFO[0000] +job init_networkdriver()
# INFO[0000] +job serveapi(unix:///var/run/docker.sock)
# INFO[0000] Listening for HTTP on unix (/var/run/docker.sock)
# Could not find a free IP address range for interface 'docker0'.
#  Please configure its address manually and run 'docker -b docker0'
# INFO[0000] -job init_networkdriver() = ERR (1)
# FATA[0000] Shutting down daemon due to errors: Could not find a free IP address range for interface 'docker0'.
#  Please configure its address manually and run 'docker -b docker0'

sudo vi /etc/network/interfaces
# "up route add -net 172.16.0.0 netmask 255.240.0.0 gw 10.170.191.247 dev eth0"
# 将这一句注释掉

arylo@PandoraBox:~$ sudo /etc/init.d/networking restart
# * Running /etc/init.d/networking restart is deprecated because it may not enable again some interfaces
# * Reconfiguring network interfaces...
# ssh start/running, process 3547
# ssh stop/waiting
# ssh start/running, process 3598

arylo@PandoraBox:~$ sudo service docker restart
# docker stop/waiting
# docker start/running, process 3884
```

解法参照:
[http://www.cnblogs.com/MicroTeam/p/see-docker-run-in-debian-with-aliyun-ecs.html](http://www.cnblogs.com/MicroTeam/p/see-docker-run-in-debian-with-aliyun-ecs.html)
虽然这篇的系统是Debian, 但还是感谢作者
