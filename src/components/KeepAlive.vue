<template>
  <div>keep-alive</div>
</template>

<script setup lang="ts">
// !有时候我们不希望组件被重新渲染影响使用体验；或者处于性能考虑，避免多次重复渲染降低性能。
// !而是希望组件可以缓存下来,维持当前的状态。这时候就需要用到keep-alive组件。

// !开启keep-alive 生命周期的变化

// !初次进入时： onMounted> onActivated
// !退出后触发 deactivated
// !再次进入：
// !只会触发 onActivated
// !事件挂载的方法等，只执行一次的放在 onMounted中；组件每次进去执行的方法放在 onActivated中
</script>

<style scoped></style>
