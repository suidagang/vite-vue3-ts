<template>
  <!-- <Ref msg="ref全家桶" /> -->
  <!-- <Reactive msg="reactive全家桶" /> -->
  <!-- <PropsAndEmits /> -->
  <!-- <SloteAndAttrs /> -->
  <!-- <Expose /> -->
  <!-- <Watch /> -->
  <!-- <WatchEffect /> -->
  <!-- <Globle /> -->
  <!-- <Async /> -->
  <!-- <Layout /> -->
  <!-- <Slots /> -->
  <!-- <RealyAsync /> -->
  <!-- <Teleports /> -->
  <!-- <KeepAlives /> -->
  <!-- <Transitions /> -->
  <!-- <ProvideInject /> -->
  <!-- <vModel /> -->
  <!-- <Directive /> -->
  <!-- <Pinia /> -->
  <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//! eslint不检查语法
/* eslint-disable */
import Ref from '@/components/Ref.vue';
import Reactive from '@/components/Reactive.vue';
import PropsAndEmits from '@/components/PropsAndEmits.vue';
import SloteAndAttrs from '@/components/SloteAndAttrs.vue';
import Expose from '@/components/Expose.vue';
import Watch from '@/components/Watch.vue';
import WatchEffect from '@/components/WatchEffect.vue';
import Layout from '@/layout/index.vue';
import Async from '@/components/async.vue';
import Slots from '@/components/Slots.vue';
import RealyAsync from '@/components/realyAsync.vue';
import Teleports from '@/components/Teleports.vue';
import KeepAlives from '@/components/KeepAlive.vue';
import Transitions from '@/components/Transition.vue';
import ProvideInject from '@/components/ProvideInject.vue';
import vModel from '@/components/vModel.vue';
import Directive from '@/components/Directive.vue';
import Pinia from '@/components/Pinia.vue';
</script>
<style lang="less">
@import './style/markdown/index.less';
html,
body,
#app {
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
