import { defineAsyncComponent } from 'vue';

/**
 * 公共引入组件库
 * @date 2022-03-14
 * @returns {any}
 */
const componentsList = {
  ReBar: () => import('@/components/echarts/bar/ReBar.vue'),
  ReBar_1: () => import('@/components/echarts/bar/ReBar_1.vue'),
  ReBar_2: () => import('@/components/echarts/bar/ReBar_2.vue'),
  ReBar_3: () => import('@/components/echarts/bar/ReBar_3.vue'),
  ReBar_4: () => import('@/components/echarts/bar/ReBar_4.vue')
};
export const getTemplateByType = (e_type: string) => {
  return defineAsyncComponent(
    (() => {
      // in 判断对象是否是数组/对象的元素/属性
      if (e_type && e_type in componentsList) {
        //@ts-ignore
        return componentsList[e_type];
      } else {
        return '';
      }
    })()
  );
};
