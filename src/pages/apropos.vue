<template>
  <div id="Apropos">
    <Bloc class="span-2">
      <Texte>
        <h2>Chanvre Québec</h2>
        <p>Nous on parle de chanvre et on aime ça.</p>
      </Texte>
    </Bloc>
    <Bloc class="beige">
      <Texte>
        <h2>Notre Mission</h2>
        <p>Notre mission est de faire de la marde.</p>
      </Texte>
    </Bloc>
    <Bloc>
      <Texte>
        <h2>Notre Vision</h2>
        <p>Notre vision est que nous sommes la tête et non la queue du père à amé.</p>
      </Texte>
    </Bloc>
    <Bloc class="span-2">
      <Texte>
        <h2>Notre Équipe</h2>
      </Texte>
    </Bloc>
    <template v-for="person in persons">
      <Bloc :key="person.title" class="bloc">
        <Texte>
          <h2>{{ person.fields.name }}</h2>
          <p>{{ person.fields.shortBio }}</p>
          <p>you can follow {{ person.fields.name }} on <span><a target="_blank" :href="'https://twitter.com/'+person.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
        </Texte>
      </Bloc>
      <Bloc :key="person.title" :style="{'background-image': 'url(' + person.fields.image.fields.file.url + ')'}"></Bloc>
    </template>
  </div>
</template>
<script>
import {createClient} from '../../utils/contentful-api'

const client = createClient()

export default {
  name: 'Apropos',
  data () {
    return {
      persons: []
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
        'content_type': 'author',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.persons = response.items
          return response
        })
    }
  }
}
</script>
<style lang="sass" scoped>
  #Apropos
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
    @media(max-width:468px)
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
</style>
