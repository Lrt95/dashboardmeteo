<template>
  <b-container>
    <b-card
      overlay
      :title=cWeatherCity.name
      :sub-title="cWeatherCity.dt + cWeatherCity.timezone|moment('timezone','Etc/UTC','LLLL ss')"
      text-variant="white"
      :img-src="require('../assets/image/un-ciel-sans-nuage.jpg')"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 25rem;"
      class="mb-2"
    >
      <b-card-text style="height: 100%">
        <b-row class="text-center" style="height: 100%">
          <b-col sm="6" align-self="center">
            <div>{{cWeatherCity.main.temp|celcius}}</div>
          </b-col>
          <b-col sm="6" align-self="center">
          <img :src="'http://openweathermap.org/img/wn/'+cWeatherCity.weather[0].icon+'.png'" />
          </b-col>
          <b-col>
            <span>{{cWeatherCity.main.humidity|pourcentage}}</span>
            <div v-if="cWeatherCity.main.humidity < lowHumidity">
              <b-icon-droplet/>
            </div>
            <div v-else-if="cWeatherCity.main.humidity > lowHumidity && cWeatherCity.main.humidity < middleHumidity">
              <b-icon-droplet-half/>
            </div>
           <div v-else>
             <b-icon-droplet-fill/>
           </div>
          </b-col>
          <b-col sm="12" align-self="left">
            <b-button @click="clickButton"><b-icon-arrow-clockwise/></b-button>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-container>

</template>

<script>

import axios from 'axios'
import { token } from '../main'

export default {
  name: 'WeatherMap',
  data () {
    return {
      lowHumidity: 20,
      middleHumidity: 70
    }
  },
  props: {
    city: String
  },
  filters: {
    celcius: function (temp) {
      return `${Math.round(temp)} °C`
    },
    pourcentage: function (pourcent) {
      return `${pourcent} % `
    }
  },
  asyncComputed: {
    cWeatherCity: {
      get () {
        console.log('ahahahaha')
        return this.getWeather()
      }
    }
  },
  methods: {
    clickButton () {
      console.log(this.cWeatherCity)
    },
    getWeather () {
      return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' +
        this.city + '&units=metric&appid=' +
        token + '&lang=fr').then((response) => response.data)
    }
  }
}
</script>

<style scoped>
  .col {
    padding-bottom: 20%;
  }
</style>
