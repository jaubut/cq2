<template>
  <div id="Index">
    <Bloc class="span-2">
      <Texte>
        <h2>bienvenue sur le blog</h2>
        <p>Le meilleur contenu sur le chanvre au Québec.</p>
        <div v-for="post in posts" class="tag-list">
          <span @click="" v-for="tag in post.fields.tags" :key="tag">{{ tag }}</span>
        </div>
      </Texte>
    </Bloc>
    <BlocPost v-for="post in posts" :key="post.fields.title" :post="post">
    </BlocPost>
  </div>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'
import BlocPost from '@/components/blocPost'

const client = createClient()

export default {
  name: 'Index',
  components: {
    BlocPost
  },
  data () {
    return {
      posts: []
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
