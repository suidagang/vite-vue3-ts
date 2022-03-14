<template>
  <div class="echarts-page">
    <div class="test-line">
      <ReLine />
    </div>
    <div class="test-bar">
      <ReBar :option="options.option" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReBar from '@/components/echarts/ReBar.vue';
import ReLine from '@/components/echarts/ReLine.vue';
import { ref, onUnmounted, reactive } from 'vue';
let timer = ref<any>(null);
let options = reactive({
  option: {
    xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
    seriesData: [22, 33, 55, 88]
  }
});
timer.value = setInterval(() => {
  options.option = {
    xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
    seriesData: [123, 33, 11, 34]
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
}
.test-line {
  width: 50%;
  height: 250px;
  overflow: hidden;
}
.test-bar {
  width: 50%;
  height: 250px;
  overflow: hidden;
}
</style>
