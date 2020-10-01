<template>
  <b-container>
    <b-row v-if="this.$store.getters.citiesWeather.length>0">
      <b-col sm="6" v-for="(weatherCity, index) in this.$store.getters.citiesWeather" v-bind:key="index">
        <WeatherMap v-bind:weather-city="weatherCity"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
import WeatherMap from './WeatherMap'
import { token } from '@/main'

export default {
  name: 'listWeatherCity',
  components: { WeatherMap },
  data () {
    return {
      cities: ['Paris', 'Londres', 'New York', 'Tokyo', 'Moscou', 'Dubaï'],
      weatherCities: []
    }
  },
  asyncComputed: {
    cCitiesWeather: {
      get () {
        return this.$store.getters.citiesWeather
      },
      default () {
        return 'Loading...'
      }
    }
  },
  methods: {
    getWeatherCity (city) {
      console.log(city)
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + token + '&lang=fr').then((response) => this.$store.commit('listCities', response.data))
    }
  },
  mounted () {
    console.log(this.cities.length)
    console.log(this.$store.getters.citiesWeather.length)
    if (this.cities.length > this.$store.getters.citiesWeather.length) {
      this.cities.map(city => { this.getWeatherCity(city) })
    }
  }
}
</script>

<style scoped>

</style>
