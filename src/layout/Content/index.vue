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
          <div class="tansition-box">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.content {
  overflow: hidden;
  padding: 20px;
  background: #f0f2f5;
  flex: 1;
  box-sizing: border-box;
}
.content-scroll {
  width: 100%;
  height: 100%;
  .tansition-box {
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
}
.content-scroll::-webkit-scrollbar {
  width: 6px !important;
}
.content-scroll::-webkit-scrollbar-track-piece {
  background: #d3dce6;
}
.content-scroll::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #99a9bf;
}
</style>
