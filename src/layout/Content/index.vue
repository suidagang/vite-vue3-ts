<template>
  <div class="content">
    内容区域
    <el-button type="primary">Primary</el-button>
    <!-- 内部应该显示子路由页面信息 -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.content {
  padding: 20px;
  overflow: hidden;
  flex: 1;
  box-sizing: border-box;
  background: #f0f2f5;
}
</style>
