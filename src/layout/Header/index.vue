<template>
  <div class="header">
    <el-icon class="open-sidebar-icon" @click="changeSiderbarState">
      <Fold />
    </el-icon>
    <!-- 面包屑 -->
    <Breadcrumb class="breadcrumb-container" />
    <!-- i18n测试 -->
    <h1 style="margin-left: 50px">{{ $t('common.home') }}</h1>
    <my-button @click="toggleLocales">
      {{ $t('button.toggle-language') }}
    </my-button>
    <!-- 全屏 -->
    <screenfull class="screenfull-box" />
  </div>
</template>

<script setup lang="ts">
import screenfull from '@/layout/screenfull/index.vue';
import Breadcrumb from '@/layout/BreadCrumd/index.vue';
import { Fold } from '@element-plus/icons';
import { storeToRefs } from 'pinia';
import { menuStore } from '@/store/menu';
import { useLocalStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
const { availableLocales, locale } = useI18n();
const msg = ref('');
const setLang = (lang: string) => {
  const storage = useLocalStorage('site_locale', '');
  storage.value = lang;
};

const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  setLang(locale.value);
  if (locale.value === 'en') {
    msg.value = 'Hello';
  } else {
    msg.value = '你好';
  }
};
const store = menuStore();
const { siderbarIsopen } = storeToRefs(store);
const changeSiderbarState = () => {
  siderbarIsopen.value = !siderbarIsopen.value;
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #cccccc;
  text-align: left;
  line-height: 60px;
}
.open-sidebar-icon {
  margin-left: 20px;
  font-size: 32px;
  cursor: pointer;
}
.screenfull-box {
  position: absolute;
  right: 120px;
}
.breadcrumb-container {
  margin-left: 15px;
}
</style>
