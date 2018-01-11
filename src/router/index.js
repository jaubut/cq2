import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/pages/index'
import Alimentation from '@/pages/alimentation'
import Construction from '@/pages/construction'
import Blog from '@/pages/blog/index'
import Slug from '@/pages/blog/_slug'
import Tag from '@/pages/tags/_tag'
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
      meta: {
        lang: true
      },
      props: true
    },
    {
      path: '/en/food',
      name: 'Alimentation',
      component: Alimentation,
      meta: {
        lang: false
      },
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
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      props: true
    },
    {
      path: '/blog/:tag/:slug',
      name: ':slug',
      component: Slug,
      props: true
    },
    {
      path: '/tags/:tag',
      name: ':tag',
      component: Tag,
      props: true
    }
  ]
})
