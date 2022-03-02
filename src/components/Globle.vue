<!-- 全局组件 -->
<template>
  <div class="globle-box">
    <span class="text">全局组件</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.globle-box {
  width: 100px;
  height: 100px;
  background: pink;
  text-align: center;
  line-height: 100px;
  border-radius: 50px;
  &-text {
    font-size: 14px;
    color: purple;
  }
}
</style>
