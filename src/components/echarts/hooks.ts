// echarts ts 定义
import { EChartOption, ECharts } from 'echarts';
// 引入公共的echarts组件（按需实现)
import echarts from '@/plugin/echarts/index';
import { watch } from 'vue';
import { useEventListener, tryOnUnmounted, useThrottleFn } from '@vueuse/core';
import { isEqual } from 'lodash-unified';
export function useInitEcharts(
  echartsDom: HTMLElement,
  changeOptions: Function,
  props: any,
  options: any
) {
  //echarts实例
  let echartInstance: ECharts | null;
  function initEchartsInstance() {
    if (echartInstance != null && echartInstance != undefined) {
      echartInstance.dispose(); //解决echarts dom已经加载的报错
    }
    if (!echartsDom) return;
    //@ts-ignore
    echartInstance = echarts.init(echartsDom);
    echartInstance?.clear(); //清除画布，重新渲染
    echartInstance?.setOption(options.option as EChartOption);
  }

  changeOptions(props.option);
  initEchartsInstance();
  const throttledFn = useThrottleFn(() => {
    if (!echartInstance) return;
    echartInstance?.resize();
  }, 100);
  useEventListener('resize', throttledFn);
  // 监听入参有变化就重新刷新
  watch(
    () => props.option,
    (newProps, oldProps) => {
      const flag: boolean = isEqual(newProps, oldProps);
      if (!flag) {
        changeOptions(newProps);
        initEchartsInstance();
      }
    }
  );
  //页面摧毁清除echarts对象
  tryOnUnmounted(() => {
    if (!echartInstance) return;
    echartInstance.dispose();
    echartInstance = null;
  });
}
