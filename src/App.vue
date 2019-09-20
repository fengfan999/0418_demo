<template>
  <div>
    <router-view />
    <Footer v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
import Footer from './components/footer/footer'
export default {
  components: {
      Footer
    }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'></style>