<template>
  <div class="com-content">
    <div class="img-swiper-box">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :space-between="50"
        :pagination="true"
        :loop="true"
        class="mySwiper"
      >
        <swiper-slide><div class="img-list-box">Slide 1</div></swiper-slide>
        <swiper-slide>
          <div class="img-list-box" style="background: purple">Slide 2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list-box" style="background: orange">Slide 3</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="content-text">
      银川市金凤区办税服务大厅位于银川市民大厅D5厅，总面积约1900平方米。包括智能迎宾区、智能自助发票领取终端区、智能自助办税区、5G掌端自助办税区、宣传等候区、互联网便民自助办税区、智能业务受理区、专项工作后台业务办理区、“e联通”指挥中心及马丽工作室。
    </div>
  </div>
</template>

<script setup lang="ts">
// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

// Import Swiper Vue.js components
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

let modules = [Autoplay, Pagination];
</script>

<style lang="less" scoped>
.com-content {
  display: flex;
  overflow: hidden;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .img-swiper-box {
    overflow: hidden;
    margin-right: 13px;
    width: 256px;
    height: 100%;
    box-sizing: border-box;
    .mySwiper {
      width: 100%;
      height: 100%;
      .img-list-box {
        width: 100%;
        height: 328px;
        background: red;
      }
    }
  }
  .content-text {
    width: 130px;
    font-size: 14px;
    text-indent: 2em;
    color: #f2f3ff;
    line-height: 26px;
  }
}
:deep(.swiper-pagination) {
  bottom: -3px !important;
}
:deep(.swiper-pagination-bullet) {
  width: 20px !important;
  height: 20px !important;
  background: #ffffff !important;
}
:deep(.swiper-pagination-bullet-active) {
  background: #409eff;
}
</style>
