<template>
  <div>
    <div>子组件</div>
    <slot name="header"></slot>
  </div>
</template>

<script setup lang="ts">
import { useSlots, onMounted, useAttrs } from 'vue';
defineProps({
  a: {
    type: [Number, String],
    require: true
  }
});
const slots = useSlots(); //获取传过来的dom
const attrs = useAttrs(); //(除了props的参数)
onMounted(() => {
  console.log(slots.header && slots.header());
  console.log(attrs);
});
</script>

<style scoped></style>
