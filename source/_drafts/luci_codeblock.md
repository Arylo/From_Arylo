title: Luci代码块
date: 2014-12-9 12:12:12
tags: [Luci, openwrt, lua]
---
**最后修改时间: 2014-12-18**

## Controller

### 网络->接口 顶部tab
``` lua
<!-- 
	modules/admin-full\luasrc\controller\admin\network.lua:114
-->
if page.inreq then
  uci:foreach("network", "interface",
    function (section)
      local ifc = section[".name"]
      if ifc ~= "loopback" then
        entry({"admin", "network", "network", ifc},
        true, ifc:upper())
      end
    end)
end
```

## View

### 网络->接口 接口列表

``` html
<!-- 
	modules/admin-full/luasrc/view/admin_network/iface_overview.htm:226
-->
<%
  for i, net in ipairs(netlist) do
    local z = net[3]
    local c = z and z:get_color() or "#EEEEEE"
    local t = z and translate("Part of zone %q" % z:name()) or translate("No zone assigned")
%>
  <tr class="cbi-section-table-row cbi-rowstyle-<%=i % 2 + 1%>">
    <td class="cbi-value-field" style="padding:3px">
      <div class="ifacebox">
        <div class="ifacebox-head" style="background-color:<%=c%>" title="<%=pcdata(t)%>">
          <strong><%=net[1]:upper()%></strong>
        </div>
        <div class="ifacebox-body" id="<%=net[1]%>-ifc-devices">
          <img src="<%=resource%>/icons/ethernet_disabled.png" style="width:16px; height:16px" /><br />
          <small>?</small>
        </div>
      </div>
    </td>
    <td class="cbi-value-field" style="vertical-align:middle; text-align:left; padding:3px" id="<%=net[1]%>-ifc-description">
      <em><%:Collecting data...%></em>
    </td>
    <td style="width:420px">
      <input type="button" class="cbi-button cbi-button-reload" style="width:100px" onclick="iface_shutdown('<%=net[1]%>', true)" title="<%:Reconnect this interface%>" value="<%:Connect%>" />
      <input type="button" class="cbi-button cbi-button-reset" style="width:100px" onclick="iface_shutdown('<%=net[1]%>', false)" title="<%:Shutdown this interface%>" value="<%:Stop%>" />
      <input type="button" class="cbi-button cbi-button-edit" style="width:100px" onclick="location.href='<%=luci.dispatcher.build_url("admin/network/network", net[1])%>'" title="<%:Edit this interface%>" value="<%:Edit%>" id="<%=net[1]%>-ifc-edit" />
      <input type="button" class="cbi-button cbi-button-remove" style="width:100px" onclick="if (confirm('<%:Really delete this interface? The deletion cannot be undone!\nYou might lose access to this device if you are connected via this interface.%>')) location.href='<%=luci.dispatcher.build_url("admin/network/iface_delete", net[1])%>'" title="<%:Delete this interface%>" value="<%:Delete%>" />
    </td>
  </tr>
<% end %>
```

### Navbar

下面代码块是生成二级菜单用的
``` html
<%-
  local function submenu(prefix, node)
    local childs = disp.node_childs(node)
    if #childs > 0 then
%>
<div class="dropdown-menu-frm">
<ul class="dropdown-menu">
    <%-
      for i, r in ipairs(childs) do
        local nnode = node.nodes[r]
        local href  = controller .. prefix .. r ..
          (nnode.query and http.build_querystring(nnode.query) or "")
    %>
<li><a href="<%=pcdata(href)%>"><%=pcdata(striptags(translate(nnode.title)))%></a></li>
    <%-
      end
    %>
</ul>
</div>
<%-
    end
  end
%>
```
这个才是生成菜单的Code block
``` html
<ul class="nav">
<%-
  childs = disp.node_childs(cattree)

  if #childs > 0 then
    for i, r in ipairs(childs) do
      local nnode = cattree.nodes[r]
      local href  = controller .. "/" .. category .. "/" .. r ..
        (nnode.query and http.build_querystring(k.query) or "")
      local grandchildren = disp.node_childs(nnode)

      if #grandchildren > 0 then
%>
  <li class="dropdown">
    <a class="menu" href="<%=pcdata(href)%>"><%=pcdata(striptags(translate(nnode.title)))%></a>
    <%- submenu("/" .. category .. "/" .. r .. "/", nnode) %>
  </li>
<%      else %>
  <li>
    <a href="<%=pcdata(href)%>"><%=pcdata(striptags(translate(nnode.title)))%></a>
    </li> 
<%
      end
    end
  end
%>
</ul>
```

### Wifi 设备

``` html
<!-- 
	modules/admin-full/luasrc/view/admin_network/wifi_overview.htm
-->
<% for _, dev in ipairs(devices) do local nets = dev:get_wifinets() %>
<!-- device <%=dev:name()%> -->
<fieldset class="cbi-section">
  <table class="cbi-section-table" style="margin:10px; empty-cells:hide">
    <!-- physical device -->
    <tr>
      <td style="width:34px"><img src="<%=resource%>/icons/wifi_big_disabled.png" style="float:left; margin-right:10px" id="<%=dev:name()%>-iw-upstate" /></td>
      <td colspan="2" style="text-align:left">
        <big><strong><%=guess_wifi_hw(dev)%> (<%=dev:name()%>)</strong></big><br />
        <span id="<%=dev:name()%>-iw-devinfo"></span>
      </td>
      <td style="width:310px;text-align:right">
        <input type="button" class="cbi-button cbi-button-find" style="width:100px" onclick="location.href='<%=luci.dispatcher.build_url("admin/network/wireless_join")%>?device=<%=dev:name()%>'" title="<%:Find and join network%>" value="<%:Scan%>" />
        <input type="button" class="cbi-button cbi-button-add" style="width:100px" onclick="location.href='<%=luci.dispatcher.build_url("admin/network/wireless_add")%>?device=<%=dev:name()%>'" title="<%:Provide new network%>" value="<%:Add%>" />
      </td>
    </tr>
    <!-- /physical device -->

    <!-- network list -->
    <% if #nets > 0 then %>
      <% for i, net in ipairs(nets) do %>
      <tr class="cbi-section-table-row cbi-rowstyle-<%=1 + ((i-1) % 2)%>">
        <td></td>
        <td class="cbi-value-field" style="width:16px; padding:3px" id="<%=net:id()%>-iw-signal">
          <img src="<%=resource%>/icons/signal-none.png" title="<%:Not associated%>" /><br />
          <small>0%</small>
        </td>
        <td class="cbi-value-field" style="vertical-align:middle; text-align:left; padding:3px" id="<%=net:id()%>-iw-status">
          <em><%:Collecting data...%></em>
        </td>
        <td class="cbi-value-field" style="width:310px;text-align:right">
          <input id="<%=net:id()%>-iw-toggle" type="button" class="cbi-button cbi-button-reload" style="width:100px" onclick="wifi_shutdown('<%=net:id()%>', this)" title="<%:Delete this network%>" value="<%:Enable%>" />
          <input type="button" class="cbi-button cbi-button-edit" style="width:100px" onclick="location.href='<%=net:adminlink()%>'" title="<%:Edit this network%>" value="<%:Edit%>" />
          <input type="button" class="cbi-button cbi-button-remove" style="width:100px" onclick="if (confirm('<%:Really delete this wireless network? The deletion cannot be undone!\nYou might lose access to this device if you are connected via this network.%>')) location.href='<%=luci.dispatcher.build_url("admin/network/wireless_delete", net:ifname())%>'" title="<%:Delete this network%>" value="<%:Remove%>" />
        </td>
      </tr>
      <% end %>
    <% else %>
      <tr class="cbi-section-table-row cbi-rowstyle-2">
        <td></td>
        <td colspan="3" class="cbi-value-field" style="vertical-align:middle; text-align:left; padding:3px">
          <em><%:No network configured on this device%></em>
        </td>
      </tr>
    <% end %>
    <!-- /network list -->
  </table>
</fieldset>
<!-- /device <%=dev:name()%> -->
<% end %>
```