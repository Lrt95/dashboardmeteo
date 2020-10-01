import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Paris',
    citiesWeather: []
  },
  getters: {
    city: state => state.city,
    citiesWeather: state => state.citiesWeather
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    },
    listCities (state, citiesWeather) {
      state.citiesWeather.push(citiesWeather)
    }
  },
  actions: {
  },
  modules: {
  }
})
