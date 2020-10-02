<template>
  <div class="container-card">
    <md-card>
        <md-card-header>
          <div class="md-title">Dashboard Météo {{cCity}}</div>
          <div class="md-subhead">Détails sur 5 jours</div>
        </md-card-header>
        <md-card-content>
          <DetailWeather/>
        </md-card-content>
    </md-card>
  </div>
</template>
<script>
import DetailWeather from '../components/DetailWeather'
export default {
  name: 'WeatherDetails',
  components: {
    DetailWeather
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

<style lang="scss" scoped>
.md-card {
  margin: 20px 4px;
  vertical-align: top;
}
</style>
