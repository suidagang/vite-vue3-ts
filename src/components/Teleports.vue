<template>
  <div>我是传送组件</div>
  <teleport to="body">
    <div style="position: absolute; top: 0; color: red">loading....</div>
  </teleport>
</template>

<script setup lang="ts">
// !Teleport 是一种能够将我们的模板渲染至指定DOM节点，不受父级style、v-show等属性影响，但data、prop数据依旧能够共用的技术；
</script>

<style scoped></style>
