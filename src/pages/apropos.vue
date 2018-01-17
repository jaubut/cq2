<template>
  <div id="Apropos">
    <Bloc class="span-2">
      <Texte>
        <h2>Chanvre Québec</h2>
        <p>Nous on parle de chanvre et on aime ça.</p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
import Bloc from '@/components/cqbloc'
import Texte from '@/components/texte'

export default {
  name: 'Apropos',
  components: {
    Bloc,
    Texte
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
