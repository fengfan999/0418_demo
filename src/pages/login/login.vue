<template>
  <div class='login'>
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
    <!-- <div class="phone-login">
      <div class="logo">
        <img
          src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
          alt=""
        />
      </div>
      <div class="login-message">
        <input
          type="tel"
          maxlength="11"
          spellcheck="false"
          tabindex="1"
          autocomplete="off"
          class="dlemail j-nameforslide"
          name="email"
          placeholder="请输入手机号"
          id="phoneipt"
        />
        <input
          type="tel"
          autocomplete="off"
          spellcheck="false"
          tabindex="5"
          maxlength="6"
          data-max-length="6"
          class="j-inputtext pcin"
          name="phonecode"
          placeholder="请输入短信验证码"
        />
        <button></button>
      </div>
    </div> -->
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
 
  </style>