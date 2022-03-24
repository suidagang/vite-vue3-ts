<template>
  <div class="demo-box">
    <div class="echarts-box">
      <component :is="template" :option="barOption.option"></component>
    </div>
    <div class="set-box">
      <div class="set-title">公用设置</div>
      <el-form :model="form" label-width="140px">
        <el-form-item label="柱状图颜色">
          <el-color-picker v-model="form.barColor" />
        </el-form-item>
        <el-form-item label="柱状图宽度">
          <el-slider v-model="form.barWidth" show-input :min="5" :max="100" />
        </el-form-item>
        <el-form-item label="Y轴的名称">
          <el-input v-model="form.yName" />
        </el-form-item>
        <el-form-item label="Y轴的名称字体颜色">
          <el-color-picker v-model="form.yNameColor" />
        </el-form-item>
        <el-form-item label="Y轴的名称字体大小">
          <el-input-number v-model="form.yNameFontSize" :min="12" :max="40" />
        </el-form-item>
        <el-form-item label="x轴文字颜色">
          <el-color-picker v-model="form.axisLabelColor" />
        </el-form-item>
        <el-form-item label="x轴文字大小">
          <el-input-number
            v-model="form.axisLabelFontSize"
            :min="12"
            :max="40"
          />
        </el-form-item>
        <el-form-item label="y轴文字颜色">
          <el-color-picker v-model="form.yxisLabelColor" />
        </el-form-item>
        <el-form-item label="y轴文字大小">
          <el-input-number
            v-model="form.yxisLabelFontSize"
            :min="12"
            :max="40"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="next-title">配置后的json数据</div>
  <JsonViewer :value="form" copyable boxed sort theme="jv-dark" />
</template>

<script setup lang="ts">
import { reactive, watch, markRaw } from 'vue';
//涌入vue3-json-viewer
import { JsonViewer } from 'vue3-json-viewer';
import 'vue3-json-viewer/dist/index.css';
import ReBar from '../bar/ReBar.vue';
let template = markRaw(ReBar);
let form = reactive({
  barColor: 'red',
  barWidth: 28,
  yName: '(笔)',
  axisLabelColor: '#fff',
  axisLabelFontSize: '16',
  yNameColor: '#fff',
  yNameFontSize: '16',
  yxisLabelColor: '#fff',
  yxisLabelFontSize: '16'
});
let barOption = reactive({
  option: {
    e_type: 'ReBar',
    xdata: ['测试1', '测试2', '测试3', '测试4'],
    seriesData: [3, 204, 1079, 1079],
    yName: '',
    barColor: ['#19f1ff'],
    barWidth: '18',
    axisLabelColor: '#fff',
    axisLabelFontSize: '16',
    yNameColor: '#fff',
    yNameFontSize: '16',
    yxisLabelColor: '#fff',
    yxisLabelFontSize: '16'
  }
});
watch(
  () => form,
  (newValue) => {
    barOption.option = {
      e_type: 'ReBar',
      barColor: [newValue.barColor],
      barWidth: newValue.barWidth + '',
      xdata: ['测试1', '测试2', '测试3', '测试4'],
      seriesData: [3, 204, 1079, 1079],
      yName: newValue.yName,
      yNameColor: newValue.yNameColor,
      yNameFontSize: newValue.yNameFontSize,
      axisLabelColor: newValue.axisLabelColor,
      axisLabelFontSize: newValue.axisLabelFontSize,
      yxisLabelColor: newValue.yxisLabelColor,
      yxisLabelFontSize: newValue.yxisLabelFontSize
    };
  },
  {
    deep: true,
    immediate: true //页面初始化回执行一次
  }
);
</script>

<style lang="less" scoped>
.demo-box {
  width: 100%;
  height: 250px;
  display: flex;
}
.echarts-box {
  flex: 1;
  height: 250px;
  background: #01145e;
}
.set-box {
  flex: 1;
  height: 250px;
  box-shadow: 3px 3px 10px #9edeff;
  margin-left: 20px;
  overflow-y: auto;
}
.set-title {
  height: 40px;
  line-height: 40px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  padding-left: 20px;
  box-sizing: border-box;
}
.next-title {
  font-size: 20px;
  color: #409eff;
  font-weight: bold;
  margin: 20px;
  overflow: hidden;
}
</style>
