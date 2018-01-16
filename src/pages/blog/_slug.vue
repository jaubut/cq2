<template>
  <div id="Slug">
    <Bloc class="bloc">
      <Texte>
        <h1>{{ post.fields.title }}</h1>
        <p>{{ ( new Date(post.fields.publishDate)).toDateString() }}</p>
      </Texte>
    </Bloc>
    <Bloc class="bloc" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}"></Bloc>
    <div class="body">
      <h3>{{ post.fields.description }}</h3>
      <VueMarkdown class="post-single">{{ post.fields.body }}</VueMarkdown>
    </div>
    <Bloc class="bloc hash">
      <div v-for="tag in post.fields.tags" :key="tag" class="tag">
        <router-link :to="'../../tags/'+ tag"><button class="hastag"><h3>{{ tag }}</h3></button></router-link>
      </div>
    </Bloc>
    <Bloc class="bloc">
      <Person :person="post"></Person>
    </Bloc>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '../../../utils/contentful-api'
import Bloc from '@/components/cqbloc'
import Texte from '@/components/texte'
import Person from '@/components/person'

const client = createClient()

export default {
  name: 'Slug',
  components: {
    Bloc,
    Texte,
    Person,
    VueMarkdown
  },
  data () {
    return {
      post: [],
      relatedposts: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        'fields.slug': this.$route.params.slug
      })
        .then(response => {
          this.post = response.items[0]
          return response
        })
      client.getEntries({
        'content_type': 'blogPost',
        'fields.tags[in]': this.$route.params.tag,
        order: '-sys.createdAt'
      })
        .then(response => {
          this.relatedposts = response.items
          return response
        })
    }
  }
}
</script>
<style lang="sass" scoped>
  #Slug
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 10px
    width: 100%
  .bloc
    height: calc(100vh/1.7)
  .body
    display: flex
    flex-flow: column wrap
    justify-content: space-evenly
    grid-column: span 2
    align-items: center
    background-color: #f6f6f6
    overflow: hidden
    padding: 5% 20%
    line-height: 1.8rem
    font-weight: 300
    font-family: 'Barlow', sans-serif
    font-size: 1rem
    h3
      padding-bottom: 50px
      text-align: center
      color: #4F5D56
      font-size: 2rem
      font-weight: 400
      line-height: 2.1rem
  img
    width: 80%
    height: auto
  .post-single
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-self: center
    text-align: justify
  .hastag
    border: 2px white solid
    border-radius: 5px
    height: 50px
    width: 100px
    padding: 0 3%
    background: rgba(#4F5D56, 0.6)
    color: white
    &:hover
      background: rgba(#4F5D56, 1)
      transform: translateY(3px)
      cursor: pointer
  .hash
    flex-flow: row wrap !important
</style>
