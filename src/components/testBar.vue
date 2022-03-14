<template>
  <div class="echarts-page">
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar</div>
      <component :is="template" :option="options.option"></component>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_1</div>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_1</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { componentsList } from './echarts/componentsList';
import { optionBarProps } from '@/components/echarts/types/comBar';
import { ref, onUnmounted, reactive, defineAsyncComponent } from 'vue';
let timer = ref<any>(null);
interface propsReBar {
  option: optionBarProps;
}
const getTemplateByType = (e_type: string) => {
  return defineAsyncComponent(
    (() => {
      if (e_type && e_type in componentsList) {
        //@ts-ignore
        return componentsList[e_type];
      } else {
        return '';
      }
    })()
  );
};
let options = reactive<propsReBar>({
  option: {
    e_type: 'ReBar',
    xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
    seriesData: [22, 33, 55, 88],
    yName: '(眭)'
  }
});
let template = getTemplateByType(options.option.e_type as string);
//根据后台传入e_type获取组件

timer.value = setInterval(() => {
  options.option = {
    e_type: 'reBar',
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
