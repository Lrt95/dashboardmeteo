<template>
  <b-container>
      <b-table :items="items" :fields="fields"></b-table>
      <h2>From forecast</h2>
      <p>{{forecastData}}</p>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Forecast',
  data () {
    return {
      data: null,
      city: null,
      temp: [],
      fields: [
        {
          key: 'hour',
          label: 'Heure'
        },
        {
          key: 'temp',
          label: 'Temperature'
        }

      ],
      temp2: null,
      temp3: null,
      temp4: null,
      temp5: null,
      temp_low: null,
      temp_high: null,
      items: [{ hour: '12h', temp: '30/10/2020' }]
    }
  },
  computed: {
    cCity: {
      get () {
        return this.$store.state.city
      }
    }
  },
  watch: {
  },
  methods: {
    addWeather (temp) {
      // this.temp = forecastData.list[0].weather
    },
    getWeathersCity (city) {
      axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr')
        .then((response) => response.data)
    }
  },
  asyncComputed: {
    forecastData: {
      get () {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.cCity + '&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr')
          .then((response) => response.data /*  {
            this.temp.push(response.data.list[0])
            this.temp3 = response.data.list[2]
            this.temp4 = response.data.list[3]
            this.temp5 = response.data.list[4]
          } */)
      },
      default () {
        return 'Loading...'
      }
    }
  }
}
</script>
