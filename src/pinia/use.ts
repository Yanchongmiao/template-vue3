import { defineStore } from 'pinia'
export const useProfileStore = defineStore({
  id: 'profile',//唯一
  state: () => ({
    count: 2,
    userName: 'xxx', // 这里我们定义了一个数据叫userName，用于存放我们的用户名 
  }),
  getters: {
    countPow2(value): number {
      this.count = 100
      console.log('参数', value);
      return 1
    },
  },
  actions: {
    ac() {
      this.count = 100
    }
  }
})