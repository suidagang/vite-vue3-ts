<template>
  <el-icon>
    <component :is="icon">
      <slot />
    </component>
  </el-icon>
  <span>{{ title }}</span>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string;
    title: string;
  }>(),
  { title: '默认' }
);
// defineProps({
//   icon: {
//     type: String,
//     default: ''
//   },
//   title: {
//     type: String,
//     default: ''
//   }
// });
</script>

<style lang="less" scoped>
.sub-el-icon {
  width: 1em;
  height: 1em;
  color: currentcolor;
}
</style>
