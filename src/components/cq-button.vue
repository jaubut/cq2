<template>
  <a :href="href" target="_blank">
    <button @click="incrementCount">
      <p><slot></slot></p>
      <p> {{clientsObj.count}} </p>
    </button>
  </a>
</template>
<script>
import { db } from '../firebase'

export default {
  name: 'CqButton',
  props: ['href'],
  computed: {
    client () {
      return this.clientsObj
    }
  },
  firebase: {
    clients: db.ref('clients'),
    clientsObj: {
      source: db.ref('clients'),
      asObject: true
    }
  },
  methods: {
    incrementCount (count) {
      db.ref('clients').push({ name: this.$route.name, count: 100 })
    }
  }
}
</script>
<style lang="sass" scoped>
  button
    margin-top: 50px
    height: 100px
    width: 100px
    color: white
    border-radius: 100%
    border: none
    background: rgba(#CB5A44,0.5)
    box-shadow: 0px 8px 18px -10px rgba(black,0.75)
    cursor: pointer
    transition: all ease-in-out .5s
    &:hover
      transform: scale(1.1)
</style>
