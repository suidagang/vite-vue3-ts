<template>
  <button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>

<style scoped lang="less">
.my-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background: lightskyblue;
  appearance: none;
  &:active {
    background: rgb(92 185 243);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
