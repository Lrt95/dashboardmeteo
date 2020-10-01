<template>
  <b-jumbotron>
  <div>
    <l-map
      :zoom="zoom"
      minZoom="3"
      :center="center"
      worldCopyJump="true"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <!-- Use default icon -->
<div v-for="(weatherCity, index) in this.$store.getters.citiesWeather" v-bind:key="index">
  <l-marker :lat-lng="[weatherCity.coord.lat, weatherCity.coord.lon]">
    <l-icon
      class-name="someExtraClass"
    >
      <img :src="'http://openweathermap.org/img/wn/'+weatherCity.weather[0].icon+'.png'" />
      <div class="headline">
        {{ weatherCity.main.temp | temperature}}
      </div>
    </l-icon>
    <l-popup>{{weatherCity.name}}</l-popup>
  </l-marker>
</div>
    </l-map>
  </div>
  </b-jumbotron>

</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet'
import { latLng } from 'leaflet'

export default {
  name: 'LeaftletMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  data () {
    return {
      zoom: 3,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  asyncComputed: {
    cCitiesWeather: {
      get () {
        return this.$store.getters.citiesWeather
      },
      default () {
        return 'Loading...'
      }
    }
  },
  filters: {
    temperature: function (temp) {
      return `${Math.round(temp)} °C`
    }
  }
}
</script>

<style>
  .someExtraClass {
    background: url(../assets/image/un-ciel-sans-nuage.jpg);
    padding: 10px;
    border-radius: 0 20px 20px 20px;
    box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
  }
</style>
