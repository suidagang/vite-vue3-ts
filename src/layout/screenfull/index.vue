<template>
  <el-icon class="open-sidebar-icon" @click="toggle">
    <FullScreen />
  </el-icon>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
import { FullScreen } from '@element-plus/icons';
const { toggle } = useFullscreen();
</script>

<style scoped></style>
