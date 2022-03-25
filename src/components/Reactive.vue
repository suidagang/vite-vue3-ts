<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div>{{ obj }}</div>
  <div>{{ msgq }}</div>
  <button @click="change1">1</button>
  <button @click="change2">2</button>
</template>
<script setup lang="ts">
import { reactive, ref, shallowReactive } from 'vue';
// defineProps<{ msg: string }>();

let a = ref<number>(222);
a.value = 333;
let arr1 = reactive<string[]>(['1', '2', '3']);
arr1.forEach(() => {});
interface T {
  list: number[];
}
// type T = {
//   list: number[];
// };
let obj = reactive<T>({
  list: [1]
});
//!shallowReactive：只能改第一层，dom挂载后只改变值，不能改变dom
let msgq = shallowReactive({
  test: '小满',
  nav: {
    bar: {
      name: '我是谁'
    }
  }
});
const change1 = () => {
  msgq.test = '我改变了';
};
const change2 = () => {
  msgq.nav.bar.name = '我是眭刚';
};
// change1();
// change2();
</script>
<style scoped>
a {
  color: #42b983;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}
code {
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
  background-color: #eeeeee;
}
</style>
