<template>
  <div>
    <div class="CategoryHeader">
      <div class="CategoryLink">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品共00000条好物</span>
      </div>
    </div>
    <div class="CategoryContent">
      <div class="Content-left">
        <ul class="ContentList">
          <li>
            <a href="javascript:;">推荐专区</a>
          </li>
          <li>
            <a href="javascript:;">换季专区</a>
          </li>
          <li>
            <a href="javascript:;">爆款专区</a>
          </li>
          <li>
            <a href="javascript:;">新品专区</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:;">美食酒水</a>
          </li>
          <li>
            <a href="javascript:;">个护清洁</a>
          </li>
          <li>
            <a href="javascript:;">母婴孩子</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">全球特色</a>
          </li>
        </ul>
      </div>
      <!-- <div class="Content-right">
        <div class="bannar">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
          <swiper-slide class="swiper-innerr">
             <img src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg" alt=""></img>
          </swiper-slide>
          <swiper-slide class="swiper-innerr">
            <img src="https://yanxuan.nosdn.127.net/40ee9e553e6a2c228b0544bff65a618d.jpg" alt=""></img>
          </swiper-slide>
          </swiper>
        </div>
        <div class="ShowList">
          <ul class="ShowItems">
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <span>明星商品</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/a91deb0e8592ea6c5e402d71eadc6a64.png" alt="">
              <span>精选美食</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/3e52cf9e7db8ff6eb442b83043ae44ce.png" alt="">
              <span>男装季末特惠</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png" alt="">
              <span>员工精选好礼</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/fcbe22542c091f31d6a22a7e921edc8f.png" alt="">
              <span>女装季末特惠</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/fcbe22542c091f31d6a22a7e921edc8f.png" alt="">
              <span>秋季换新好物</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png" alt="">
              <span>50元幸福</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/33fbf26f90d8b8a470cfe4fcfc2f5fe8.png" alt="">
              <span>家装好物推荐</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png" alt="">
              <span>000+好评</span>
            </li>

          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>
 
<script>
// import BScroll from "better-scroll";
// export default {
//   data(){
//     return {
//       loop: true,
//       swiperOption:{
//          loop: true,
//           delay: 1000,
//           stopOnLastSlide: false,
//           disableOnInteraction: false
//       }
//     }
//   },
//   mounted(){
//     let scrollLeft = new BScroll('.Content-left')

//   }
// };
</script>
 
<style lang="stylus" rel="stylesheet/stylus">
.CategoryHeader
  position: relative
  top 10px
  width: 750px
  height: 88px
  border-bottom: 1px solid #EEEEEE
  .CategoryLink
    position: absolute
    width: 690px
    height: 56px
    background-color: #EEEEEE
    border-radius: 10px
    left: 30px
    top: 16px
    text-align: center
    color: #666666
    .iconfont
      font-size: 40px
      margin-right: 10px
    span
      line-height: 56px
      font-size: 28px
.CategoryContent
  margin-top 50px
  width: 750px
  height: 1044px
  display flex
  overflow hidden
  .Content-left
    width: 162px
    height: 100%
    .ContentList
      box-sizing border-box
      width 100%
      height 1120px
      padding 20px 0
      display flex
      flex-direction column
      justify-content space-between
      li
        width 162px
        height 50px
        font-size 28px
        margin-left 20px
  .Content-right
    width 528px
    height 872px     
    .bannar
      img 
        width 528px
        height 192px
    .ShowList  
      width 528px
      height 648px  
      .ShowItems
        display flex
        flex-wrap wrap
        li
          width 144px
          height 216px
          margin-left 30px
          text-align center
          img 
            height 144px
            width 144px
          span 
            font-size 24px
</style>