<template>
  <Bloc class="beige" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}">
    <router-link :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug"">
      <Texte class="white">
        <h2>{{ post.fields.title }}</h2>
        <p>{{ post.fields.description }}</p>
        <span>{{ ( new Date(post.fields.publishDate)).toDateString() }}</span>
      </Texte>
    </router-link>
  </Bloc>
</template>
<script>
import Bloc from '../bloc'
import Texte from './text'
import {createClient} from '../../../utils/contentful-api'

const client = createClient()

export default {
  name: 'Sept',
  components: {
    Bloc,
    Texte
  },
  data () {
    return {
      post: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.post = response.items[0]
          return response
        })
    }
  }
}
</script>
<style lang="sass" scoped>
  .white
    color: white !important
    text-shadow: 1px 5px 15px -7px rgba(black, 0.75)
</style>
