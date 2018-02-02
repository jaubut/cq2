// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import App from './App'
import Axios from 'axios'
import VueTinySlider from 'vue-tiny-slider'
import store from './store'
import router from './router'

import CqButton from '@/components/cq-button'
import InterButton from '@/components/cq-inbutton'
import cqBloc from '@/components/cq-bloc'
import cqTexte from '@/components/cq-texte'
import cqTexteBig from '@/components/cq-texte-big'

Vue.component('tiny-slider', VueTinySlider)
Vue.component('CqButton', CqButton)
Vue.component('InterButton', InterButton)
Vue.component('Bloc', cqBloc)
Vue.component('Texte', cqTexte)
Vue.component('BigTexte', cqTexteBig)

Vue.config.productionTip = false
var contentful = require('contentful')

Vue.use(Axios)
Vue.use(VueFire)
Vue.use(contentful)
Vue.use(Vuex)

router.afterEach(() => {
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
