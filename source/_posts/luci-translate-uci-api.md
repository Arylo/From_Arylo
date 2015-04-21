title: '[翻译]UCI API'
date: 2015-04-21 20:54:44
tags:
  - UCI
  - API
  - Luci
  - Arylo
categories: Luci
keywords:
  - Arylo
  - UCI
  - API
  - Luci
  - OpenWrt
---

> http://wiki.openwrt.org/doc/techref/uci

Lua Bindings for UCI

For those who like lua, UCI can be accessed in your code via the package libuci-lua. Just install the package then, in your lua code do

```lua
require("uci")
```
API

The api is quite simple

top level entry point

uci.cursor() (that instantiates a uci context instance) e.g.

```lua
uci = uci.cursor()
```
or
```lua
uci = uci.cursor(nil, "/var/state")
```
if you want to involve state vars
on that you can call the usual operations

```lua
uci:get("config", "sectionname", "option")
```
returns string or nil for not found
```lua
uci:set("config", "sectionname", "option", "value")
```
sets simple string value
```lua
uci:set("config", "sectionname", "option", { "foo", "bar" })
```
sets list value
```lua
uci:delete("config", "section", "option")
```
deletes option
```lua
uci:delete("config", "section")
```
deletes section
```lua
uci:add("config", "type")
```
adds new anon section "type" and returns its name
```lua
uci:set("config", "name", "type")
```
adds new section "name" with type "type"
```lua
uci:foreach("config", "type", function(s) ... end)
```
iterates over all sections of type "type" and invokes callback function for each "s" within the callback. s is a table containing all options and two special properties
s['.type'] → section type
s['.name'] → section name
If the callback function returns false [NB: not nil!], foreach() will terminate at that point without iterating over any remaining sections. foreach() returns true if at least one section exists and the callback function didn't raise an error for it; false otherwise.

```lua
uci:reorder("config", "sectionname", position)
```
Move a section to another position. Position starts at 0. This is for example handy to change the wireless config order (changing priority).
```lua
uci:revert("config")
```
discards any changes made to the configuration, that have not yet been committed
```lua
uci:commit("config")
```
commits (saves) the changed configuration to the corresponding file in /etc/config
That's basically all you need
