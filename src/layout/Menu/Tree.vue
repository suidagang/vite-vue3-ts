<!-- 递归组件 -->
<template>
  <div class="menu-box" style="margin-left: 30px">
    <div
      @click.stop="clickItem(item)"
      v-for="(item, index) in menuList"
      :key="index"
    >
      {{ item.name }}
      <TreeItem
        @clickItem="clickItem"
        v-if="item?.children?.length"
        :menuList="item.children"
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
