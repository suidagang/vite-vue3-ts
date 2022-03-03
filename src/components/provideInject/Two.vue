<template>
  <div>
    <div>Two组件</div>
    <div>{{ data }}</div>
    <Three />
    <button @click="changeNum">two改变num</button>
  </div>
</template>

<script setup lang="ts">
import Three from './Three.vue';
import { inject, Ref, ref } from 'vue';
let data = inject<Ref<number>>('num', ref(123));
const changeNum = () => {
  data.value = 2345;
};
</script>

<style scoped></style>
