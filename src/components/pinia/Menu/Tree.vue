<!-- 递归组件 -->
<template>
  <div class="menu-box" style="margin-left: 30px">
    <div
      v-for="(item, index) in menuList"
      :key="index"
      @click.stop="clickItem(item)"
    >
      {{ item.name }}
      <!-- ?语法解析：解决报错 ?? （双问号）还可以赋值 -->
      <TreeItem
        v-if="item?.children?.length"
        :menu-list="item.children"
        @clickItem="clickItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TreeItem'
};
</script>
<script setup lang="ts">
type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
};
defineProps<{
  menuList: TreeList[];
}>();
const emits = defineEmits(['clickItem']);
const clickItem = (item: TreeList) => {
  emits('clickItem', item);
};
</script>

<style scoped></style>
