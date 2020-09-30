<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Météo du jour </h1>
    <p>{{ meteoData }}</p>
    <p>Date du jour : {{ meteoData.dt | moment("l") }}</p>
    <p>Ville : {{ meteoData.name }}</p> <br/>
    <p>Pays : {{ meteoData.sys.country }}</p> <br/>
    <p>Météo actuelle : {{ meteoData.weather[0].description }}</p> <br/>
    <p>Température actuelle : {{ meteoData.main.temp }}</p> <br/>
    <p>Température min : {{ meteoData.main.temp_min }} | Température max : {{meteoData.main.temp_max}}</p><br />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  asyncComputed: {
    meteoData: {
      get () {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=londres&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr').then((response) => response.data)
      },
      default () {
        return 'Loading...'
      }
    },
    forecastData: {
      get () {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=londres&units=metric&appid=70422f1efd33aacb1117a8f38ae1006b&lang=fr').then((response) => response.data)
      },
      default () {
        return 'Loading...'
      }
    }

  }
}
</script>
