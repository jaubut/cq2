import Vue from 'vue'
import Router from 'vue-router'

import lechanvre from '@/pages/lechanvre'
import Apropos from '@/pages/apropos'
import Photos from '@/pages/photos'
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
        title: 'Chanvre Québec | On parle de chanvre et on aime ça',
        metaTags: [
          {
            name: 'description',
            content: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.'
          },
          {
            property: 'og:url',
            content: ':$route.path'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: ':name'
          },
          {
            property: 'og:image',
            content: 'https://cq2.imgix.net/img/background-social-media.png'
          }
        ]
      }
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
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
      props: true,
      meta: {
        title: 'Tissus Chanvre Québec | Connectez avec des entreprises en textile',
        metaTags: [
          {
            name: 'description',
            content: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le tissus de chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.'
          },
          {
            property: 'og:url',
            content: ':route.path'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: ':name'
          },
          {
            property: 'og:image',
            content: 'https://cq2.imgix.net/lechanvre/tige.png'
          }
        ]
      }
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
