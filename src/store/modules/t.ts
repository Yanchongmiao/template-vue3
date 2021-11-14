const t = {
  namespaced: true, // 命名空间
  state: {
    ds: 1
  },
  mutations: {
    mtt() {
      console.log('tt方法，子模块里的mutations方法');
    }
  },
  actions: {
    tt() {
      console.log('tt方法，子模块里的actions方法');
    }
  },
  getters: {
    get() {
      console.log('子get');

    },
  }
}
export default t