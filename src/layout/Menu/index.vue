<template>
  <div class="menu">
    <div class="sys-name">项目名称</div>
    <el-menu
      background-color="#304156"
      :default-active="activeMenu"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :unique-opened="false"
      :router="true"
      mode="vertical"
    >
      <SidebarItem
        v-for="routeItem in resultRoutes"
        :key="routeItem.path"
        :item="routeItem"
        :base-path="routeItem.path"
      />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SidebarItem from '@/layout/Menu/SidebarItem.vue';
import { useRoute, RouteRecordRaw } from 'vue-router';
import { routes } from '../../router/index';
const resultRoutes = computed(() => {
  let resultArr: RouteRecordRaw[] = [];
  routes.forEach((item) => {
    if (item.path === '/') {
      //@ts-ignore
      resultArr = item?.children;
    }
  });
  return resultArr;
});
const route = useRoute();
const { meta, path } = route;
const activeMenu = computed(() => {
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>

<style lang="less" scoped>
.menu {
  width: 230px;
  background-color: #304156;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden
  // border-right: 1px solid #ccc;
}
.menu::-webkit-scrollbar {
  width: 0 !important;
}
.sys-name {
  height: 60px;
  background: #409eff;
  line-height: 60px;
  text-align: center;
  color: #fff;
  font-size: 28px;
}
</style>
