<template>
  <div>
    <button @click="addCount">修改数据</button>
    <div>phone--{{ phoneHid }}</div>
    <button @click="getList">获取列表</button>
    <div v-for="item in listObj.list" :key="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from '../../store/index';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
const store = mainStore();
const { phoneHid } = storeToRefs(store);
type listType = {
  list: string[];
};
let listObj = reactive<listType>({
  list: []
});
const getList = () => {
  listObj.list = store.getList();
};
//! 第一种方式
// const addCount = () => {
//   store.count++;
// };
//! 第二种方式：$patch（优点：多数据修改:官方有所优化（性能问题）
// const addCount = () => {
//   store.$patch({
//     count: store.count + 2,
//     num: store.num === '测试' ? '345' : '测试'
//   });
// };
//! 第三种方式：$patch 传递函数
// const addCount = () => {
//   store.$patch((state) => {
//     store.count++;
//     state.num = store.num === '测试' ? '3452' : '测试';
//   });
// };

//! 第四种方式(复杂逻辑)：actions
const addCount = () => {
  store.changeState();
};
</script>

<style scoped></style>
