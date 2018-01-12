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
import axios from 'axios'

export default {
  name: 'Six',
  components: {
    Bloc,
    Texte
  },
  data () {
    return {
      dataCount: []
    }
  },
  methods: {
    getClients () {
      axios.get('https://cq2data.firebaseio.com/clients/.json')
        .then(response => {
          this.dataCount = response.data
        })
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
