<template>
  <div>
    <!-- 头部-->
    <div class="header">
      <div class="top">
        <a class="logo"></a>
        <div class="search">
          <i class="icon"></i>
          <span>搜索商品，共22404款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="bottom">
        <div class="inner">
          <span class="on">推荐</span>
          <span>原家生活</span>
          <span>服饰鞋包</span>
          <span>美食酒水</span>
          <span>个人清洁</span>
        </div>
        <div class="icon1">
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/d0ed5c1095da85ec80a776a23b2023f3.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/7c324fa2ebc05c912946f897eb1e4cc9.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/2565b1fa18e4b8b64aad0710c9725aa1.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/96055517125bb2233636dee9fc1ca183.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/1eba77c8f34e1498b83cabca593f3a3f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/254a86a3cf479907522dc62feccb9607.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
        <div>
          <img
            src="https://yanxuan.nosdn.127.net/c74f5ba03c908826f32985c392f19199.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--导航-->
    <div class='nav'>
        <ul class='nav-list'>
          <li class='item'>
            <a >
              <img class='n-icon' src="./images/1.png" alt="">
              <span>网易自营品牌</span>
            </a>
          </li>
          <li class='item'>
            <a >
              <img class='n-icon' src="./images/2.png" alt="">
              <span>30天无忧退货</span>
            </a>
          </li>
          <li class='item'>
            <a >
              <img class='n-icon' src="./images/3.png" alt="">
              <span>48小时快速退货</span>
            </a>
          </li>
        </ul>
    </div>
    <div class="ff003"></div>
    <!--内容-->

    <div class="content">
      <div class='content-list'>

      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import 'swiper/css/swiper.css'
new Swiper(".swiper-container", {
  loop: true, // 循环模式选项
  autoplay:true,
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination"
  }
});
export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.header
  width: 100%
  height: 148px
  border-bottom: 1px solid #d9d9d9
  .top
    z-index: 2
    display: flex
    flex-flow: row nowrap
    text-align: center
    align-items: center
    padding: 15px
    .logo
      width: 138px
      height: 40px
      background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      display: inline-block
      margin: 0 20px
      background-size: cover
      background-position: center
    .search
      width: 442px
      height: 56px
      background: #EDEDED
      display: flex
      text-align: center
      align-items: center
      justify-content: center
      font-size: 0.37333rem
      border-radius: 10px
      color: #7D7D7D
      .icon
        width: 30px
        height: 30px
        display: inline-block
        vertical-align: middle
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
        background-repeat: no-repeat
        background-size: 100%
        margin-right: 5px
    .loginBtn
      width: 74px
      height: 40px
      color: #B4282D
      font-size: 24px
      line-height: 40px
      text-align: center
      border: 1px solid red
      border-radius: 7px
      margin-left: 15px
  .bottom
    position: relative
    width: 100%
    height: 60px
    .inner
      font-size: 26px
      text-align: center
      line-height: 60px
      .on
        color: #BE3F45
      ::after
        content: ''
        position: absolute
        left: 50px
        bottom: 0
        background-color: red
        width: 10%
        height: 5px
      span
        width: 88px
        height: 60px
        margin: 20px
    .icon1
      width: 1.33333rem
      height: 100%
      position: absolute
      right: 0
      top: 0
      z-index: 9
      .icon
        background: rgba(255, 255, 255, 0.9)
        text-align: center
        line-height: 60px
        width: 60px
        height: 60px
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
        background-repeat: no-repeat
        background-position: center right
.swiper-container
   width 750px
   height 370px
   overflow hidden
.nav
  width 100%
  height 72px
  
  .nav-list
    width 100% 
    height .96rem
    margin-left 30px
    display fix
    flex-flow: row nowrap
    text-align center
    align-items center
    li
      float left
      width 228px
      height 36px
      text-align center
      line-height 72px
      a 
        width 184px
        height 32px
        img 
          width 32px
          height 32px
          margin-top 5px
          
          
</style>