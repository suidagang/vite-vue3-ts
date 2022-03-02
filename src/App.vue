<template>
  <!-- <Ref msg="ref全家桶" /> -->
  <!-- <Reactive msg="reactive全家桶" /> -->
  <!-- <PropsAndEmits />
  <SloteAndAttrs />
  <Expose /> -->
  <!-- <Watch /> -->
  <!-- <WatchEffect /> -->
  <!-- <Globle /> -->
  <Layout />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Ref from './components/Ref.vue';
import Reactive from './components/Reactive.vue';
import PropsAndEmits from './components/PropsAndEmits.vue';
import SloteAndAttrs from './components/SloteAndAttrs.vue';
import Expose from './components/Expose.vue';
import Watch from './components/Watch.vue';
import WatchEffect from './components/WatchEffect.vue';
import Layout from './layout/index.vue';
</script>
<style>
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
