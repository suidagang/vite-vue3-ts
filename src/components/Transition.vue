<template>
  <div>
    <button @click="isShow = !isShow">swith</button>
    <transition name="fade">
      <div v-if="isShow" class="box"></div>
    </transition>
    <!-- 自定义class动画，可结合animate.css库 -->
    <button @click="isShow1 = !isShow1">自定义</button>
    <transition
      :duration="{ enter: 500, leave: 800 }"
      enter-active-class="animate__animated animate__shakeY"
      leave-active-class="animate__animated animate__jello"
    >
      <div v-if="isShow1" class="box"></div>
    </transition>
    <!-- JavaScript 钩子 结合GreenSock库使用 -->
    <!-- https://v3.cn.vuejs.org/guide/transitions-enterleave.html#javascript-%E9%92%A9%E5%AD%90 -->

    <!-- 可以通过 appear attribute 设置节点在初始渲染的过渡 -->

    <!-- 多个元素之间的过渡 -->

    <!-- 列表过渡 -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'animate.css';

let isShow = ref<Boolean>(true);
let isShow1 = ref<Boolean>(true);
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  width: 200px;
  height: 200px;
  background: red;
}
.box {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
