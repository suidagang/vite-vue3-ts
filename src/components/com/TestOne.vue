<template>
  <div>{{ props.msg }}</div>
  <div v-for="(item, index) in props.list" :key="index" @click="parentEmit">
    {{ item }}
  </div>
</template>

<script setup lang="ts">
// 第一种
// defineProps({
//   msg: {
//     type: String,
//     require: true,
//     default: 'hello'
//   },
//   list: Array
// });

//第二种 泛型
const props = withDefaults(
  defineProps<{
    msg: string;
    list: Array<number>;
  }>(),
  { msg: 'hello', list: () => [1, 2] }
);
//第一种
// const emits = defineEmits(['parentClick']);

//第二种
const emits = defineEmits<{
  (e: 'parentClick', data: string): void;
}>();
let parentEmit = (): void => {
  emits('parentClick', '我是子组件');
};
</script>

<style scoped></style>
