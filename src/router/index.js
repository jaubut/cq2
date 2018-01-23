import Vue from 'vue'
import Router from 'vue-router'

import lechanvre from '@/pages/lechanvre'
import Apropos from '@/pages/apropos'
import Chanv from '@/pages/artisans/chanv'
import Crocx from '@/pages/artisans/crocx'
import Jechanvre from '@/pages/artisans/jechanvre'
import Votremarque from '@/pages/artisans/votremarque'
import Artisans from '@/pages/artisans/index'
import Blog from '@/pages/blog/index'
import Slug from '@/pages/blog/_slug'
import Tag from '@/pages/tags/_tag'
import Index from '@/pages/cq-index'
import Alimentation from '@/pages/cq-alimentation'
import CBD from '@/pages/cq-cbd'
import Construction from '@/pages/cq-construction'
import Soins from '@/pages/cq-soinscorpo'
import Textile from '@/pages/cq-textile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true,
      meta: {
        title: 'Accueil - Chanvre Quebec',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
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
      path: '/cbd',
      name: 'CBD',
      component: CBD,
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
      path: '/artisans/votremarque',
      name: 'Votremarque',
      component: Votremarque,
      props: true
    },
    {
      path: '/artisans/crocx',
      name: 'Crocx',
      component: Crocx,
      props: true,
      meta: {
        title: 'Crocx - Chanvre Quebec',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/artisans/jechanvre',
      name: 'Jechanvre',
      component: Jechanvre,
      props: true,
      meta: {
        title: 'Jechanvre - Chanvre Quebec',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/lechanvre',
      name: 'Lechanvre',
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
