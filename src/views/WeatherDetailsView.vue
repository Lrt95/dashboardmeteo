<template>
  <div>
    <md-card>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Dashboard Météo</div>
          <div class="md-subhead">Détails sur 5 jours</div>
        </md-card-header>
        <md-card-content>
          <DetailWeather/>
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>
<script>
import DetailWeather from '../components/DetailWeather'
export default {
  name: 'WeatherDetails',
  components: {
    DetailWeather
  }
}
</script>

<style>

</style>
