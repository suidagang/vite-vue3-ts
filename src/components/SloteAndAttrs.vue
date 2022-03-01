<template>
  <TestTwo a="1" b="2" class="parentClass" style="color: red">
    <template #header>我是父组件插槽</template>
  </TestTwo>
</template>

<script setup lang="ts">
import TestTwo from './com/testTwo.vue';
</script>

<style scoped></style>
