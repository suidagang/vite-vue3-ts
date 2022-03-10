<template>
  <TestOne msg="测试msg" :list="listArr" @parentClick="parentClick" />
  <button @click="getAjax">发送请求</button>
  <button @click="cancelAjax">取消全部请求</button>
  <button @click="cancelOneAjax">取消单个全部请求</button>
</template>

<script setup lang="ts">
import TestOne from './com/TestOne.vue';
import { reactive } from 'vue';
import {
  comRequest,
  cancelRequest,
  cancelAllRequest
} from '@/utils/http/index';
let listArr: number[] = reactive([1, 2, 3, 4, 5]);
let parentClick = (_massage: string): void => {
  console.log(_massage);
};
// type keys = 'A' | 'B' | 'C' | 'E';
// const result: Record<keys, number> = {
//   A: 1,
//   B: 2,
//   C: 3
// };
// console.log(result);
const cancelOneAjax = () => {
  cancelRequest('/api/posts');
};
const cancelAjax = () => {
  cancelAllRequest();
};
const getAjax = () => {
  comRequest({
    url: '/api/posts',
    //单个请求调用级别单独设置拦截器
    interceptors: {
      requestInterceptors: (res) => {
        return res;
      },
      //直接返回IDataType类型结果中的data属性项
      responseInterceptors: (res) => {
        return res;
      }
    }
  }).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped></style>
