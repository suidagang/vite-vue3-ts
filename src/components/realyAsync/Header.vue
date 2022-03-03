<template>
  <div>我是头</div>
  <div v-for="(item, index) in list">{{ item.name }}</div>
</template>

<script setup lang="ts">
import { axios } from '../util/server';
// 正常写法async 和await
// const test = async () => await
//setup语法就可以直接用下面写法
const list = await axios('./data.json');
console.log(list);
</script>

<style scoped></style>
