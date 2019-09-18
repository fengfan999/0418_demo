<template>
  <div class="footer">
    <span class="item" :class="{'on':$route.path==='/home'}" @click="goto('/home')" >
      <span class="item_icon">
        <i class="iconfont icon-menu-home-normal"></i>
      </span>
      <span class="ziti">首页</span>
    </span>

    <span class="item" :class="{'on':$route.path==='/fenlei'}" @click="goto('/fenlei')">
      <span class="item_icon">
        <i class="iconfont icon-classify"></i>
      </span>
      <span>分类</span>
    </span>

    <span class="item" :class="{'on':$route.path==='/shiwu'}" @click="goto('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-knowledge"></i>
      </span>
      <span>识物</span>
    </span>

    <span class="item" :class="{'on':$route.path==='/shop'}" @click="goto('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-dinglanyoucegouwuche21"></i>
      </span>
      <span>购物</span>
    </span>

    <span class="item" :class="{'on':$route.path==='/person'}" @click="goto('/person')">
      <span class="item_icon">
        <i class="iconfont icon-jingjirenjinglikehuxianxingcopy"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
     if (this.$route.path !== path) {
        this.$router.replace(path)
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'
.footer
  width: 100%
  height: 98px
  top-border-1px(#e4e4e4)
  position: fixed
  z-index: 100
  right: 0
  bottom: 0
  left: 0
  display: flex
  .item
    width: 70
    height: 71px
    display: flex
    flex: 1
    text-align: center
    flex-direction: column
    align-items: center
    &.on
       color #BE3F45
    span
      font-size 24px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 40px
</style>