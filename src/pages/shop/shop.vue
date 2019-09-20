<template>
  <div class="shopping">
    <div class="header">
      <span class="shop-car">购物车</span>
      <div class="shopBtn">领券</div>
    </div>
    <div class="nav">
      <ul class='nav-list'>
        <li class='item'>
          <i class='icon'></i>
          <span>30天无忧退货</span>
        </li>
        <li class='item'>
          <i class='icon'></i>
          <span>48小时快速退款</span>
        </li>
        <li class='item'>
          <i class='icon'></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <i class='car'></i>
      <span class='add'>去添加点什么吧</span>
      <div class='shop-car'>登录</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shopping
  width: 100%
  height: 100%
  .header
    box-sizing: border-box
    height: 100%
    height: 88px
    margin: 0 30px
    text-align: center
    .shop-car
      font-size: 36px
      float: left
      line-height: 88px
    .shopBtn
      float: right
      margin-right: 20px
      color: #B4282D
      font-size: 30px
      line-height: 88px
  .nav
    width 750px
    height 70px
    background #eee
    font-size 24px
    text-align center
    display flex
    flex-flow row nowrap
    align-items center
    justify-content: space-between
    color #666
    .item 
      float left
      .icon
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
        height .13333rem
        width .13333rem
        display inline-block
        margin-right 20px
        position relative
        top -3px
        left 13px
  .content
    width 100%
    height 1076px
    background #f4f4f4
    position relative
    .car
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
      background-repeat no-repeat
      background-position center 
      width 300px
      height 300px
      position absolute
      left 221px
      top 345px
    .add
      color #999999
      font-size .37333rem
      position absolute
      top 600px
      left 285px
    .shop-car
      width 60%
      height 92px
      color #fff
      background  #b4282d
      font-size 30px
      text-align center
      line-height 92px
      position absolute
      top 660px
      left 160px
</style>