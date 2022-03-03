<template>
  <div class="content">
    <div v-for="(item, index) in data" :key="index" style="color: #fff">
      <slot :data="item" :index="index">{{ item.name }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type names = {
  name: string;
  age: number;
};
const data = reactive<names[]>([
  {
    name: '测试1',
    age: 18
  },
  {
    name: '测试2',
    age: 19
  },
  {
    name: '测试3',
    age: 20
  },
  {
    name: '测试4',
    age: 21
  }
]);
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100px;
  background: blue;
}
</style>
