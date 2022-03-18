<template>
  <div class="content-box">
    <template v-for="(item, index) in pageConfig" :key="index">
      <comHead v-if="item.dom_type === 'comHead'" />
      <comBox
        v-if="item.dom_type === 'comBox'"
        class="com-box left-one-box"
        :width="item.with"
        :height="item.height"
        :title="item.title"
        :style="{
          top: item.top,
          left: item.left,
          right: item.right,
          bottom: item.bottom,
          marginLeft: item.marginLeft
        }"
      >
      </comBox>
    </template>
  </div>
</template>

<script setup lang="ts">
import comHead from '@/components/templates/ComHead.vue';
import comBox from '@/components/templates/FrameBox.vue';
const pageConfig = [
  {
    dom_type: 'comHead'
  },
  {
    dom_type: 'comBox',
    with: '540px',
    height: '229px',
    title: '本月办理量（业务域）',
    left: '20px',
    top: '105px'
  },
  {
    dom_type: 'comBox',
    with: '540px',
    height: '203px',
    title: '纳税人变动情况',
    left: '20px',
    top: '365px'
  },
  {
    dom_type: 'comBox',
    with: '540px',
    height: '220px',
    title: '本月办理业务量（TOP5）',
    left: '20px',
    bottom: '20px'
  },
  {
    dom_type: 'comBox',
    with: '540px',
    height: '229px',
    title: '发票代开业务量趋势',
    right: '20px',
    top: '105px'
  },
  {
    dom_type: 'comBox',
    with: '540px',
    height: '203px',
    title: '全年业务办理量趋势',
    right: '20px',
    top: '365px'
  },
  {
    dom_type: 'comBox',
    with: '540px',
    height: '220px',
    title: '满意度情况',
    right: '20px',
    bottom: '20px'
  },
  {
    dom_type: 'comBox',
    with: '650px',
    height: '220px',
    title: '纳税人接待情况',
    left: '50%',
    marginLeft: '-325px',
    bottom: '20px'
  }
];
</script>

<style lang="less" scoped>
.content-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: url('@/assets/imgs/bg.png') center no-repeat;
}
.com-box {
  position: absolute;
}
</style>
