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
    color: ['#00FFF6'],
    // tooltip: { }//提示框组件
    grid: {
      bottom: '10%',
      left: '10%',
      containLabel: true //设置containLabel: true常用于 防止标签溢出，计算距离时候会计算容器边到标签的距离，否则计算容器边缘到刻度线的距离。
    },
    xAxis: [
      {
        show: true, // 是否显示 x 轴
        type: 'category', // 坐标轴类型
        position: 'bottom', // x 轴的位置（'top'，'bottom'）
        axisLine: {
          show: true, // 是否显示坐标轴轴线
          lineStyle: {
            color: '#fff', // 坐标轴线线的颜色
            width: '1' // 坐标轴线线宽
          }
        },
        axisTick: {
          show: false, // 是否显示坐标轴刻度
          inside: true, // 坐标轴刻度是否朝内，默认朝外
          length: 5, // 坐标轴刻度的长度
          lineStyle: {
            color: '#FFF', // 刻度线的颜色
            width: 10, // 坐标轴刻度线宽
            type: 'solid' // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
          }
        },
        axisLabel: {
          show: true, // 是否显示刻度标签
          margin: 12, // 刻度标签与轴线之间的距离
          color: 'rgb(255,255,255)', // 刻度标签文字的颜色
          fontSize: '16', // 文字字体大小
          align: 'center', // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
          verticalAlign: 'middle' // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
        },
        data: props.option && props.option.xdata
      }
    ],
    yAxis: [
      {
        show: true, // 是否显示 Y轴
        type: 'value', //('value''category''time''log')
        name: '(笔)', // 坐标轴名称
        nameTextStyle: {
          color: '#fff',
          padding: [40, 48, 0, 8],
          fontSize: 16
        },
        axisLine: {
          // 坐标轴刻度相关设置。
          show: true,
          lineStyle: {
            // 刻度线的样式设置。
            color: '#fff', // 刻度线的颜色，默认取 axisTick.lineStyle.color。
            width: 1
          }
        }, // 坐标轴轴线相关设置。
        axisTick: {
          show: false
        },
        axisLabel: {
          // 坐标轴刻度标签的相关设置。
          show: true,
          color: '#fff',
          fontSize: 16
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        type: 'bar',
        data: props.option && props.option.seriesData,
        barWidth: '29'
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
