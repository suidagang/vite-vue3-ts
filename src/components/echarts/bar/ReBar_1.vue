<template>
  <div ref="barRef" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
// 引入公共的echarts组件（按需实现)
import echarts from '@/plugin/echarts/index';
import { useInitEcharts } from '../hooks';
import { merge } from 'lodash-unified';
import {
  optionBarProps_1,
  basicOptions_1
} from '@/components/echarts/bar/types/comBar';
import { nextTick, ref } from 'vue';
//echarts实例
const props = withDefaults(
  defineProps<{
    option?: optionBarProps_1;
  }>(),
  {
    option: () => {
      return basicOptions_1;
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
      show: true, //是否显示
      type: 'plain', // 图例的类型 'plain':普通图例  'scroll':可滚动翻页的图例
      zlevel: 1, // 所有图形的 zlevel 值。
      icon: 'rect', //形状circle-圆形，rect-矩形，roundRect-圆角矩形，triangle-三角形，diamond-菱形，pin-水滴，arrow-箭头，none-不显示图标
      data: props.option && props.option.legendData,
      right: 10, // 组件离容器的距离
      top: 12, // 组件离容器的距离
      width: 'auto', // 图例组件的宽度
      height: 'auto', // 图例组件的高度
      orient: 'horizontal', // 图例列表的布局朝向。 'horizontal'  'vertical'
      textStyle: {
        fontWeight: 'normal', // 文字字体的粗细。 'normal' 'bold'  'bolder' 'lighter'  100 | 200 | 300 | 400...
        //fontFamily: 'sans-serif', // 文字的字体系列。
        fontSize: props.option && props.option.lengendFontSize, // 文字的字体大小。
        lineHeight: 20, // 行高。
        backgroundColor: 'transparent', // 文字块背景色。
        color: props.option && props.option.lengendColor // 文字的颜色。
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
        splitNumber: 2,
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
        name:
          props.option && props.option.legendData && props.option.legendData[0],
        type: 'bar',
        data: props.option && props.option.seriesDataOne,
        barWidth: props.option && props.option.barWidth,
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
        name:
          props.option && props.option.legendData && props.option.legendData[1],
        type: 'bar',
        barWidth: props.option && props.option.barWidth,
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
        data: props.option && props.option.seriesDataTwo
      }
    ]
  }
};

//合并入参，并改变options中的值
const changeOptions = (newObj: optionBarProps_1) => {
  // 需要合并对象，所以需要全量属性
  type resultObjProps = Required<optionBarProps_1>;
  let resultObj: resultObjProps = merge(
    basicOptions_1,
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
nextTick(() => {
  useInitEcharts(barRef.value!, changeOptions, props, options);
});
</script>

<style scoped></style>
