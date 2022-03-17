<template>
  <div class="header">
    <el-icon class="open-sidebar-icon" @click="changeSiderbarState">
      <Fold />
    </el-icon>
    <h1>{{ $t('common.home') }}</h1>
    <el-button type="primary" @click="toggleLocales">
      {{ $t('button.toggle-language') }}
    </el-button>
    <!-- 全屏 -->
    <screenfull class="screenfull-box" />
  </div>
</template>

<script setup lang="ts">
import screenfull from '@/layout/screenfull/index.vue';
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
  height: 60px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  line-height: 60px;
  display: flex;
  align-items: center;
}
.open-sidebar-icon {
  font-size: 32px;
  margin-left: 20px;
  cursor: pointer;
}
.screenfull-box {
  position: absolute;
  right: 120px;
}
</style>
