<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <span v-if="index != 0" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <a v-else href="/"> {{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';
const route = useRoute();
let levelList = ref<RouteLocationMatched[]>([]);
const getBreadcrumb = () => {
  let matched = route.matched;
  levelList.value = matched;
};
watch(
  () => route.path,
  () => getBreadcrumb(),
  { deep: true, immediate: true }
);
</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-leave-active {
  position: absolute;
}
</style>
