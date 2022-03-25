<!-- 动态组件以及异步组件 -->
<template>
  <div class="tab">
    <div
      v-for="item in data"
      :key="item.name"
      class="list"
      @click="choiceList(item)"
    >
      {{ item.name }}
    </div>
  </div>
  <component :is="current.comName"></component>
</template>

<script setup lang="ts">
import One from './async/one.vue';
import Two from './async/two.vue';
import Three from './async/three.vue';
import { reactive, markRaw } from 'vue';
type Tabs = {
  name: string;
  comName: any;
};
//markRaw 解决报警 跳过proxy代理
const data = reactive<Tabs[]>([
  { name: '我是组件One', comName: markRaw(One) },
  { name: '我是组件Two', comName: markRaw(Two) },
  { name: '我是组件Three', comName: markRaw(Three) }
]);
//从Tabs 中获取comName属性的定义
type Com = Pick<Tabs, 'comName'>;

let current = reactive<Com>({
  comName: data[0].comName
});
const choiceList = (item: Tabs) => {
  current.comName = item.comName;
};
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: center;
}
.list {
  width: 80px;
  height: 40px;
  border: 1px solid #cccccc;
}
</style>
