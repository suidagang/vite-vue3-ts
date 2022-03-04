//!定义状态容器和数据
//!修改容器中的state
//!仓库中action使用
import { defineStore } from 'pinia';
import { menuStore } from './menu';
interface mainStoreProps {
  num: string;
  count: number;
  phone: string;
}
export const mainStore = defineStore('main', {
  state: (): mainStoreProps => {
    return {
      num: '123',
      count: 0,
      phone: '18780105234'
    };
  },
  getters: {
    //   隐藏中间4位为****
    // phoneHid(state) {
    //   //state方式
    //   return state.phone
    //     .toString()
    //     .replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
    // }
    //this方式 ts类型推断 定义函数返回类型
    phoneHid(): string {
      //state方式
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
    }
  },
  actions: {
    changeState() {
      this.count++;
      this.num = '3456789';
    },
    getList() {
      return menuStore().list;
    }
  }
});
