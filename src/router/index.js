import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WeatherDetails from '../views/WeatherDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/WeatherDetails/:id',
    name: 'WeatherDetails',
    component: WeatherDetails
  },
  {
    path: '*',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
