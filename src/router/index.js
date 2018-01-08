import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/pages/index'
import Alimentation from '@/pages/alimentation'
import Construction from '@/pages/construction'
import Rindex from '@/pages/rindex'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true
    },
    {
      path: '/alimentation',
      name: 'Alimentation',
      component: Alimentation,
      props: true
    },
    {
      path: '/construction',
      name: 'Construction',
      component: Construction,
      props: true
    },
    {
      path: '/home',
      name: 'Rindex',
      component: Rindex,
      props: true
    }
  ]
})
