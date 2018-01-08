<template>
  <div id="Alimentation">
    <p>{{ alimentation.fields.headline }}</p>
  </div>
</template>
<script>
import {createClient} from '../../utils/contentful-api'

const client = createClient()
export default {
  name: 'Alimentation',
  data () {
    return {
      alimentation: []
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
        'content_type': 'alimentation',
        order: '-sys.createdAt',
        'locale': this.$store.state.lang
      })
        .then(response => {
          this.alimentation = response.items[0]
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
</style>
