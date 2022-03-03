<template>
  <div>我是根组件</div>
  <One />
</template>

<script setup lang="ts">
//!provide inject解决props深度传参的问题  要传响应式值需要ref或者reactive封装
import { ref, provide } from 'vue';
import One from './provideInject/One.vue';
let num = ref<Number>(123);
provide('num', num);
</script>

<style scoped></style>
