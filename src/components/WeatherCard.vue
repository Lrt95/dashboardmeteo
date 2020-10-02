<template>
  <b-container class="container-weather-card">
    <b-row>
      <b-col>
        <b-card
          class="card-weather"
          :title=cWeatherCity.name
          title-tag="h3"
          :sub-title="cWeatherCity.dt + cWeatherCity.timezone|moment('timezone','Etc/UTC','LLLL')"
          sub-title-tag="h4"
          text-variant="white"
          img-alt="Image"
          img-top
          tag="article"
        >
          <b-card-text>
            <b-container>
              <b-row class="text-center">
                <b-col xl="6" class="col-element-wheather">
                  <div class="element-weather">
                    <span>{{ cWeatherCity.main.temp|celcius }}</span>
                  </div>
                </b-col>
                <b-col xl="6" class="col-element-wheather">
                  <div class="element-weather">
                    <img :src="'http://openweathermap.org/img/wn/'+cWeatherCity.weather[0].icon+'.png'"/>
                  </div>
                </b-col>
                <b-col class="col-element-wheather">
                  <div class="element-weather">
                    <span v-if="cWeatherCity.main.humidity < lowHumidity" >
                      <b-icon-droplet class="icon-bootstrap"/>
                    </span>
                    <span
                      v-else-if="cWeatherCity.main.humidity > lowHumidity && cWeatherCity.main.humidity < middleHumidity">
                      <b-icon-droplet-half class="icon-bootstrap"/>
                    </span>
                    <span v-else>
                      <b-icon-droplet-fill class="icon-bootstrap"/>
                    </span>
                    <span>{{ cWeatherCity.main.humidity |pourcentage }}</span>
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
import { token } from '@/main'

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

<style lang="scss" scoped>

.card-weather {
  background: url('../assets/image/un-ciel-sans-nuage.jpg');
  background-size: cover;
  height: 100%;
}

.container-weather-card {
  height: 100%;
  width: 100%;
}

.col-element-wheather {
  height: 50px
}

.element-weather {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-bootstrap {
  width: 25px;
  height: 25px;
}

img{
  width: 100px;
}

span{
  font-size: 25px;
}
</style>
