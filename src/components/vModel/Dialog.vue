<template>
  <div v-if="modelValue" class="dialog">
    <div class="dialog-header">
      <div>标题---{{ title }}</div>
      <div @click="close">x</div>
    </div>
    <div class="dialog-content">内容</div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: boolean;
  title: string;
  modelModifiers?: {
    default: () => {};
  };
  titleModifiers?: {
    default: () => {};
  };
};
let propData = defineProps<Props>();
let emit = defineEmits(['update:modelValue', 'update:title']);

const close = () => {
  //propData.modelModifiers 可以拿到这个值做相应的处理
  console.log(propData.modelModifiers);
  console.log(propData.titleModifiers);
  emit('update:modelValue', false);
  emit('update:title', '我是传过来的');
};
</script>

<style lang="less" scoped>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border: 1px solid #cccccc;
  transform: translate(-50%, -50%);
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
  }
  &-content {
    padding: 10px;
  }
}
</style>
