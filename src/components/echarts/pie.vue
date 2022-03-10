<template>
  <div ref="myRef" class="echarts-box"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, reactive, ref } from 'vue';
const myRef = ref<any>(null);
onMounted(() => {
  setTimeout(() => {
    drawChart();
  }, 20);
});
const option = reactive({
  // 自定义图表的配置项和数据

  title: {
    text: '系统折线图'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [
        '2021-03-11',
        '2021-03-12',
        '2021-03-13',
        '2021-03-14',
        '2021-03-15',
        '2021-03-16',
        '2021-03-17'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '新增注册',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '付费用户',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '活跃用户',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '订单数',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '当日总收入',
      type: 'line',
      stack: '总量',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
});
// 绘制折线图
const drawChart = () => {
  // 初始化echarts实例
  const Chart = echarts.init(myRef.value);
  // 父组件传来的实例参数
  Chart.setOption(option);
  //   window.addEventListener('resize', () => {
  //     //页面大小变化后Echarts也更改大小
  //     Chart.resize();
  //   });
};
</script>

<style lang="less" scoped>
.echarts-box {
  height: 500px;
  width: 800px;
}
</style>
