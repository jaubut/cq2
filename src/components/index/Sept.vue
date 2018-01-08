<template>
  <Bloc class="beige">
    <Texte>
      <h2>dernier article</h2>
      <p>Le dernier article</p>
    </Texte>
    <img src="../../assets/img/photo-1.jpg" alt="">
  </Bloc>
</template>
<script>
import Bloc from '../bloc'
import Texte from './text'

export default {
  name: 'Sept',
  components: {
    Bloc,
    Texte
  }
}
</script>
<style lang="sass" scoped>
</style>
