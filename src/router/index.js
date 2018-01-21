import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import alimentation from '@/pages/alimentation'
import construction from '@/pages/construction'
import soins from '@/pages/soinscorpo'
import textile from '@/pages/textile'
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
      name: 'index',
      component: index
    },
    {
      path: '/alimentation',
      name: 'alimentation',
      component: alimentation
    },
    {
      path: '/construction',
      name: 'construction',
      component: construction
    },
    {
      path: '/soins-corpo',
      name: 'soins',
      component: soins
    },
    {
      path: '/textile',
      name: 'textile',
      component: textile
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
