<template>
  <b-container>
    <b-card
      overlay
      :title=weatherCity.name
      :sub-title="weatherCity.dt + weatherCity.timezone|moment('timezone','Etc/UTC','LLLL')"
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
            <div>{{weatherCity.main.temp|celcius}}</div>
          </b-col>
          <b-col sm="6" align-self="center">
          <img :src="'http://openweathermap.org/img/wn/'+weatherCity.weather[0].icon+'.png'" />
          </b-col>
          <b-col>
            <span>{{weatherCity.main.humidity|pourcentage}}</span>
            <div v-if="weatherCity.main.humidity < lowHumidity">
              <b-icon-droplet/>
            </div>
            <div v-else-if="weatherCity.main.humidity > lowHumidity && weatherCity.main.humidity < middleHumidity">
              <b-icon-droplet-half/>
            </div>
           <div v-else>
             <b-icon-droplet-fill/>
           </div>
          </b-col>
          <b-col sm="6">
            <b-button>Details</b-button>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-container>

</template>

<script>

export default {
  name: 'WeatherMap',
  data () {
    return {
      lowHumidity: 20,
      middleHumidity: 70
    }
  },
  props: {
    weatherCity: Object
  },
  filters: {
    celcius: function (temp) {
      return `${Math.round(temp)} °C`
    },
    pourcentage: function (pourcent) {
      return `${pourcent} % `
    }
  },
  methods: {
    displayHumidity (humidity) {
      if (humidity < 20) {
        return '<b-icon-droplet/>'
      } else if (humidity > 20 && humidity < 70) {
        return '<b-icon-droplet-half/>'
      } else {
        return '<b-icon-droplet-fill/>'
      }
    }
  }
}
</script>

<style scoped>
  .col {
    padding-bottom: 20%;
  }
</style>
