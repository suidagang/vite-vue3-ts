<template>
  <h1>{{ msg }}</h1>
  <div>{{ obj }}</div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
defineProps<{ msg: string }>();

// interface T{
// 	list:number[]
// }
let a = ref<number>(222);
a.value = 333;
let arr1 = reactive<string[]>(['1', '2', '3']);
arr1.forEach(() => {});
type T = {
  list: number[];
};
let obj = reactive<T>({
  list: [1]
});
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
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
