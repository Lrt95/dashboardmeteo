import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'
import WeatherDetails from '../views/WeatherDetailsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/WeatherDetails/:id',
    name: 'WeatherDetails',
    component: WeatherDetails
  },
  {
    path: '*',
    name: 'Weather',
    component: Weather
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
