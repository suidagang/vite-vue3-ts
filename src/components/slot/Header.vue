<template>
  <div class="header">
    <slot name="first"></slot>
    匿名插槽子组件
    <slot></slot>
    <slot name="next"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100px;
  background: pink;
}
</style>
