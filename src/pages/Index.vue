<template>
  <div id="Index">
    <template v-for="card in cards">
      <Cards :card="card"></Cards>
    </template>
  </div>
</template>
<script>
import {createClient} from '../../utils/contentful-api'
import Cards from '@/components/cards'

const client = createClient()
export default {
  name: 'Index',
  components: {
    Cards
  },
  data () {
    return {
      cards: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    'lang': 'fetchData'
  },
  computed: {
    lang () { return this.$store.state.lang }
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'index',
        order: 'fields.order',
        'locale': this.$store.state.lang
      })
        .then(response => {
          this.cards = response.items
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
</style>
