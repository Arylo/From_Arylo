title: 修改Luci默认主题
date: 2014-12-08 12:12:12
tags: [Luci, openwrt]
---

## 修改默认主题 \(样例Theme 为 Lafite\)

### 编辑contrib/package/luci/Makefile文件
将这行代码
```
$(eval $(call theme,bootstrap,Bootstrap Theme (Original)))
```
修改为:
```
$(eval $(call theme,lafite,Lafite Theme (Original)))
```

然后找到下面代码
```
$(eval $(call collection,, \
	Standard OpenWrt set including full admin with ppp support and the default OpenWrt theme, \
	+uhttpd+uhttpd-mod-ubus +luci-mod-admin-full +luci-theme-bootstrap+luci-app-firewall \
	+luci-proto-ppp +libiwinfo-lua +luci-lib-nixio))
```
修改为(就是将`+luci-theme-bootstrap`改为`+luci-theme-lafite`)
```
$(eval $(call collection,, \
	Standard OpenWrt set including full admin with ppp support and the default OpenWrt theme, \
	+uhttpd+uhttpd-mod-ubus +luci-mod-admin-full +luci-theme-lafite+luci-app-firewall \
	+luci-proto-ppp +libiwinfo-lua +luci-lib-nixio))
```

### 编辑modules/base/root/etc/config/luci文件
将下列代码
```
option mediaurlbase /luci-static/openwrt.org
```
修改为
```
option mediaurlbase /luci-static/nc
```
