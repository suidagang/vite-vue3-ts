<template>
  <div ref="barRef" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
// echarts ts 定义
import { EChartOption, ECharts } from 'echarts';
// 引入公共的echarts组件（按需实现)
import echarts from '@/plugin/echarts/index';
import { onBeforeMount, onMounted, nextTick, ref, watch } from 'vue';
import { useEventListener, tryOnUnmounted, useTimeoutFn } from '@vueuse/core';
import { isEqual } from 'lodash-unified';
//echarts实例
let echartInstance: ECharts | null;
interface optionProps {
  xdata: string[];
  seriesData: number[];
}
const props = withDefaults(
  defineProps<{
    option?: optionProps;
  }>(),
  {
    option: () => {
      return {
        xdata: ['aa', 'bb', 'cc', 'dd'],
        seriesData: [3, 204, 1079, 1079]
      };
    }
  }
);
let barRef = ref<HTMLElement | null>(null);
const options = {
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      bottom: '20%',
      height: '68%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0
        },
        data: props.option && props.option.xdata
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'GitHub信息',
        type: 'bar',
        data: props.option && props.option.seriesData
      }
    ]
  }
};

function initEchartsInstance() {
  if (echartInstance != null && echartInstance != undefined) {
    echartInstance.dispose(); //解决echarts dom已经加载的报错
  }
  const echartsDom = barRef.value;
  if (!echartsDom) return;
  //@ts-ignore
  echartInstance = echarts.init(echartsDom);
  echartInstance?.clear(); //清除画布，重新渲染
  echartInstance?.setOption(options.option as EChartOption);
}
onBeforeMount(() => {
  nextTick(() => {
    initEchartsInstance();
  });
});
onMounted(() => {
  nextTick(() => {
    useEventListener('resize', () => {
      if (!echartInstance) return;
      useTimeoutFn(() => {
        echartInstance?.resize();
      }, 100);
    });
  });
});
// 监听入参有变化就重新刷新
watch(
  () => props.option,
  (newProps, oldProps) => {
    let flag: boolean = isEqual(newProps, oldProps);
    if (!flag) {
      nextTick(() => {
        options.option.xAxis[0].data = newProps.xdata;
        options.option.series[0].data = newProps.seriesData;
        initEchartsInstance();
      });
    }
  }
);

tryOnUnmounted(() => {
  if (!echartInstance) return;
  echartInstance.dispose();
  echartInstance = null;
});
</script>

<style scoped></style>
