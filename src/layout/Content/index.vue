<template>
  <div class="content">
    <div class="content-scroll">
      <!-- 内部应该显示子路由页面信息 -->
      <!-- transition 和 keep-alive 现在必须通过 v-slot API 在 RouterView 内部使用 -->
      <router-view v-slot="{ Component }">
        <transition
          :duration="{ enter: 500, leave: 800 }"
          enter-active-class="animate__animated animate__zoomIn"
          leave-active-class="animate__animated animate__zoomOut"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
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
.content-scroll {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.content-scroll::-webkit-scrollbar {
  width: 6px !important;
}

.content-scroll::-webkit-scrollbar-track-piece {
  background: #d3dce6;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: #99a9bf;
  border-radius: 20px;
}
</style>
