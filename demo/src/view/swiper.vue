<template>
  <div>
    <h1>家庭教师</h1>
    <h2>我永远喜欢库洛姆·髑髅</h2>
    <h3>嘤嘤嘤(╥╯^╰╥)</h3>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide><img src="../assets/111.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/222.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/333.jpg" alt=""></swiper-slide>
      <!-- <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'HelloWorld',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
