<template>
  <div class="person-list">
    <div class="l-img"></div>
    <div class="r-box">
      <div class="top-arr">
        <span v-for="(item, index) in props.list.title" :key="index">{{
          item
        }}</span>
      </div>
      <div class="r-text">
        {{ props.list.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface ListType {
  title: string[];
  text: string;
}
const props = withDefaults(
  defineProps<{
    list: ListType;
  }>(),
  {
    list: () => {
      return { title: [], text: '' };
    }
  }
);

let arr = reactive<string[]>(['王婷婷', '女', '汉族', '本科学历', '中共党员']);
</script>

<style lang="less" scoped>
.person-list {
  display: flex;
  overflow: hidden;
  padding: 15px 10px 10px;
  width: 100%;
  height: 143px;
  border: 1px solid rgb(69 116 214 / 60%);
  border-radius: 5px;
  box-shadow: inset 0 0 15px rgb(10 67 188 / 100%);
  box-sizing: border-box;
  .l-img {
    margin-right: 12px;
    width: 76px;
    height: 110px;
    background: red;
  }
  .r-box {
    flex: 1;
    overflow: hidden;
    .top-arr {
      overflow: hidden;
      margin-bottom: 15px;
      height: 20px;
      font-size: 18px;
      color: #ecedff;
      & > span {
        margin-right: 8px;
        font-size: 16px;
      }
      & > span:last-child {
        margin-right: 0;
      }
    }
    .r-text {
      font-size: 16px;
      color: #f2f3ff;
      line-height: 26px;
    }
  }
}
</style>
