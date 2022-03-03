<template>
  <input v-model="message" type="text" />
  <input v-model="message2" type="text" />
  <!-- 多层obj -->
  <input v-model="message3.a.b.c" type="text" />
  <input v-model="obj.name" type="text" />
</template>

<script setup lang="ts">
import { reactive, Ref, ref, watch } from 'vue';

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

//!reactive 单独属性监听
let obj = reactive({
  name: '眭刚',
  age: '32'
});
watch(
  () => obj.name,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
</script>

<style scoped></style>
