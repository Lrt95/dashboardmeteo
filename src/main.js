import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AsyncComputed from 'vue-async-computed'
import VueMoment from 'vue-moment'

const moment = require('moment')
require('moment/locale/fr')

Vue.config.productionTip = false

Vue.use(AsyncComputed)
Vue.use(VueMoment, {
  moment
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
