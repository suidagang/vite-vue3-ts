<template>
  <template v-if="!props.item.children || props.item.children.length <= 0">
    <el-menu-item :index="props.item.path">
      <item :icon="props?.item?.meta?.icon" :title="props?.item?.meta?.title" />
    </el-menu-item>
  </template>
  <el-sub-menu v-else class="submenu-title" :index="props.item.path">
    <template #title>
      <item :icon="props?.item?.meta?.icon" :title="props?.item?.meta?.title" />
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
</script>

<style lang="less" scoped>
@import '@/theme/menu-vars.less';
</style>
