<template>
  <b-container>
      <b-table :items="cWeatherForFiveDays"
               :fields="fields"
               :current-page="currentPage"
               :per-page="perPage"
               fixed="fixed">
        <template v-slot:cell(icon)="icon">
          <b-img :src="'http://openweathermap.org/img/wn/' + icon.value + '.png'"></b-img>
        </template>
      </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    >
    </b-pagination>
  </b-container>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import { token } from '@/main'

export default {
  name: 'DetailWeather',
  data () {
    return {
      perPage: 8,
      currentPage: 1,
      temp: [],
      fields: [
        {
          key: 'dt',
          label: 'Heure'
        },
        {
          key: 'temp',
          label: 'Temperature'
        },
        {
          key: 'humidity',
          label: 'Humidité'
        },
        {
          key: 'icon',
          label: 'Temps'
        }

      ],
      items: []
    }
  },
  computed: {
    cCity: {
      get () {
        return this.$store.state.city
      }
    },
    rows () {
      return this.cWeatherForFiveDays.length
    }
  },
  watch: {
    cCity: function (val) {
      this.getWeathersCity(val)
    }
  },
  mounted () {
    this.getWeathersCity(this.cCity)
  },
  props: {
    weatherForFiveDays: Object
  },
  methods: {
    addWeather (dataWeather) {
      const tableWeather = []
      dataWeather.list.map(weather => {
        const objectWeather = {
          dt: moment(weather.dt * 1000).format('llll'),
          temp: this.fomatCelcius(weather.main.temp),
          desc: weather.weather[0].description,
          humidity: this.formatPourcentage(weather.main.humidity),
          icon: weather.weather[0].icon
        }
        tableWeather.push(objectWeather)
      })
      return tableWeather
    },
    getWeathersCity (city) {
      axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + token + '&lang=fr')
        .then((response) => {
          this.$store.commit('listWeathers', this.addWeather(response.data))
        })
    },
    fomatCelcius: function (temp) {
      return `${Math.round(temp)} °C`
    },
    formatPourcentage: function (pourcent) {
      return `${pourcent} % `
    }
  },
  asyncComputed: {
    cWeatherForFiveDays: {
      get () {
        return this.$store.getters.weatherForFiveDays
      },
      default () {
        return []
      }
    }
  }
}
</script>
