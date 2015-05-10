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
Data: 2015.05.10
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
