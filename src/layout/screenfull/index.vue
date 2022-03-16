<template>
  <el-icon class="open-sidebar-icon" @click="toggle">
    <FullScreen />
  </el-icon>
</template>

<script setup lang="ts">
// !原理源码：https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API/Guide
import { useFullscreen } from '@vueuse/core';
import { FullScreen } from '@element-plus/icons';
const { toggle } = useFullscreen();
</script>

<style scoped></style>
