<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div>{{ message }}</div>
  <button @click="testRef">测试</button>
  <div class="test">111</div>
  <!-- ref ts 写法 -->
</template>
<script setup lang="ts">
import { ref, Ref, shallowRef, customRef } from 'vue';
// defineProps<{ msg: string }>();
// isRef判断是否为ref对象,shallowRef不会让value属性的值为ref对象, triggerRef强制dom更新
//customRef 自定义ref  参照myRef

//写法一：引入ref泛型
let message1: Ref<string> = ref('测试');
message1.value = '123';
//写法二：直接写
let message2 = ref<string>('测试');
message2.value = '234';

let message = shallowRef({
  name: '223'
});

const testRef = () => {
  // message.value = "哈哈";
  message.value = {
    name: '哈哈1'
  };
};
function myRef<T>(value: T) {
  return customRef((trank, trigger) => {
    return {
      get() {
        trank();
        return value;
      },
      set(newVal: T) {
        value = newVal;
        trigger();
      }
    };
  });
}
myRef.value = 'wer';
const color1 = 'red';
</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.text {
  color: v-bind(color1);
}
</style>
