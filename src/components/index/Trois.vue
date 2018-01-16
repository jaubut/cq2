<template>
  <Bloc class="photo">
  </Bloc>
</template>
<script>
import Bloc from '../cqbloc'
import Texte from '../texte'

export default {
  name: 'Trois',
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
