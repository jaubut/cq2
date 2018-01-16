import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Alimentation from '../pages/alimentation'
import Construction from '../pages/construction'
import lechanvre from '../pages/lechanvre'
import Chanv from '../pages/chanv'
import crocx from '../pages/crocx'
import Blog from '../pages/blog/index'
import Slug from '../pages/blog/_slug'
import Tag from '../pages/tags/_tag'
import Index from '../pages/index'
import Soins from '../pages/soinscorpo'
import Textile from '../pages/textile'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Rindex',
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
      path: '/soins-corpo',
      name: 'Soins',
      component: Soins,
      props: true
    },
    {
      path: '/construction',
      name: 'Construction',
      component: Construction,
      props: true
    },
    {
      path: '/textile',
      name: 'Textile',
      component: Textile,
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
    },
    {
      path: '/chanv',
      name: 'Chanv',
      component: Chanv,
      props: true
    },
    {
      path: '/lechanvre',
      name: 'lechanvre',
      component: lechanvre,
      props: true
    },
    {
      path: '/crocx',
      name: 'crocx',
      component: crocx,
      props: true
    }
  ]
})
