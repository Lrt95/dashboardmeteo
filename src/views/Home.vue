<template>
  <div>
    <div style="display: flex; flex-direction: row"; >
      <md-card >
        <md-ripple>
          <md-card-header>
            <div class="md-title">Météo Ville</div>
            <div class="md-subhead">Choix de la ville</div>
          </md-card-header>

          <md-card-content>
            <SearchCity/>
            <WeatherMap v-bind:city="cCity"/>
          </md-card-content>
        </md-ripple>
      </md-card>
      <md-card >
        <md-ripple>
          <md-card-header>
            <div class="md-title">Météo Monde</div>
            <div class="md-subhead">Visualisation Dashboard</div>
          </md-card-header>

          <md-card-content>
            <listWeatherCity/>
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
    <md-card >
      <md-ripple>
        <md-card-header>
          <div class="md-title">Météo Map</div>
          <div class="md-subhead">Carte Mondiale</div>
        </md-card-header>

        <md-card-content>
          <LeafletMap/>
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>

</template>

<script>

import SearchCity from '@/components/SearchCity'
import WeatherMap from '@/components/WeatherCard'
import ListWeatherCity from '../components/ListWeatherCity'
import LeafletMap from '../components/LeafletMap'

export default {
  name: 'Home',
  components: {
    LeafletMap,
    ListWeatherCity,
    WeatherMap,
    SearchCity
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
  margin: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  vertical-align: top;
}
</style>
