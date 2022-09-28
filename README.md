<div align="center">

  <h1 align="center" ><strong>Shepherd</strong></h1>

  <p align="center">
    更有挑战性、更多关卡、更多图案、难度曲线更正常的羊了个羊！
  </p>
  
</div>

> 温馨提示：本工具仅供娱乐，实际上不会有通关记录，原因是每次通关会发送通关的相关信息，修改地图会被发现。不过，本程序的初衷也不为此，所以没有关系。
当然，如果你真的要通关，那就不用修改地图，直接改Seed或者参透游戏直接发包，通关时间小于1分钟也是不被允许的哦。

## 介绍

### 难度曲线更正常

羊了个羊的难度曲线是非常不正常的，一开始就是非常难的，而且难度曲线是非常陡峭的，这是因为羊了个羊的关卡是由一个个小关卡组成的，而每个小关卡的难度都是非常大的，这样就导致了难度曲线非常陡峭，而且一开始就是非常难的。

<strong>难度曲线陡峭是游戏成瘾原因之一，为此，本程序抬高第一关难度，并使后面关卡难度上升较为平滑，减轻你的羊癫疯。</strong>

![](https://pic1.imgdb.cn/item/63327bcc16f2c2beb19e686b.png)

### 更多关卡

羊了个羊的关卡数量是非常少的，只有 2 关，而且每个关卡的难度都是非常大的，这样就导致了羊了个羊的关卡数量非常少，而且每个关卡的难度都是非常大的，这样就导致了羊了个羊的关卡数量非常少。

<strong>使用本程序可以体验随机数量关卡，让你玩个尽兴。理论上可以做到`是英雄就闯100关`的效果。</strong>

![](https://pic1.imgdb.cn/item/63327bcc16f2c2beb19e6870.png)

### 更具挑战性

羊了个羊的关卡是非常简单的，只要你能够把羊推到出口，就算过关了，这样就导致了羊了个羊的关卡非常简单，而且每个关卡的难度都是非常大的，这样就导致了羊了个羊的关卡数量非常少。

<strong>使用本程序可以使关卡更为灵活多变，卡片的位置非常灵活，不规则排列，忽大忽小，让游戏更具挑战性</strong>

![](https://pic1.imgdb.cn/item/63327bcc16f2c2beb19e687d.png)

### 更多图案

<strong>本程序再原游戏卡片图案上新增了一种新的图案样式，从而为游戏增添更多可能，让你们能够大放异彩。</strong>

![](https://pic1.imgdb.cn/item/63327bcc16f2c2beb19e6886.png)

## 初衷

羊了个羊是一款非常好玩的小游戏，但是由于其难度曲线陡峭，关卡数量少，关卡难度大，关卡图案单一等原因，导致了羊了个羊的游戏体验非常不好，因此，本程序就是为了改善羊了个羊的游戏体验而诞生的。

> 以上是Copilot说的，不是我说的哈

羊了个羊刚爆火的时候，出了很多`一键通过`、`通关1亿次`的工具。原本通关难度极大的游戏，被一下通关，但好像通关的不是你，只是你获得了冷冰冰的数字+1.因为你原本就没有参与游戏的过程，换而言之，你仍然是游戏中毒的受害者，`羊癫疯`患者。我曾在某人的推荐下尝试了这一局游戏，但即使我玩到后面已然意识到这游戏通不过去，浪费时间，我依然孜孜不倦，不肯放弃地再玩一个小时。是的，它地成瘾机制就是这样可怕而又可恶。一键通关除了满足不该有地虚荣心外无有其他作用，它也没法解瘾。所以，当我发现，如果可以让游戏难度曲线变得正常，像大多数我遇到的游戏那样渐进式地难度，我或许玩久了就不会再想玩了。没错，我做了这个项目就是以乱力破局，解铃还须系铃人这句话说的一点没错。

## 原理

简而言之，即是`偷天换日`。

将游戏的map数据修改为自己创作的map。然后可以将map变得更加难度，让游戏变得更加有趣。

那么，游戏的map数据怎么改？

需要先知道，这些map数据不是一开始打开游戏，它加载资源的时候就给你的，也就是说，它一开始没有存在本地。而是我们要开始游戏的时候，它从网络获取map数据再加载出来。也就是说，我们可以直接拦截它的数据请求，并给它自己生成的map数据，这样，它就会加载我们自己的map数据了。这样，我们所需要做的第一步是拦截它的请求并换上我们自己的，这里用了Fiddler，并配合FiddlerScript进行替换。我们通过node自建一个后端服务，暴露一个返回map的api，然后将游戏获取map的接口换成自己自建的后端程序的接口。这样它拿到的地图数据就是我们自己生成的了。

## 使用

### 安装Fiddler

在`./tools`有一个Fillder压缩包，解压它并打开，然后配置好网络服务，这里不再赘述。(不会就百度)
> 如果，你要在手机上玩，那么你需要在手机上安装Fiddler的证书，然后在Fiddler上配置好手机的代理，这里不再赘述。

### 配置FiddlerScript

在Fiddler上，点击`Tools`->`FiddlerScript`，打开FiddlerScript编辑器，将`./tools/FiddlerScript.js`的内容复制进去到相应的位置，然后保存。

![](https://pic1.imgdb.cn/item/63327bcc16f2c2beb19e685f.png)


下面是复制的内容，端口和地址改为相应的即可。

```js
        if (oSession.url=="cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3") {
            oSession.fullUrl = "http://127.0.0.1:3000/sheep/v1/game/map_info_ex?matchType=3";
        }
        
        if (oSession.url.indexOf("cat-match-static.easygame2021.com/maps/")>-1){
            oSession.fullUrl = "http://127.0.0.1:3000/public/"+oSession.url.Split("/")[2];
        }
```

### 启动后端服务

默认你已经安装好Node程序，那么这里直接打开终端，进入到本文件夹，然后
  
  ```bash
  npm install
  node index
  ```


### 启动游戏

打开游戏即可畅玩啦！
