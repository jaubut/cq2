<template>
  <Bloc class="span-2">
    <Texte>
      <h2>le chanvre</h2>
      <p>le chanvre une plante duöique de nature dans la famille des cannabinaces. Elle est originaire d'Asie du Sud-Est et est présente partout dans le monde. Pour son grain, sa fibre, son bois et ses feuilles.</p>
    </Texte>
  </Bloc>
</template>
<script>
import Bloc from '../cqbloc'
import Texte from '../texte'

export default {
  name: 'Un',
  components: {
    Bloc,
    Texte
  }
}
</script>
<style lang="sass" scoped>
  h2
    font-size: 48px !important
</style>
