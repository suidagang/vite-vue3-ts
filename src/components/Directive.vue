<template>
  <div v-numAnimation="{ num: num, circulationTime: 2 }"></div>
  <button @click="changeNum">点击改变数据</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let num = ref<number>(100);
let changeNum = () => {
  num.value = 1000;
};
</script>

<style scoped></style>
