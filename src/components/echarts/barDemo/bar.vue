<template>
  <div class="demo-box">
    <div class="echarts-box">
      <component :is="template" :option="barOption.option"></component>
    </div>
    <div class="set-box">
      <div class="set-title">公用设置</div>

      <el-form :model="form" label-width="120px">
        <el-form-item label="柱状图颜色">
          <el-color-picker v-model="form.barColor" />
        </el-form-item>
        <el-form-item label="柱状图宽度">
          <el-slider v-model="form.barWidth" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, markRaw } from 'vue';
import ReBar from '../bar/ReBar.vue';
let template = markRaw(ReBar);
let form = reactive({
  barColor: 'red',
  barWidth: 28
});
let barOption = reactive({
  option: {
    e_type: 'ReBar',
    barColor: ['yellow'],
    barWidth: '18',
    xdata: ['测试1', '测试2', '测试3', '测试4'],
    seriesData: [3, 204, 1079, 1079]
  }
});
watch(
  () => form,
  (newValue) => {
    barOption.option = {
      e_type: 'ReBar',
      barColor: [newValue.barColor],
      barWidth: newValue.barWidth + '',
      xdata: ['测试1', '测试2', '测试3', '测试4'],
      seriesData: [3, 204, 1079, 1079]
    };
  },
  {
    deep: true,
    immediate: true //页面初始化回执行一次
  }
);
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
