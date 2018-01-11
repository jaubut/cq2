<template>
  <Bloc class="span-2">
    <Texte>
      <h2>chanv.co</h2>
      <p>Des produits sains pour ta peau</p>
      <p>{{ $store.state.counterChanvCo }}</p>
      <button @click="--$store.state.counterChanvCo">decrement</button>
    </Texte>
    <img src="../../assets/serum.png" alt="">
  </Bloc>
</template>
<script>
import Bloc from '../bloc'
import Texte from './text'

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
