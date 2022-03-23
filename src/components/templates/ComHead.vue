<template>
  <div class="com-top-head-box">
    <div class="logo-img"></div>
    <div class="head-title">XX税务局国家税务总局</div>
    <div class="center-title">金凤区办税大厅监控</div>
    <div class="right-time">{{ rightDate }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import dayjs, { Dayjs } from 'dayjs';
let weeks = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
];
let rightDate = ref<Dayjs | string>('');
onMounted(() => {
  rightDate.value =
    dayjs().format('YYYY-MM-DD HH:mm:ss') + ' ' + weeks[dayjs().day()];
  useIntervalFn(() => {
    rightDate.value =
      dayjs().format('YYYY-MM-DD HH:mm:ss') + ' ' + weeks[dayjs().day()];
  }, 1000);
});
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'YouSheBiaoTiHei';
  src: url('@/assets/fonts/优设标题黑.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.com-top-head-box {
  position: relative;
  height: 88px;
  width: 100%;
  background: url('@/assets/imgs/topHead/top.png') center no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #ffffff;
}
.logo-img {
  width: 46px;
  height: 34px;
  background: url('@/assets/imgs/topHead/logo.png') center no-repeat;
  margin-left: 20px;
}
.head-title {
  margin-left: 15px;
}
.center-title {
  font-family: 'YouSheBiaoTiHei';
  color: #00ecfc;
  font-size: 44px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
}
.right-time {
  position: absolute;
  right: 20px;
}
</style>
