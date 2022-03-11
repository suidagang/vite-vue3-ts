<template>
  <div
    ref="barRef"
    :class="'bar' + props.index"
    style="width: 100%; height: 100%"
  ></div>
</template>

<script setup lang="ts">
import { EChartOption, ECharts } from 'echarts';
import echarts from '../../plugin/echarts/index';
import { onBeforeMount, onMounted, nextTick, ref, reactive } from 'vue';
import { useEventListener, tryOnUnmounted, useTimeoutFn } from '@vueuse/core';
//echarts实例
let echartInstance: ECharts | null;
interface optionProps {
  xdata: string[];
  seriesData: number[];
}
const props = withDefaults(
  defineProps<{
    index?: number;
    option?: optionProps;
  }>(),
  {
    index: 0,
    option: () => {
      return {
        xdata: ['aa', 'bb', 'cc', 'dd'],
        seriesData: [3, 204, 1079, 1079]
      };
    }
  }
);
let barRef = ref<HTMLElement | null>(null);
interface T {
  option: EChartOption;
}
const options = reactive<T>({
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
});
function initEchartsInstance() {
  console.log('---===');
  const echartsDom = barRef.value;
  // const echartsDom = document.querySelector('.bar' + props.index);
  if (!echartsDom) return;
  //@ts-ignore
  echartInstance = echarts.init(echartsDom);
  echartInstance?.clear(); //清除画布，重新渲染
  echartInstance?.setOption(options.option);
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
tryOnUnmounted(() => {
  if (!echartInstance) return;
  echartInstance.dispose();
  echartInstance = null;
});
</script>

<style scoped></style>
