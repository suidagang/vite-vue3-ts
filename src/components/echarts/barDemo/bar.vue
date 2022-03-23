<template>
  <div class="demo-box">
    <div class="echarts-box">
      <ReBar />
    </div>
    <div class="set-box">
      <div class="set-title">公用设置</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReBar from '../bar/ReBar.vue';
</script>

<style lang="less" scoped>
.demo-box {
  width: 100%;
  height: 250px;
  display: flex;
}
.echarts-box {
  flex: 1;
  height: 250px;
  background: #01145e;
}
.set-box {
  flex: 1;
  height: 250px;
  background: pink;
}
.set-title {
  height: 40px;
  line-height: 40px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>
