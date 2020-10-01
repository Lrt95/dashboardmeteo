<template>
  <div class="home">
    <SearchCity/>
    <WeatherMap/>
    <div>{{ meteoData }}</div>
    <br/>
    <div>{{ forecastData }}</div>
  </div>
</template>

<script>

import axios from 'axios'
import SearchCity from '@/components/SearchCity'
import WeatherMap from '@/components/WeatherMap'

export default {
  name: 'Home',
  components: {
    WeatherMap,
    SearchCity
  },
  asyncComputed: {
    meteoData: {
      get () {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.cCity + '&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr').then((response) => response.data)
      },
      default () {
        return 'Loading...'
      }
    },
    forecastData: {
      get () {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.cCity + '&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr').then((response) => response.data)
      },
      default () {
        return 'Loading...'
      }
    }
  },

  computed: {
    cCity: {
      get () {
        return this.$store.state.city
      }
    }
  }
}
</script>
