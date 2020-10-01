import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

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
      console.log('tata')
      state.citiesWeather.push(citiesWeather)
    },
    listWeathers (state, weatherForFiveDays) {
      state.weatherForFiveDays = weatherForFiveDays
    }
  },
  actions: {

  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
