<template>
  <Bloc class="blue dark">
    <Texte>
      <h2>Facebook</h2>
      <p>Suivez-nous !</p>
    </Texte>
    <div class="fb-like" data-href="https://facebook.com/jechanvre/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false"></div>
  </Bloc>
</template>
<script>
import Bloc from '../cqbloc'
import Texte from '../texte'

export default {
  name: 'Quatorze',
  components: {
    Bloc,
    Texte
  }
}
</script>
<style lang="sass" scoped>
</style>
