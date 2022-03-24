<template>
  <div class="demo-box">
    <div class="echarts-box">
      <component :is="template" :option="barOption.option"></component>
    </div>
    <div class="set-box">
      <el-button class="reset-btn" type="primary" @click="resetFrom">
        重置
      </el-button>
      <div class="set-title">可配设置</div>
      <el-form :model="form.config" label-width="140px">
        <el-form-item label="柱状图颜色">
          <el-color-picker v-model="form.config.barColor" />
        </el-form-item>
        <el-form-item label="柱状图宽度">
          <el-slider
            v-model="form.config.barWidth"
            show-input
            :min="5"
            :max="100"
          />
        </el-form-item>
        <el-form-item label="Y轴的名称">
          <el-input v-model="form.config.yName" />
        </el-form-item>
        <el-form-item v-show="form.config.yName" label="Y轴的名称字体颜色">
          <el-color-picker v-model="form.config.yNameColor" />
        </el-form-item>
        <el-form-item v-show="form.config.yName" label="Y轴的名称字体大小">
          <el-input-number
            v-model="form.config.yNameFontSize"
            :min="12"
            :max="40"
          />
        </el-form-item>
        <el-form-item label="x轴文字颜色">
          <el-color-picker v-model="form.config.axisLabelColor" />
        </el-form-item>
        <el-form-item label="x轴文字大小">
          <el-input-number
            v-model="form.config.axisLabelFontSize"
            :min="12"
            :max="40"
          />
        </el-form-item>
        <el-form-item label="y轴文字颜色">
          <el-color-picker v-model="form.config.yxisLabelColor" />
        </el-form-item>
        <el-form-item label="y轴文字大小">
          <el-input-number
            v-model="form.config.yxisLabelFontSize"
            :min="12"
            :max="40"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="next-title">
    <span>配置后的json数据</span>
  </div>
  <JsonViewer :value="form.config" copyable boxed sort theme="jv-dark" />
</template>

<script setup lang="ts">
import { reactive, watch, markRaw } from 'vue';
//涌入vue3-json-viewer
import { JsonViewer } from 'vue3-json-viewer';
import 'vue3-json-viewer/dist/index.css';
import ReBar from '../bar/ReBar.vue';
let template = markRaw(ReBar);
let form = reactive({
  config: {
    barColor: '#19f1ff',
    barWidth: 28,
    yName: '(笔)',
    axisLabelColor: '#fff',
    axisLabelFontSize: 16,
    yNameColor: '#fff',
    yNameFontSize: 16,
    yxisLabelColor: '#fff',
    yxisLabelFontSize: 16
  }
});
const oldForm = JSON.parse(JSON.stringify(form.config));

const resetFrom = () => {
  form.config = JSON.parse(JSON.stringify(oldForm));
};
let barOption = reactive({
  option: {
    e_type: 'ReBar',
    xdata: ['测试1', '测试2', '测试3', '测试4'],
    seriesData: [322, 204, 1079, 1079],
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
      barColor: [newValue.config.barColor],
      barWidth: newValue.config.barWidth + '',
      xdata: ['测试1', '测试2', '测试3', '测试4'],
      seriesData: [322, 204, 1079, 1079],
      yName: newValue.config.yName,
      yNameColor: newValue.config.yNameColor,
      yNameFontSize: newValue.config.yNameFontSize + '',
      axisLabelColor: newValue.config.axisLabelColor,
      axisLabelFontSize: newValue.config.axisLabelFontSize + '',
      yxisLabelColor: newValue.config.yxisLabelColor,
      yxisLabelFontSize: newValue.config.yxisLabelFontSize + ''
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
  position: relative;
  flex: 1;
  height: 250px;
  box-shadow: 3px 3px 10px #9edeff;
  margin-left: 20px;
  overflow-y: auto;
  .reset-btn {
    position: absolute;
    right: 20px;
    top: 20px;
  }
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
