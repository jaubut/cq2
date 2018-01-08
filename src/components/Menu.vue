<template>
  <div id="Menu" ref="menuHeight">
    <router-link :to="{ name: 'Alimentation' }">{{ menu.fields.alimentation }}</router-link>
    <router-link :to="{ name: 'Construction' }">{{ menu.fields.construction }}</router-link>
    <router-link :to="{ name: 'Calendar' }">{{ menu.fields.textile }}</router-link>
    <router-link :to="{ name: 'Merch' }">{{ menu.fields.soins }}</router-link>
    <router-link :to="{ name: 'Evenement'}">{{ menu.fields.blog }}</router-link>
  </div>
</template>
<script>
import {createClient} from '../../utils/contentful-api'

const client = createClient()
export default {
  name: 'Menu',
  data () {
    return {
      menu: []
    }
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
        'content_type': 'menu',
        order: '-sys.createdAt',
        'locale': this.$store.state.lang
      })
        .then(response => {
          this.menu = response.items[0]
          return response
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass" scoped>
  #Menu
    position: absolute
    z-index: 0
    background: rgba(white, 0.4)
    margin: 2%
    padding: 2% 2%
    height: auto
    width: 92%
    display: flex
    flex-flow: column wrap
    border-radius: 5px
    text-align: left
    line-height: 2rem
    a
      font-family: 'Barlow', sans-serif
      font-size: 1rem
      font-weight: 600
      width: inherit
      &:hover
        transform: translateX(5px)
        transition: transform .5s ease-in-out
</style>
