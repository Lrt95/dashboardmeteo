<template>
  <b-container>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

        <b-carousel-slide v-for="(city, index) in this.cities" v-bind:key="index">
          <template v-slot:img>
            <WeatherMap v-bind:city="city"/>
          </template>
        </b-carousel-slide>
      </b-carousel>
  </b-container>
</template>

<script>
import axios from 'axios'
import WeatherMap from './WeatherCard'
import { token } from '@/main'

export default {
  name: 'listWeatherCity',
  components: { WeatherMap },
  data () {
    return {
      cities: ['Paris', 'Londres', 'New York', 'Tokyo', 'Moscou', 'Dubaï'],
      slide: 0,
      sliding: null
    }
  },
  methods: {
    getWeatherCity (city) {
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + token + '&lang=fr').then((response) => this.$store.commit('listCities', response.data))
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  mounted () {
    if (this.cities.length > this.$store.getters.citiesWeather.length) {
      this.cities.map(city => { this.getWeatherCity(city) })
    }
  }
}
</script>

<style scoped>

</style>
