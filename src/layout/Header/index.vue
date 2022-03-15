<template>
  <div class="header">
    <el-icon class="open-sidebar-icon" @click="changeSiderbarState">
      <Fold />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { Fold } from '@element-plus/icons';
import { storeToRefs } from 'pinia';
import { menuStore } from '@/store/menu';
const store = menuStore();
const { siderbarIsopen } = storeToRefs(store);
const changeSiderbarState = () => {
  siderbarIsopen.value = !siderbarIsopen.value;
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  line-height: 60px;
  display: flex;
  align-items: center;
}
.open-sidebar-icon {
  font-size: 32px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
