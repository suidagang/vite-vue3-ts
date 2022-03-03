<template>
  <div class="footer">
    我是footer子组件
    <slot name="only"></slot>
    <div>隔开</div>
    <slot name="onlyOne"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100px;
  background: yellow;
}
</style>
