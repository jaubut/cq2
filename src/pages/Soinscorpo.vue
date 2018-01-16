<template>
  <div id="SoinsCorpo">
    <Bloc class="span-2">
      <Texte>
        <h2>Allo</h2>
        <p>Bonjour</p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
import Bloc from '@/components/bloc'
import Texte from '@/components/index/text'

export default {
  name: 'SoinsCorpo',
  components: {
    Bloc,
    Texte
  }
}
</script>
<style lang="sass" scoped>
  #SoinsCorpo
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
