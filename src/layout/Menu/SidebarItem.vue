<template>
  <template v-if="!props.item.children || props.item.children.length <= 0">
    <!-- <app-link :to="test(item)"> -->
    <el-menu-item :index="props.item.path">
      <item :icon="props.item.meta.icon" :title="props.item.meta.title" />
    </el-menu-item>
    <!-- </app-link> -->
  </template>
  <el-sub-menu v-else class="submenu-title" :index="props.item.path">
    <template #title>
      <item :title="props?.item?.meta?.title" />
    </template>
    <sidebar-item
      v-for="child in props.item.children"
      :key="child.path"
      :item="child"
      :base-path="props.item.path"
    ></sidebar-item>
  </el-sub-menu>
</template>
<script lang="ts">
export default {
  name: 'SidebarItem'
};
</script>
<script setup lang="ts">
import Item from './Item.vue';
import { RouteRecordRaw } from 'vue-router';

const props = withDefaults(
  defineProps<{
    item: RouteRecordRaw;
    basePath: string;
  }>(),
  {}
);
// defineProps({
//   item: {
//     type: Object,
//     require: true
//   },
//   basePath: {
//     type: String,
//     default: ''
//   }
// });

// const test = (item) => {
//   return item.path;
// };
</script>

<style scoped></style>
