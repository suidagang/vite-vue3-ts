<template>
  <div class="content">
    内容区域
    <CountBotton />
  </div>
</template>

<script setup lang="ts">
import CountBotton from '../../components/pinia/CountBotton.vue';
</script>

<style lang="less" scoped>
.content {
  margin: 20px;
  border: 1px solid #ccc;
  overflow: hidden;
  flex: 1;
}
</style>
