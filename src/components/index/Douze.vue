<template>
  <Bloc class=" dark photo">
    <Texte>
      <h2>Photo</h2>
      <p>Nos photos préférées</p>
    </Texte>
  </Bloc>
</template>
<script>
import Bloc from '../bloc'
import Texte from './text'

export default {
  name: 'Douze',
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
