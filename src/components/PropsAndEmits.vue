<template>
  <TestOne msg="测试msg" :list="listArr" @parentClick="parentClick" />
</template>

<script setup lang="ts">
import TestOne from './com/TestOne.vue';
import { reactive } from 'vue';
let listArr: number[] = reactive([1, 2, 3, 4, 5]);
let parentClick = (_massage: string): void => {
  alert(_massage);
};
</script>

<style scoped></style>
