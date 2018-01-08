<template>
  <div id="Rindex">
    <Un></Un>
    <Trois></Trois>
    <Dix></Dix>
  </div>
</template>
<script>
import Un from '@/components/index/un'
import Trois from '@/components/index/trois'
import Dix from '@/components/index/dix'

export default {
  name: 'Rindex',
  components: {
    Un,
    Trois,
    Dix
  }
}
</script>
<style lang="sass" scoped>
  #Rindex
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
