import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import VueMoment from 'vue-moment'
import AsyncComputed from 'vue-async-computed'
import momentTimezone from 'moment-timezone'
import VSwitch from 'v-switch-case'

const moment = require('moment')
require('moment/locale/fr')

export const token = 'f62193be91659d628930ed32c11252d9'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(VueMoment, { moment, momentTimezone })
Vue.use(VSwitch)
Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
