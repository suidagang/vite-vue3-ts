<template>
  <div class="com-content">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :space-between="50"
      :pagination="true"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide><Dtdlt /></swiper-slide>
      <swiper-slide>
        <Jianjie />
      </swiper-slide>
      <swiper-slide> <Zhaopian /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import Dtdlt from './components/Dtdlt.vue';
import Jianjie from './components/Jianjie.vue';
import Zhaopian from './components/Zhaopian.vue';
// import Swiper core and required modules
import { Autoplay } from 'swiper';

// Import Swiper Vue.js components
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

let modules = [Autoplay];
</script>

<style lang="less" scoped>
.com-content {
  width: 100%;
  height: 100%;
  .swiper-horizontal {
    width: 100%;
    height: 100%;
  }
}
</style>
