<template>
  <div id="Tag">
    <Bloc class="span-2">
      <Texte>
        <h2>{{ tag }}</h2>
      </Texte>
    </Bloc>
    <BlocPost v-for="post in posts" :key="post.fields.title" :post="post">
    </BlocPost>
  </div>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'
import BlocPost from '@/components/blocPost'
import Bloc from '@/components/bloc'
import Texte from '@/components/texte'

const client = createClient()

export default {
  name: 'Tag',
  props: ['tag'],
  components: {
    BlocPost,
    Bloc,
    Texte
  },
  data () {
    return {
      posts: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        'fields.tags[in]': this.$route.params.tag,
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
  #Tag
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
