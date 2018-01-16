<template>
  <Bloc class="span-2">
    <Texte>
      <h2>chanv.co</h2>
      <p>Des produits sains pour ta peau</p>
    </Texte>
    <img src="../../assets/serum.png" alt="">
  </Bloc>
</template>
<script>
import Bloc from '../cqbloc'
import Texte from '../texte'

export default {
  name: 'Six',
  components: {
    Bloc,
    Texte
  }
}
</script>
<style lang="sass" scoped>
</style>
