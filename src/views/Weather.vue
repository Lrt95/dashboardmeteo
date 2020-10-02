<template>
  <div style="display: flex; flex-direction: row; height: 100%;" >
    <div style="display: flex; flex-direction: column; width: 30%; min-width: 30%;">
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
    <div style="width: 70%">
      <md-card>
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
  </div>

</template>

<script>

import SearchCity from '@/components/SearchCity'
import WeatherMap from '@/components/WeatherCard'
import ListWeatherCity from '../components/ListWeatherCity'
import LeafletMap from '../components/LeafletMap'

export default {
  name: 'Weather',
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
  margin: 20px 4px;
  vertical-align: top;
}
</style>
