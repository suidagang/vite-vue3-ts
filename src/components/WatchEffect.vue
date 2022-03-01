<template>
  <input type="text" v-model="message" />
  <input type="text" v-model="message2" />
  <button @click="stopEffet">停止watchEffect</button>
  <div id="ipt"></div>
</template>

<script setup lang="ts">
import { Ref, ref, watchEffect } from 'vue';

let message = ref<string>('');
let message2: Ref<string> = ref('');
//!监听多个值（可以不相关），页面加载默认执行一次，回调函数首先执行（场景：防抖等）
let stop = watchEffect(
  (comCallback) => {
    let ipt: HTMLElement | null = document.getElementById('ipt');
    console.log(ipt);

    console.log('message===', message.value);
    console.log('message2===', message2.value);
    comCallback(() => {
      console.log('before');
    });
  },
  {
    flush: 'post', //post（组件更新后）pre（组件更新前）sync（强制效果始终同步触发）
    onTrigger(e) {
      //方便调试
      debugger;
    }
  }
);
let stopEffet = () => stop();
</script>

<style scoped></style>
