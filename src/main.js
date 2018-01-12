// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import App from './App'
import Axios from 'axios'
import store from './store'
import router from './router'

Vue.config.productionTip = false
var contentful = require('contentful')

Vue.use(Axios)
Vue.use(VueFire)
Vue.use(contentful)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
