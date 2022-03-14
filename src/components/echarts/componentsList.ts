import { defineAsyncComponent } from 'vue';

/**
 * 公共引入组件库
 * @date 2022-03-14
 * @returns {any}
 */
const componentsList = {
  ReBar: () => import('@/components/echarts/ReBar.vue')
};
export const getTemplateByType = (e_type: string) => {
  return defineAsyncComponent(
    (() => {
      if (e_type && e_type in componentsList) {
        return componentsList[e_type];
      } else {
        return '';
      }
    })()
  );
};
