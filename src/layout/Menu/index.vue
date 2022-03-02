<template>
  <div class="menu">
    左侧菜单
    <ComTree @clickItem="clickItem" msg="测试msg" :menuList="menuList" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ComTree from './Tree.vue';
type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
};
// interface TreeList {
//   name: string;
//   icon?: string;
//   children?: TreeList[] | [];
// }

const clickItem = (item: TreeList) => {
  console.log(item);
};
let menuList = reactive<TreeList[]>([
  {
    name: '1',
    children: [
      {
        name: '1-1',
        children: [
          {
            name: '1-1-1'
          }
        ]
      }
    ]
  },
  {
    name: '2',
    children: [
      {
        name: '2-1'
      }
    ]
  },
  {
    name: '3'
  }
]);
</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
</style>
