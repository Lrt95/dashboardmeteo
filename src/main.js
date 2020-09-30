import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMoment from 'vue-moment'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMoment)
Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
