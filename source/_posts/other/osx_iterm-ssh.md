title: '通过iTerm2连接远程服务器'
date: 2015-08-03 02:44:18
tags:
  - OSX
  - iTerm2
  - putty
  - server
categories: OSX
keywords:
  - Arylo
  - OSX
  - SSH
  - putty
  - server
  - iTerm2
---

# F

> 知道的人都知道, 不知道的人还未知道.

最近我换上了MBPR, 比L大的晚了两个月(没办法~人地有钱), 在维护`pandorabox`的服务器上面出现一个小小的问题.

# Q

以前呢, 我还在用`windows`, 所以一般都是用`putty`就好了, 不过呢, 有人说, **在`OSX`上面不能用`windows`代替品这种想法来寻找需要的软件, 而是用某种功能这种想法来搜软件**. 所以, 我就直接把putty抛弃(其实不舍得iTerm的环境).

按正常呢, 连接ssh应该很简单的事, 是的, 的确很简单. 但我没可能全部操作都只需要`ssh`, 我还需要`Download`and`Upload`, 这才是我觉得最麻烦的地方 

# A

## Better Tool?

原本打算照常用`scp`的, 但在`OSX`上面, 貌似有更好的方法, 就是使用`rz sz`.

## Install & Setting

下面是安装步骤(From [mmastrac/iterm2-zmodem][zmodem])

+ Install lrzsz on OSX: brew install lrzsz
+ Save the iterm2-send-zmodem.sh and iterm2-recv-zmodem.sh scripts in /usr/local/bin/
+ Set up Triggers in iTerm 2 like so:

```
    Regular expression: \*\*B0100
    Action: Run Silent Coprocess
    Parameters: /usr/local/bin/iterm2-send-zmodem.sh

    Regular expression: \*\*B00000000000000
    Action: Run Silent Coprocess
    Parameters: /usr/local/bin/iterm2-recv-zmodem.sh
```

这些英文这么简单, 不用翻了吧?
大概就是用`brew`安装`lrzsz`, 再将两个sh文件存放在`/usr/local/bin/`, 再在iTerm里面设置就OK了

## Enjoy

使用方法(From [mmastrac/iterm2-zmodem][zmodem])

```
To send a file to a remote machine:

Type "rz" on the remote machine
Select the file(s) on the local machine to send
Wait for the coprocess indicator to disappear
The receive a file from a remote machine

Type "sz filename1 filename2 … filenameN" on the remote machine
Select the folder to receive to on the local machine
Wait for the coprocess indicator to disappear
```

这里稍微通俗地说一下, 
- 在远程服务器输入`rz`, 等待一会就将选择的文件(?)发送到服务器上
- 在远程服务器输入`sz ...`, 就会将选择的文件发到本地的PC上

# B

反正我是不行的 

- 远程服务器还是会提示`lrzsz`尚未安装...
- 而且不能操作文件夹...必须将文件夹打包才行

---
> Arylo, 走在全栈工程师的路上, 正在学习设计和前端
> 现时加入`Lintel`的`PandoraBox Team`, 负责打游击, 俗称打杂
> tomail:arylo.open@gmail.com

[zmodem]: https://github.com/mmastrac/iterm2-zmodem