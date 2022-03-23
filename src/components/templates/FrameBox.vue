<template>
  <div class="common-sys-box" :style="{ width: width, height: height }">
    <div class="com-sys-border sys-one"></div>
    <div class="com-sys-border sys-two"></div>
    <div class="com-sys-border sys-three"></div>
    <div class="com-sys-border sys-four"></div>
    <div v-if="title" class="common-sys-head">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  width: {
    type: String,
    require: true
  },
  height: {
    type: String,
    require: true
  },
  title: {
    type: String,
    default: ''
  }
});
</script>

<style lang="less" scoped>
.common-sys-box {
  position: relative;
  box-shadow: inset 0 0 40px rgba(0, 42, 255, 0.6);
  border: 1px solid rgba(0, 42, 255, 1);
  box-sizing: border-box;
  text-align: left;
  color: #fff;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}
.com-sys-border {
  z-index: 1;
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #01ffff;
}
.sys-one {
  top: -1px;
  left: -1px;
  border-right: none;
  border-bottom: none;
}
.sys-two {
  top: -1px;
  right: -1px;
  border-left: none;
  border-bottom: none;
}
.sys-three {
  bottom: -1px;
  right: -1px;
  border-left: none;
  border-top: none;
}
.sys-four {
  bottom: -1px;
  left: -1px;
  border-right: none;
  border-top: none;
}
.common-sys-head {
  margin-top: 20px;
  overflow: hidden;
  color: #01ffff;
  font-size: 24px;
  width: 100%;
  text-align: center;
}
</style>
