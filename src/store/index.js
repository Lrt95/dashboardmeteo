import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: ''
  },
  getters: {
    city: state => state.city
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  },
  actions: {
  },
  modules: {
  }
})
