<template>
  <div class="login">
    <div class="login-header">
      <a
        href="javascript:;"
        class="login-header-left"
        @click="$router.push('/home')"
      ></a>
      <a href="javascript:;" class="login-header-middle"></a>
      <div class="login-header-right">
        <a href="javascript:;" class="left"></a>
        <a href="javascript:;" class="right" @click="$router.push('/shop')"></a>
      </div>
    </div>
     <div class="login-content">
        <div class="login-content-top">
          <div class="logo">
            <img
              src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
              class="logo"
              alt
            />
          </div>
          <div class="content-btn">
            <div class="content-phone" @click="$router.push('/login')>
              <i class="icon-phone"></i>
              <span>手机号快捷登录</span>
            </div>
            <div class="content-emai"  >
              <i class="icon-email"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
        <div class="login-content-bottom">
            <span class="weixin">
              <img src="./images/weixin.png" alt="" class="weixin-icon" />
              <span>微信</span>
            </span>
            <span class="qq">
              <img src="./images/qq.png" alt="" class="qq-icon" />
              <span>QQ</span>
            </span>
            <span class="weibo">
              <img src="./images/weibo.png" alt="" class="weibo-icon" />
              <span>微博</span>
            </span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.login
  width: 100%
  height: 100%
  .login-header
    width: 750px
    height: 65px
    background-color: #fafafa
    position: relative
    .login-header-left
      background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
      height: 0.64rem
      width: 60px
      display: block
      background-repeat: no-repeat
      background-position: 0 -70px
      margin: 20px 0 0 24px
    .login-header-middle
      background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
      width: 180px
      height: 60px
      display: block
      background-repeat: no-repeat
      background-position: 0 -120px
      position: absolute
      top: -5px
      left: 290px
    .login-header-right
      .left
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
        width: 60px
        height: 60px
        display: block
        background-repeat: no-repeat
        background-position: 0 -360px
        position: absolute
        top: 0
        right: 110px
      .right
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
        width: 55px
        height: 55px
        display: block
        background-repeat: no-repeat
        position: absolute
        top: -3px
        right: 30px
  .login-content
    background: #F2F5F4
    width: 100%
    width: 100%
    position: relative
    .login-content-top
      width: 100%
      height: 1280px
      .logo
        width: 3.57333rem
        height: 1.2rem
        position: relative
        top: 75px
        left: 120px
      .content-btn
        width: 100%
        height: 200px
        position: relative
        top: 380px
        padding: 0 40px
        box-sizing: border-box
        .content-phone
          width: 100%
          height: 90px
          background: #DD1A21
          border: 1px solid #DD1A21
          text-align: center
          line-height: 95px
          font-size: 28px
          color: #fff
          .icon-phone
            background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png)
            background-repeat: no-repeat
            background-position: 0 -51px
            width: 40px
            height: 40px
            display: inline-block
            margin-right: 20px
            position: relative
            top: 10px
        .content-email
          margin-top: 30px
          width: 100%
          height: 90px
          border: 1px solid #DD1A21
          text-align: center
          line-height: 95px
          font-size: 28px
          color: #DD1A21
          .icon-email
            background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png)
            background-repeat: no-repeat
            background-position: 0 0px
            width: 40px
            height: 40px
            display: inline-block
            margin-right: 20px
            position: relative
            top: 10px
    .login-content-bottom
      width: 100%
      position: absolute
      left: 0
      bottom: 113px
      padding: 0 100px
      line-height: 60px
      box-sizing: border-box
      font-size: 28px
      color: #7f7f7f
      .weixin
        height: 40px
        border-right: 1px solid #979797
        text-align: center
        padding: 0 0.53333rem
        .weixin-icon
          width: 0.53333rem
          height: 0.53333rem
          position: relative
          top: 10px
          margin-right: 5px
      .qq
        height: 40px
        border-right: 1px solid #979797
        text-align: center
        padding: 0 0.53333rem
        .qq-icon
          width: 0.53333rem
          height: 0.53333rem
          position: relative
          top: 10px
          margin-right: 5px
      .weibo
        height: 40px
        text-align: center
        padding: 0 0.53333rem
        .weibo-icon
          width: 0.53333rem
          height: 0.53333rem
          position: relative
          top: 10px
          margin-right: 5px
</style>