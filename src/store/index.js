import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isCollapseNav: false
  },
  mutations: {
    SET_IS_COLLAPSE_NAV: (state, value) => {
      state.isCollapseNav = value
    }
  },
  modules: {
    auth
  }
})

export default store