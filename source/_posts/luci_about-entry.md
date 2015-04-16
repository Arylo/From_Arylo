title: 关于Entry()
date: 2014-12-16 12:12:12
tags:
  - Luci
  - openwrt
categories: Luci
keywords:
  - Luci
  - OpenWrt
  - Entry
---

## 关于Entry
### Function 分析
```Lua
entry(path, target, title=nil, order=nil)
```

- path 是定义显示的虚拟路径
- target 是定义相对应的处理方式, 分别有
	- alias 直接转向别的Entry
	- template 渲染某个view
	- cbi/form 调用某个model
	- call 直接调用Function
- title 菜单的显示标题, 可以为空
	- _() 国际化文字
	- translate() 同上, 常见于model
- order 同级下的菜单显示位置, 越小越前, 最小为1(?), 可以为空

entry()还有其他属性, 例如'entry().index=true', 分别是:
- index 该节点为首页
- dependent 如果父节点丢失的话, 就不会该节点被意外调用
- leaf 如果该节点下有子节点, 解析到该节点就不继续解析它的子节点
- sysauth 该节点需要系统账号认证
- i18n


### E.g.
```Lua
-- controller/admin/status.lua
entry({"admin", "status"}, alias("admin", "status", "overview"), _("Status"), 20).index = true
entry({"admin", "status", "overview"}, template("admin_status/index"), _("Overview"), 1)
entry({"admin", "status", "iptables"}, call("action_iptables"), _("Firewall"), 2).leaf = true
entry({"admin", "status", "routes"}, template("admin_status/routes"), _("Routes"), 3)

entry({"admin", "status", "processes"}, cbi("admin_status/processes"), _("Processes"), 6)

```
