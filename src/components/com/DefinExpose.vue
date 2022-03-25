<template>
  <div>{{ msg }}</div>
  <div>{{ num }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Child msg');
const num = ref(123);
/* eslint-disable */
const handle = (): void => {
  alert('暴露子组件');
};

defineExpose({
  msg,
  num
});
</script>

<style scoped></style>
