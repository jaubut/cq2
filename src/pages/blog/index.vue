<template>
  <div id="Index">
    <Bloc class="span-2">
      <Texte>
        <h2>bienvenue sur le blog</h2>
        <p>Le meilleur contenu sur le chanvre au Québec.</p>
        <div class="tag-list">
          <span @click="filter = null">Tout</span>
          <span @click="filter = 'general'">Général</span>
          <span @click="filter = 'alimentation'">Alimentation</span>
          <span @click="filter = 'construction'">Construction</span>
          <span @click="filter = 'soinscorporels'">Soins Corporels</span>
          <span @click="filter = 'textile'">Textile</span>
          <span @click="filter = 'cbd'">CBD</span>
        </div>
      </Texte>
    </Bloc>
    <BlocPost v-for="post in orderPosts" :key="post.fields.title" :post="post">
    </BlocPost>
  </div>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'
import BlocPost from '@/components/cq-blog-post'

const client = createClient()
var _ = require('lodash')

export default {
  name: 'Index',
  components: {
    BlocPost
  },
  data () {
    return {
      posts: [],
      filter: null
    }
  },
  computed: {
    orderPosts: function () {
      if (this.filter === null) {
        return this.posts
      } else {
        return _.filter(this.post, (fields) => _.includes(this.filter, fields.tags))
      }
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    'lang': 'fetchData'
  },
  methods: {
    fetchData () {
      return client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.posts = response.items
          return response
        })
    }
  }
}
</script>
<style lang="sass" scoped>
  #Index
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
    @media screen and (max-width: 468px) 
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
  .tag-list
    display: flex
    flex-flow: row wrap
    justify-content: space-around
    align-items: center
    span
      padding: 0 5px
      color: rgba(#4F5D56, 0.6)
      &:hover
        color: rgba(#4F5D56, 1)
</style>
