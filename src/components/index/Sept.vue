<template>
  <Bloc class="beige">
    <button @click="animTrigger === true">trigger me</button>
    <span id="data-spirit-id" class="button last-article">Dernier article</span>
    <router-link :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug"">
      <Texte class="">
        <h2>{{ post.fields.title }}</h2>
        <p>{{ truncate(post.fields.description) }}</p>
        <span>{{ ( new Date(post.fields.publishDate)).toDateString() }}</span>
      </Texte>
    </router-link>
  </Bloc>
</template>
<script>
import spirit from 'spiritjs'

import Bloc from '../cqbloc'
import Texte from '../texte'
import {createClient} from '../../../utils/contentful-api'

const client = createClient()

var stop = 40
export default {
  name: 'Sept',
  components: {
    Bloc,
    Texte
  },
  data () {
    return {
      post: [],
      animTrigger: false
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
    },
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    },
    animAction () {
      if (this.animTrigger === true) {
        spirit.loadAnimation({
          path: '../../static/animation/buttondernierarticle.json'
        })
      } else {
        console.log('caca')
      }
    }
  }
}
</script>
<style lang="sass" scoped>
  .white
    color: white !important
    text-shadow: 1px 5px 15px -7px rgba(black, 0.75)
</style>
