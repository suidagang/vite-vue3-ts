<template>
  <div class="test-bar">
    <ReBar />
  </div>
  <div class="test-bar">
    <ReBar :option="option" />
  </div>
</template>

<script setup lang="ts">
import ReBar from '@/components/echarts/ReBar.vue';
import { ref, onUnmounted } from 'vue';
let timer = ref<any>(null);
let option = {
  xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
  seriesData: [22, 33, 55, 88]
};
timer.value = setInterval(() => {
  option = {
    xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
    seriesData: [22, 33, 11, 34]
  };
}, 100000);
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
