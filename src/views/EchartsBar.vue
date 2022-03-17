<template>
  <div class="echarts-page">
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar</div>
      <component :is="template" :option="options.option"></component>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_1</div>
      <component :is="template_1" :option="options_1.option"></component>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_2</div>
      <component :is="template_2" :option="options_2.option"></component>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_3</div>
      <component :is="template_3" :option="options_3.option"></component>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_4</div>
      <component :is="template_4" :option="options_4.option"></component>
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_5</div>
      <!-- <component :is="template_5" :option="options_5.option"></component> -->
    </div>
    <div class="test-bar">
      <div class="title-box">组件名称：ReBar_6</div>
      <!-- <component :is="template_6" :option="options_6.option"></component> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTemplateByType } from '@/components/echarts/componentsList';
import { ref, onUnmounted, reactive, markRaw } from 'vue';
import { comRequest } from '@/utils/http/index';
let timer = ref<any>(null);
let options = reactive<any>({
  option: {
    e_type: ''
  }
});
let options_1 = reactive<any>({
  option: {
    e_type: ''
  }
});
let options_2 = reactive<any>({
  option: {
    e_type: ''
  }
});
let options_3 = reactive<any>({
  option: {
    e_type: ''
  }
});
let options_4 = reactive<any>({
  option: {
    e_type: ''
  }
});
let template = ref<any>(null);
let template_1 = ref<any>(null);
let template_2 = ref<any>(null);
let template_3 = ref<any>(null);
let template_4 = ref<any>(null);
const getAjax = (id: number, flag?: boolean) => {
  comRequest({
    url: '/api/ReBarData/' + id
  }).then((res) => {
    if (res) {
      if (id === 1 || id === 2) {
        options.option = res;
        if (!flag) {
          template.value = markRaw(getTemplateByType(options.option.e_type));
        }
      } else if (id === 3 || id === 4) {
        options_1.option = res;
        if (!flag) {
          template_1.value = markRaw(
            getTemplateByType(options_1.option.e_type)
          );
        }
      } else if (id === 5 || id === 6) {
        options_2.option = res;
        if (!flag) {
          template_2.value = markRaw(
            getTemplateByType(options_2.option.e_type)
          );
        }
      } else if (id === 7 || id === 8) {
        options_3.option = res;
        if (!flag) {
          template_3.value = markRaw(
            getTemplateByType(options_3.option.e_type)
          );
        }
      } else if (id === 9 || id === 10) {
        options_4.option = res;
        if (!flag) {
          template_4.value = markRaw(
            getTemplateByType(options_4.option.e_type)
          );
        }
      }
    }
  });
};
getAjax(1);
getAjax(3);
getAjax(5);
getAjax(7);
getAjax(9);

//根据后台传入e_type获取组件
setTimeout(() => {
  getAjax(2, true);
  getAjax(4, true);
  getAjax(6, true);
  getAjax(8, true);
  getAjax(10, true);
}, 5000);
onUnmounted(() => {
  if (timer.value) {
    // clearInterval(timer.value);
    timer.value = null;
  }
});
</script>

<style lang="less" scoped>
.echarts-page {
  min-height: 100%;
  width: 100%;
  background: #01145e;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.title-box {
  color: #fff;
}
.test-bar {
  width: 49%;
  height: 250px;
  overflow: hidden;
  border: 1px solid red;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 30px;
}
</style>
