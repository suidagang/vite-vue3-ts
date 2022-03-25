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
  border: 1px solid rgb(0 42 255 / 100%);
  text-align: left;
  color: #ffffff;
  box-shadow: inset 0 0 40px rgb(0 42 255 / 60%);
  box-sizing: border-box;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
.com-sys-border {
  position: absolute;
  z-index: 1;
  width: 10px;
  height: 10px;
  border: 1px solid #01ffff;
  background: rgb(0 0 0 / 0%);
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
  border-bottom: none;
  border-left: none;
}
.sys-three {
  right: -1px;
  bottom: -1px;
  border-top: none;
  border-left: none;
}
.sys-four {
  bottom: -1px;
  left: -1px;
  border-top: none;
  border-right: none;
}
.common-sys-head {
  overflow: hidden;
  margin-top: 20px;
  width: 100%;
  font-size: 24px;
  text-align: center;
  color: #01ffff;
}
</style>
