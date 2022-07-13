import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用管理员
    useAdmin: false,
    // 菜单标识
    menuIndex: '1',
    // 标签ID
    labelId: '',
    // 弹出框显示
    popoverShow: false
  },
  mutations: {
    setUseAdmin (state, param) {
      state.useAdmin = param
    },
    setMenuIndex (state, param) {
      state.menuIndex = param
    },
    setLabelId (state, param) {
      state.labelId = param
    },
    setPopoverShow (state, param) {
      state.popoverShow = param
    }
  },
  actions: {},
  modules: {},
  getters: {
    getUseAdmin: (state) => state.useAdmin || false,
    getMenuIndex: (state) => state.menuIndex || '1',
    getLabelId: (state) => state.labelId || '',
    getPopoverShow: (state) => state.popoverShow || false
  }
})
