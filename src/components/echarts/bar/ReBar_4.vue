<template>
  <div ref="barRef" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import { useInitEcharts } from '../hooks';
// 引入公共的echarts组件（按需实现)
import echarts from '@/plugin/echarts/index';
import { nextTick, ref } from 'vue';
import { merge } from 'lodash-unified';
import {
  optionBarProps_4,
  basicOptions_4
} from '@/components/echarts/bar/types/comBar';
const props = withDefaults(
  defineProps<{
    option?: optionBarProps_4;
  }>(),
  {
    option: () => {
      return basicOptions_4;
    }
  }
);

let barRef = ref<HTMLElement | null>(null);
const options = {
  option: {
    barWidth: 12,
    grid: {
      bottom: '5%',
      left: '5%',
      right: '5%',
      top: '10%',
      containLabel: true //设置containLabel: true常用于 防止标签溢出，计算距离时候会计算容器边到标签的距离，否则计算容器边缘到刻度线的距离。
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
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: '#c778ff'
            },
            {
              offset: 1,
              color: '#1679e9'
            }
          ])
        },
        barWidth: 15,
        data: [1, 2, 3]
      }
    ]
  }
};

//合并入参，并改变options中的值
const changeOptions = (newObj: optionBarProps_4) => {
  // 需要合并对象，所以需要全量属性
  type resultObjProps = Required<optionBarProps_4>;
  let resultObj: resultObjProps = merge(
    basicOptions_4,
    newObj
  ) as resultObjProps;
  //通过后台数据计算所需的数据
  let valueList: number[] = [];
  let nameList: any[] = [];
  resultObj.listData.forEach((item) => {
    nameList.push(item.name);
    valueList.push(item.value);
  });
  options.option.series[0].barWidth = resultObj.barWidth;
  options.option.series[0].itemStyle.borderRadius = [
    0,
    resultObj.barWidth,
    resultObj.barWidth,
    0
  ];
  options.option.yAxis[0].axisLabel.color = resultObj.yxisLabelColorLeft;
  options.option.yAxis[0].axisLabel.fontSize = resultObj.yxisLabelFontSizeLeft;
  options.option.yAxis[1].axisLabel.color = resultObj.yxisLabelColorRight;
  options.option.yAxis[1].axisLabel.fontSize = resultObj.yxisLabelFontSizeRight;
  options.option.series[0].itemStyle.color = new echarts.graphic.LinearGradient(
    1,
    0,
    0,
    0,
    [
      {
        offset: 0,
        color: resultObj.barColor[0]
      },
      {
        offset: 1,
        color: resultObj.barColor[1]
      }
    ]
  );
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
nextTick(() => {
  useInitEcharts(barRef.value!, changeOptions, props, options);
});
</script>

<style scoped></style>
