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
  optionBarProps_3,
  basicOptions_3
} from '@/components/echarts/bar/types/comBar';
//echarts实例
let echartInstance: ECharts | null;
const props = withDefaults(
  defineProps<{
    option?: optionBarProps_3;
  }>(),
  {
    option: () => {
      return basicOptions_3;
    }
  }
);

let barRef = ref<HTMLElement | null>(null);
const options = {
  option: {
    color: [],
    grid: {
      bottom: '5%',
      left: '5%',
      right: '5%',
      top: '10%',
      containLabel: true //设置containLabel: true常用于 防止标签溢出，计算距离时候会计算容器边到标签的距离，否则计算容器边缘到刻度线的距离。
    },
    //图例设置
    legend: {
      show: false //是否显示
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [
      {
        show: true, // 是否显示 Y轴
        type: 'category', //('value''category''time''log')
        axisLine: {
          // 坐标轴刻度相关设置。
          show: false
        }, // 坐标轴轴线相关设置。
        axisTick: {
          show: false
        },
        axisLabel: {
          // 坐标轴刻度标签的相关设置。
          show: true,
          color: '#fff',
          fontSize: '16',
          formatter: (value: string) => {
            value = value.length > 7 ? value.substring(0, 7) + '...' : value;
            return value;
          }
        },
        splitLine: {
          show: false
        },
        data: ['测试1', '测试2', '测试3']
      },
      {
        type: 'category',
        // inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
          color: '#ffffff',
          fontSize: '16',
          formatter: (value: number) => {
            return '{a|' + value + '}万元';
          },
          rich: {
            a: {
              color: '#ffff00',
              fontSize: 20
            }
          }
        },
        data: [1, 2, 3]
      }
    ],
    series: [
      {
        name: '数量',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          borderRadius: [30, 30, 30, 30],
          color: '#00AAFF'
        },
        barWidth: 15,
        data: [1, 2, 3]
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 15,
        barGap: '-100%',
        data: [3, 3, 3],
        itemStyle: {
          color: 'rgba(1,255,255,0.3)',
          borderRadius: [30, 30, 30, 30]
        }
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
const changeOptions = (newObj: optionBarProps_3) => {
  // 需要合并对象，所以需要全量属性
  type resultObjProps = Required<optionBarProps_3>;
  let resultObj: resultObjProps = merge(
    basicOptions_3,
    newObj
  ) as resultObjProps;
  console.log(resultObj.e_type, 'resultObj');
  //通过后台数据计算所需的数据
  let valueList: number[] = [];
  let nameList: any[] = [];
  resultObj.listData.forEach((item) => {
    nameList.push(item.name);
    valueList.push(item.value);
  });
  let maxData = Math.max(...valueList);

  let bgMaxData = new Array(valueList.length).fill(maxData);
  options.option.series[0].barWidth = resultObj.barWidth;
  options.option.series[1].barWidth = resultObj.barWidth;
  options.option.series[0].itemStyle.borderRadius = [
    resultObj.barWidth,
    resultObj.barWidth,
    resultObj.barWidth,
    resultObj.barWidth
  ];
  options.option.series[1].itemStyle.borderRadius = [
    resultObj.barWidth,
    resultObj.barWidth,
    resultObj.barWidth,
    resultObj.barWidth
  ];
  options.option.yAxis[0].axisLabel.color = resultObj.yxisLabelColorLeft;
  options.option.yAxis[0].axisLabel.fontSize = resultObj.yxisLabelFontSizeLeft;
  options.option.yAxis[1].axisLabel.color = resultObj.yxisLabelColorRight;
  options.option.yAxis[1].axisLabel.fontSize = resultObj.yxisLabelFontSizeRight;
  options.option.series[0].itemStyle.color = resultObj.barColor;
  options.option.series[1].itemStyle.color = resultObj.barBgColor;
  options.option.series[1].data = bgMaxData;
  options.option.series[0].data = valueList;
  options.option.yAxis[0].data = nameList;
  options.option.yAxis[1].data = valueList;
  options.option.yAxis[1].axisLabel.formatter = (value: number): string => {
    if (resultObj.yxisLabelRightText) {
      return '{a|' + value + '}' + resultObj.yxisLabelRightText;
    } else {
      return String(value);
    }
  };
  //@ts-ignore
  options.option.yAxis[1].axisLabel.rich.a.color =
    resultObj.yxisLabelRightTextColor;
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
