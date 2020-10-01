<template>
  <b-container>
     <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    >
    </b-pagination>
      <b-table :items="cWeatherForFiveDays" :fields="fields" :current-page="currentPage" :per-page="perPage"></b-table>
      <h2>From forecast</h2>
      <p>{{ cWeatherForFiveDays }}</p>
  </b-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Forecast',
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
          key: 'desc',
          label: 'Temps'
        },
        {
          key: 'humidity',
          label: 'Humidité'
        },
        {
          key: 'icon',
          label: 'Icone'
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
  },
  props: {
    weatherForFiveDays: Object
  },
  updated () {
    this.getWeathersCity(this.cCity)
  },
  methods: {
    addWeather (dataWeather) {
      const tableWeather = []
      dataWeather.list.map(weather => {
        const objectWeather = {
          dt: moment(weather.dt * 1000).format('llll'),
          temp: weather.main.temp,
          desc: weather.weather[0].description,
          humidity: weather.main.humidity,
          icon: weather.weather[0].icon
        }

        tableWeather.push(objectWeather)
      })
      return tableWeather
    },
    getWeathersCity (city) {
      axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr')
        .then((response) => {
          this.$store.commit('listWeathers', this.addWeather(response.data))
        })
    }
  },
  asyncComputed: {
    cWeatherForFiveDays: {
      get () {
        return this.$store.getters.weatherForFiveDays
      },
      default () {
        return 'Loading...'
      }
    }
  }
}
</script>
