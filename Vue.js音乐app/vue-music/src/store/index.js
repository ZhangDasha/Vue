/*
  Vuex的入口文件
*/

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import state from './state.js'
import mutations from './mutations.js'
import createLogger from 'vuex/dist/logger.js'

Vue.use(Vuex)

// 生成 State 快照，比较改变的前后状态
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})