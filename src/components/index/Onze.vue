<template>
  <Bloc class="dark photo span-2">
    <Texte>
      <h2>art du chanvre</h2>
      <p>Des finitions à la chaux pas comme les autres</p>
    </Texte>
  </Bloc>
</template>
<script>
import Bloc from '../cqbloc'
import Texte from '../texte'

export default {
  name: 'Onze',
  components: {
    Bloc,
    Texte
  }
}
</script>
<style lang="sass" scoped>
  .photo
    background-image: url(../../assets/img/photo-1.jpg) !important
</style>
