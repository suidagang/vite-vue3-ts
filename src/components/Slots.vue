<template>
  <!-- 匿名插槽 v-slot必须写在template上-->
  <!-- 具名插槽 -->
  <Header>
    <!-- 简写v-slot: => #first -->
    <!-- <template v-slot:first> 我最先插入 </template> -->
    <template #first> 我最先插入 </template>
    <template v-slot>
      <div>我是匿名插槽的父组件</div>
    </template>
    <template v-slot:next> 我最后插入 </template>
  </Header>
  <!-- 作用域插槽 -->
  <Content>
    <!-- 简写 v-slot= ====> #default -->
    <template v-slot="{ data, index }">
      <div>{{ data.name }}--{{ index }}--{{ data.age }}</div>
    </template>
  </Content>
  <!-- 动态插槽 -->
  <Footer>
    <template #[name]>
      <div>我在那</div>
    </template>
  </Footer>
</template>

<script setup lang="ts">
import Header from './slot/Header.vue';
import Content from './slot/Content.vue';
import Footer from './slot/Footer.vue';
import { ref } from 'vue';
let name = ref('only');
setTimeout(() => {
  name.value = 'onlyOne';
}, 3000);
</script>

<style scoped></style>
