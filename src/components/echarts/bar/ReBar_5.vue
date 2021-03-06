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
  optionBarProps_5,
  basicOptions_5
} from '@/components/echarts/bar/types/comBar';
//echarts实例
let echartInstance: ECharts | null;
const props = withDefaults(
  defineProps<{
    option?: optionBarProps_5;
  }>(),
  {
    option: () => {
      return basicOptions_5;
    }
  }
);

let barRef = ref<HTMLElement | null>(null);
const options = {
  option: {
    // tooltip: { }//提示框组件
    grid: {
      bottom: '10%',
      left: '5%',
      right: '5%',
      top: '20%',
      containLabel: true //设置containLabel: true常用于 防止标签溢出，计算距离时候会计算容器边到标签的距离，否则计算容器边缘到刻度线的距离。
    },
    //图例设置
    legend: {
      x: 'center',
      show: true, //是否显示
      type: 'plain', // 图例的类型 'plain':普通图例  'scroll':可滚动翻页的图例
      zlevel: 1, // 所有图形的 zlevel 值。
      icon: 'rect', //形状circle-圆形，rect-矩形，roundRect-圆角矩形，triangle-三角形，diamond-菱形，pin-水滴，arrow-箭头，none-不显示图标
      data: ['测试1', '测试2'],
      right: 10, // 组件离容器的距离
      top: 12, // 组件离容器的距离
      width: 'auto', // 图例组件的宽度
      height: 'auto', // 图例组件的高度
      orient: 'horizontal', // 图例列表的布局朝向。 'horizontal'  'vertical'
      textStyle: {
        fontWeight: 'normal', // 文字字体的粗细。 'normal' 'bold'  'bolder' 'lighter'  100 | 200 | 300 | 400...
        //fontFamily: 'sans-serif', // 文字的字体系列。
        fontSize: '16px', // 文字的字体大小。
        lineHeight: 20, // 行高。
        backgroundColor: 'transparent', // 文字块背景色。
        color: '#fff' // 文字的颜色。
      },
      itemWidth: 16, // 图例标记的图形宽度。
      itemHeight: 8, //  图例标记的图形高度。
      itemGap: 20 // 图例每项之间的间隔。
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
          color: '#fff', // 刻度标签文字的颜色
          fontSize: '16px', // 文字字体大小
          align: 'center', // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
          verticalAlign: 'middle' // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
        },
        data: ['1', '2', '3', '4']
      }
    ],
    yAxis: [
      {
        splitNumber: 2,
        show: true, // 是否显示 Y轴
        type: 'value', //('value''category''time''log')
        name: '户', // 坐标轴名称
        nameTextStyle: {
          color: '#fff',
          padding: [40, 48, 0, 8],
          fontSize: '16px'
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
          fontSize: '16px'
        },
        splitLine: {
          show: false
        }
      },
      {
        type: 'value',
        name: '(%)',
        min: 0,
        max: 100,
        interval: 25,
        nameTextStyle: {
          color: '#fff',
          padding: [40, 0, 0, 38],
          fontSize: '16px'
        },
        splitLine: {
          show: false
        },
        axisLine: {
          // 坐标轴刻度相关设置。
          show: true,
          lineStyle: {
            // 刻度线的样式设置。
            color: '#fff', // 刻度线的颜色，默认取 axisTick.lineStyle.color。
            width: 1
          }
        },
        axisLabel: {
          formatter: (value: number) => {
            return `${value}%`;
          },
          color: '#fff',
          fontSize: '16px'
        }
      }
    ],
    series: [
      {
        name: '测试1',
        type: 'bar',
        data: [1, 2, 4, 5],
        barWidth: '18',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#fccb05'
            },
            {
              offset: 1,
              color: '#f5804d'
            }
          ]),
          borderRadius: [12, 12, 0, 0]
        }
      },
      {
        name: '测试2',
        type: 'bar',
        barWidth: '18',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#8bd46e'
            },
            {
              offset: 1,
              color: '#09bcb7'
            }
          ]),
          borderRadius: [12, 12, 0, 0]
        },
        data: [4, 6, 7, 9]
      },
      {
        name: '哈哈',
        type: 'line',
        itemStyle: {
          color: 'yellow',
          borderWidth: 0
        },
        data: [3, 12, 32, 23]
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
  echartInstance?.setOption(options.option as unknown as EChartOption);
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
const changeOptions = (newObj: optionBarProps_5) => {
  // 需要合并对象，所以需要全量属性
  type resultObjProps = Required<optionBarProps_5>;
  let resultObj: resultObjProps = merge(
    basicOptions_5,
    newObj
  ) as resultObjProps;
  options.option.xAxis[0].data = resultObj.xdata;
  options.option.series[0].data = resultObj.seriesDataOne;
  options.option.series[0].name = resultObj.legendData[0];
  options.option.series[1].data = resultObj.seriesDataTwo;
  options.option.series[1].name = resultObj.legendData[1];
  options.option.xAxis[0].axisLabel.color = resultObj.axisLabelColor;
  options.option.xAxis[0].axisLabel.fontSize = resultObj.axisLabelFontSize;
  options.option.yAxis[0].name = resultObj.yName;
  options.option.yAxis[0].nameTextStyle.color = resultObj.yNameColor;
  options.option.yAxis[0].nameTextStyle.fontSize = resultObj.yNameFontSize;
  options.option.yAxis[0].axisLabel.color = resultObj.yxisLabelColor;
  options.option.yAxis[0].axisLabel.fontSize = resultObj.yxisLabelFontSize;
  options.option.series[0].barWidth = resultObj.barWidth;
  options.option.series[1].barWidth = resultObj.barWidth;
  options.option.legend.data = resultObj.legendData;
  options.option.legend.textStyle.color = resultObj.lengendColor;
  options.option.legend.textStyle.fontSize = resultObj.lengendFontSize;
  options.option.series[2].data = resultObj.lineData;
  options.option.series[2].itemStyle.color = resultObj.lineColor;
  options.option.series[0].itemStyle.color = new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: resultObj.seriesDataOneColor[0]
      },
      {
        offset: 1,
        color: resultObj.seriesDataOneColor[1]
      }
    ]
  );
  options.option.series[1].itemStyle.color = new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: resultObj.seriesDataTwoColor[0]
      },
      {
        offset: 1,
        color: resultObj.seriesDataTwoColor[1]
      }
    ]
  );
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
