<template>
  <div>
    <div>one组件</div>
    <div>{{ data }}</div>
    <Two />
  </div>
</template>

<script setup lang="ts">
import Two from './Two.vue';
import { inject } from 'vue';
let data = inject('num');
</script>

<style scoped></style>
