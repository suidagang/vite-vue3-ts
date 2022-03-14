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
import { getTemplateByType } from './echarts/componentsList';
import { ref, onUnmounted, reactive, markRaw } from 'vue';
import { comRequest } from '@/utils/http/index';
let timer = ref<any>(null);
let options = reactive({
  option: {
    e_type: ''
  }
});
let template = ref(null);
const getAjax = (id: number, flag?: boolean) => {
  comRequest({
    url: '/api/ReBarData/' + id
  }).then((res) => {
    //@ts-ignore
    options.option = res;
    if (!flag && options.option) {
      template.value = markRaw(getTemplateByType(options.option.e_type));
    }
  });
};
getAjax(1);

//根据后台传入e_type获取组件

timer.value = setInterval(() => {
  getAjax(2, true);
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
