<div align="center">

  <h1 align="center" ><strong>Shepherd</strong></h1>

  <p align="center">
    更有挑战性、更多关卡、更多图案、难度曲线更正常的羊了个羊！
  </p>
  
</div>

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


## 使用

![](https://pic1.imgdb.cn/item/63327bcc16f2c2beb19e685f.png)

```js
        if (oSession.url=="cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3") {
            oSession.fullUrl = "http://127.0.0.1:3000/sheep/v1/game/map_info_ex?matchType=3";
        }
        
        if (oSession.url.indexOf("cat-match-static.easygame2021.com/maps/")>-1){
            oSession.fullUrl = "http://127.0.0.1:3000/public/"+oSession.url.Split("/")[2];
        }
```