// pending: Array < PendingType > =[]
import { ref, toRaw } from 'vue';
import { PendingType } from '../../h/type'
import { createErrorMsg } from '../../utils/message';
interface removeSingle {
  msg: Object,
  id: String
}
const axiosRequestStore = {
  namespaced: true, // 命名空间
  state: {
    pending: [],
  },
  mutations: {
    // 添加请求保存状态
    setPending(state: { pending: Array<PendingType> }, value: PendingType) {
      state.pending.push(value)
    },
    // 移除单条
    removePending(state: { pending: Array<PendingType> }, item: number) {
      state.pending.splice(item, 1)
    },
    // 匹配单条取消
    cancelSingle(state: { pending: Array<PendingType> }, value: removeSingle) {
      let list: Array<any> = state.pending.filter(i => i.id == value.id)
      if (list.length > 0) {
        list[0].cancel(value.msg || '已取消')
        state.pending.splice(state.pending.findIndex(i => i.id == value.id), 1)
      } else {
        createErrorMsg({
          title: '取消异常',
          content: '未匹配到取消请求',
        })
      }
    }
  },
  actions: {
    tt() {
      console.log('tt方法，子模块里的actions方法');
    }
  },
  getters: {
    // 获取所有请求
    getAllPending(state: { pending: Array<PendingType> }) {
      return toRaw(state.pending)

    },
  }
}
export default axiosRequestStore