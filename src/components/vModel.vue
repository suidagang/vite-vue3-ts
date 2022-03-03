<template>
  <button @click="flag = !flag">切换</button>
  <div>{{ title }}</div>
  <!-- 新增自定义修饰符，以及多个v-model -->
  <Dialog v-model.suigang="flag" v-model:title.test="title" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from './vModel/Dialog.vue';
let flag = ref<boolean>(true);
let title = ref<string>('我是标题');
</script>

<style scoped></style>
