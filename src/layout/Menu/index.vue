<template>
  <div class="menu" :class="{ isCollapse: siderbarIsopen }">
    <div class="sys-name">大屏组件项目</div>
    <div class="sidebar-menu">
      <el-menu
        :collapse="siderbarIsopen"
        background-color="#304156"
        text-color="#bfcbd9"
        :default-active="route.path"
        :unique-opened="true"
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SidebarItem from '@/layout/Menu/SidebarItem.vue';
import { useRoute } from 'vue-router';
import { routes } from '../../router/index';
import { RouteConfigs } from '../types';
import { storeToRefs } from 'pinia';
import { menuStore } from '@/store/menu';
const store = menuStore();
const { siderbarIsopen } = storeToRefs(store);

const resultRoutes = computed(() => {
  let resultArr: RouteConfigs[] = [];
  routes.forEach((item) => {
    if (item.path === '/') {
      // 如果没有？？ 默认为数组
      resultArr = item?.children ?? [];
    }
  });
  return resultArr;
});
const route = useRoute();
</script>

<style lang="less" scoped>
.isCollapse {
  width: 64px;
  transition: width 0.4s;
}
</style>
