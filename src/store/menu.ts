//!定义状态容器和数据
//!修改容器中的state
//!仓库中action使用
import { defineStore } from 'pinia';
interface menuStoreProps {
  list: string[];
}
export const menuStore = defineStore('menu', {
  state: (): menuStoreProps => {
    return {
      list: ['列表1', '列表2', '列表3']
    };
  },
  getters: {},
  actions: {}
});
