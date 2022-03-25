<template>
  <div class="content">
    <CountBotton />
  </div>
</template>

<script setup lang="ts">
import CountBotton from '@/components/pinia/CountBotton.vue';
</script>

<style lang="less" scoped>
.content {
  overflow: hidden;
  margin: 20px;
  border: 1px solid #cccccc;
  flex: 1;
}
</style>
