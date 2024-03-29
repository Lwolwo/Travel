import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // 类似计算属性
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }

  /*
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  */
})
