<template>
  <div class="echarts-page">
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar</div>
      <ReBar :option="options.option" />
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_1</div>
      <ReBar_1 :option="options.option" />
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_1</div>
      <ReBar_1 :option="options.option" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReBar from '@/components/echarts/ReBar.vue';
import ReBar_1 from '@/components/echarts/ReBar_1.vue';
import { optionBarProps } from '@/components/echarts/types/comBar';
import { ref, onUnmounted, reactive } from 'vue';
let timer = ref<any>(null);
interface propsReBar {
  option: optionBarProps;
}
let options = reactive<propsReBar>({
  option: {
    e_type: 'reBar',
    xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
    seriesData: [22, 33, 55, 88],
    yName: '(眭)'
  }
});
timer.value = setInterval(() => {
  options.option = {
    // e_type: 'reBar',
    xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
    seriesData: [123, 33, 11, 34],
    yName: '(刚)'
  };
}, 3000);
onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
});
</script>

<style lang="less" scoped>
.echarts-page {
  height: 100%;
  width: 100%;
  background: #01145e;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.title-box {
  color: #fff;
}
.test-bar {
  width: 50%;
  height: 250px;
  overflow: hidden;
  border: 1px solid red;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
