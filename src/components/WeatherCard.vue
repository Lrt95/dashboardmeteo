<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card
          :title=cWeatherCity.name
          title-tag="h1"
          :sub-title="cWeatherCity.dt + cWeatherCity.timezone|moment('timezone','Etc/UTC','LLLL')"
          sub-title-tag="h3"
          text-variant="white"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            <b-container>
              <b-row class="text-center">
                <b-col xl="6" style="height: 150px" class="ju">
                  <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 100px">{{ cWeatherCity.main.temp|celcius }}</span>
                  </div>
                </b-col>
                <b-col xl="6" style="height: 150px">
                  <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                    <img :src="'http://openweathermap.org/img/wn/'+cWeatherCity.weather[0].icon+'.png'"
                         style="height: 200px"/>
                  </div>
                </b-col>
                <b-col style="height: 150px">
                  <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                    <span v-if="cWeatherCity.main.humidity < lowHumidity" >
                      <b-icon-droplet style="width: 80px; height: 80px"/>
                    </span>
                    <span
                      v-else-if="cWeatherCity.main.humidity > lowHumidity && cWeatherCity.main.humidity < middleHumidity">
                      <b-icon-droplet-half style="width: 80px; height: 80px"/>
                    </span>
                    <span v-else>
                      <b-icon-droplet-fill style="width: 80px; height: 80px"/>
                    </span>
                    <span style="font-size: 100px">{{ cWeatherCity.main.humidity |pourcentage }}</span>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div>
                    <md-button @click="refresh()">
                      <md-icon>update</md-icon>
                    </md-button>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-card-text>

        </b-card>
      </b-col>
    </b-row>
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
      middleHumidity: 70,
      weatherCity: {}
    }
  },
  props: {
    city: String
  },
  filters: {
    celcius: function (temp) {
      return `${Math.round(temp)}°C`
    },
    pourcentage: function (pourcent) {
      return `${pourcent}%`
    }
  },
  asyncComputed: {
    cWeatherCity: {
      get () {
        return this.getWeather()
      }
    }
  },
  methods: {
    refresh () {
      this.$asyncComputed.cWeatherCity.update()
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
.card {
  background: url('../assets/image/un-ciel-sans-nuage.jpg');
  background-size: cover;
  height: 100%;
}

.container {
  width: 100%;
}
</style>
