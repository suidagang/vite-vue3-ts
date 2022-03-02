<template>
  <div class="sys">
    <Menu />
    <div class="sys-right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue';
import Content from './Content/index.vue';
import Header from './Header/index.vue';
</script>

<style lang="less" scoped>
.sys {
  height: 100%;
  display: flex;
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
