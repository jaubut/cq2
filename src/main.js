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

import CqButton from '@/components/cqbutton'
import InterButton from '@/components/interbutton'
import cqBloc from '@/components/cq-bloc'
import cqTexte from '@/components/cq-texte'

Vue.component('tiny-slider', VueTinySlider)
Vue.component('CqButton', CqButton)
Vue.component('InterButton', InterButton)
Vue.component('Bloc', cqBloc)
Vue.component('Texte', cqTexte)

Vue.config.productionTip = false
var contentful = require('contentful')

Vue.use(Axios)
Vue.use(VueFire)
Vue.use(contentful)
Vue.use(Vuex)

router.afterEach(() => {
  window.scrollTo(0, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: function () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
