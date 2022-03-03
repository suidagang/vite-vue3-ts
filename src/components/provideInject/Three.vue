<template>
  <div>最后three组件</div>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
let data = inject('num');
</script>

<style scoped></style>
