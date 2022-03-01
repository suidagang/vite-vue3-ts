<template>
  <input type="text" v-model="message" />
  <input type="text" v-model="message2" />
  <!-- 多层obj -->
  <input type="text" v-model="message3.a.b.c" />
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';

let message = ref<string>('');
let message2: Ref<string> = ref('');
watch([message, message2], (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
let message3 = ref({
  a: {
    b: {
      c: '123'
    }
  }
});
//!多层嵌套  新旧都是新的值，是个bug
watch(
  message3,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    deep: true,
    immediate: true //页面初始化回执行一次
  }
);
//!reactive 写不写deep：ture 都能监听深层次的对象
</script>

<style scoped></style>
