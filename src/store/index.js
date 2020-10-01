import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Paris',
    citiesWeather: [],
    weatherForFiveDays: []
  },
  getters: {
    city: state => state.city,
    citiesWeather: state => state.citiesWeather,
    weatherForFiveDays: state => state.weatherForFiveDays
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    },
    listCities (state, citiesWeather) {
      state.citiesWeather.push(citiesWeather)
    },
    listWeathers (state, weatherForFiveDays) {
      state.weatherForFiveDays = weatherForFiveDays
    }
  },
  actions: {
  },
  modules: {
  }
})
