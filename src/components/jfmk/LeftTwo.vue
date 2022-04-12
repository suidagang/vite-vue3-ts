<template>
  <div class="com-content marquee">
    <swiper
      :direction="'vertical'"
      :modules="modules"
      :slides-per-view="3"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :space-between="3"
      :pagination="true"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in listArr" :key="index">
        <personList :list="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
// import Swiper core and required modules
import { Autoplay } from 'swiper';

// Import Swiper Vue.js components
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import { reactive } from 'vue';
import personList from './components/PersonList.vue';

let modules = [Autoplay];
let listArr = reactive([
  {
    title: ['张三', '男', '汉族'],
    text: '1982年9月出生，2001年3月参加工作。现任国家税务总局银川市金凤区税.务局第一税务分局党支部书记。'
  },
  {
    title: ['李四', '女', '回族', '党员'],
    text: '1995年4月出生，2017年8月参加工作。现任国家税务总局银川市金凤区税.务局第一税务分局副局长。'
  },
  {
    title: ['王五', '男', '汉族', '本科学历'],
    text: '1982年9月出生，2001年3月参加工作。现任国家税务总局银川市金凤区税.务局第一税务分局党支部书记。'
  },
  {
    title: ['张三1', '男', '汉族'],
    text: '1982年9月出生，2001年3月参加工作。现任国家税务总局银川市金凤区税.务局第一税务分局党支部书记。'
  },
  {
    title: ['张三2', '男', '汉族'],
    text: '1982年9月出生，2001年3月参加工作。现任国家税务总局银川市金凤区税.务局第一税务分局党支部书记。'
  }
]);
</script>

<style lang="less" scoped>
.com-content {
  overflow: hidden;
  padding: 15px 20px;
  width: 100%;
  height: 480px;
  box-sizing: border-box;
  .mySwiper {
    width: 100%;
    height: 480px;
  }
}
// :deep(.swiper-slide) {
//   margin-bottom: 30px !important;
// }
</style>
