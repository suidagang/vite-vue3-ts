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
import { isEqual, merge } from 'lodash-unified';
import {
  optionBarProps,
  basicOptions
} from '@/components/echarts/bar/types/comBar';
//echarts实例
let echartInstance: ECharts | null;
const props = withDefaults(
  defineProps<{
    option?: optionBarProps;
  }>(),
  {
    option: () => {
      //合并对象
      return basicOptions;
    }
  }
);
let barRef = ref<HTMLElement | null>(null);
const options = {
  option: {
    color: props.option && props.option.barColor,
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
          color: props.option && props.option.axisLabelColor, // 刻度标签文字的颜色
          fontSize: props.option && props.option.axisLabelFontSize, // 文字字体大小
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
        name: props.option && props.option.yName, // 坐标轴名称
        nameTextStyle: {
          color: props.option && props.option.yNameColor,
          padding: [40, 48, 0, 8],
          fontSize: props.option && props.option.yNameFontSize
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
          color: props.option && props.option.yxisLabelColor,
          fontSize: props.option && props.option.yxisLabelFontSize
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
        barWidth: props.option && props.option.barWidth
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
    changeOptions(props.option);
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
//合并入参，并改变options中的值
const changeOptions = (newObj: optionBarProps) => {
  // 需要合并对象，所以需要全量属性
  type resultObjProps = Required<optionBarProps>;
  let resultObj = merge(basicOptions, newObj) as resultObjProps;
  options.option.xAxis[0].data = resultObj.xdata;
  options.option.series[0].data = resultObj.seriesData;
  options.option.color = resultObj.barColor;
  options.option.xAxis[0].axisLabel.color = resultObj.axisLabelColor;
  options.option.xAxis[0].axisLabel.fontSize = resultObj.axisLabelFontSize;
  options.option.yAxis[0].name = resultObj.yName;
  options.option.yAxis[0].nameTextStyle.color = resultObj.yNameColor;
  options.option.yAxis[0].nameTextStyle.fontSize = resultObj.yNameFontSize;
  options.option.yAxis[0].axisLabel.color = resultObj.yxisLabelColor;
  options.option.yAxis[0].axisLabel.fontSize = resultObj.yxisLabelFontSize;
  options.option.series[0].barWidth = resultObj.barWidth;
};
// 监听入参有变化就重新刷新
watch(
  () => props.option,
  (newProps, oldProps) => {
    let flag: boolean = isEqual(newProps, oldProps);
    if (!flag) {
      nextTick(() => {
        changeOptions(newProps);
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
