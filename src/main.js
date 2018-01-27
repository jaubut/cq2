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
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
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
