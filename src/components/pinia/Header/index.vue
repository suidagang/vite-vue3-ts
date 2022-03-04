<template>
  <div class="header">
    头部区域{{ num }}--count:{{ count }}--phone:{{ phoneHid }}
  </div>
</template>

<script setup lang="ts">
import { mainStore } from '@/store/index';
import { storeToRefs } from 'pinia';
const store = mainStore();
const { num, count, phoneHid } = storeToRefs(store);
// console.log(count.value);
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  border-bottom: 1px solid #ccc;
}
</style>
