<template>
  <DefinExpose ref="child" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DefinExpose from './com/DefinExpose.vue';
let child = ref<{ msg: string; handle: () => void }>();
onMounted(() => {
  //   console.log(child.value);
  child.value!.msg = '父组件修改'; // !为断言，防止为空报错
  // child.value?.handle();
});
</script>

<style scoped></style>
