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
  margin: 20px;
  border: 1px solid #ccc;
  overflow: hidden;
  flex: 1;
}
</style>
