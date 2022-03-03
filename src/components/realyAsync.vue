<!-- 异步组件，代码分包（打包后会多生成一个js，空闲时下载），以及suspense -->
<template>
  <Suspense>
    <template #default>
      <Header />
    </template>
    <!-- 组件加载是展示的东西 -->
    <template #fallback>
      <div>loading....</div>
    </template>
  </Suspense>

  <Footer />
</template>

<script setup lang="ts">
// import Header from './realyAsync/Header.vue';
import { defineAsyncComponent } from 'vue';
import Footer from './realyAsync/Footer.vue';
const Header = defineAsyncComponent(() => import('./realyAsync/Header.vue'));
</script>

<style scoped></style>
