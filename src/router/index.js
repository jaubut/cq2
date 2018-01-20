import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Alimentation from '@/pages/alimentation'
import Construction from '@/pages/construction'
import Soins from '@/pages/soinscorpo'
import Textile from '@/pages/textile'
import lechanvre from '@/pages/lechanvre'
import Apropos from '@/pages/apropos'
import Chanv from '@/pages/artisans/chanv'
import Crocx from '@/pages/artisans/crocx'
import Artisans from '@/pages/artisans/index'
import Blog from '@/pages/blog/index'
import Slug from '@/pages/blog/_slug'
import Tag from '@/pages/tags/_tag'

Vue.use(Router)

export default new Router({
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
      props: true
    },
    {
      path: '/construction',
      name: 'Construction',
      component: Construction,
      props: true
    },
    {
      path: '/soins-corpo',
      name: 'Soins',
      component: Soins,
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
      path: '/artisans',
      name: 'Artisans',
      component: Artisans,
      props: true
    },
    {
      path: '/artisans/chanv',
      name: 'Chanv',
      component: Chanv,
      props: true
    },
    {
      path: '/artisans/crocx',
      name: 'Crocx',
      component: Crocx,
      props: true
    },
    {
      path: '/lechanvre',
      name: 'lechanvre',
      component: lechanvre,
      props: true
    },
    {
      path: '/apropos',
      name: 'Apropos',
      component: Apropos,
      props: true
    }
  ]
})
