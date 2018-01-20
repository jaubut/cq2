<template>
  <Bloc class="span-2">
    <Texte>
      <h2>chanv.co</h2>
      <p class="center">Des produits sains pour ta peau</p>
    </Texte>
    <img src="https://demos.imgix.net/drift/watch-outside.jpg?w=400&amp;ch=DPR&amp;dpr=1" alt="">
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
