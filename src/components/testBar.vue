<template>
  <div class="test-bar">
    <ReBar />
  </div>
  <div class="test-bar">
    <ReBar :option="options.option" />
  </div>
</template>

<script setup lang="ts">
import ReBar from '@/components/echarts/ReBar.vue';
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
.test-bar {
  width: 50%;
  height: 250px;
  overflow: hidden;
}
</style>
