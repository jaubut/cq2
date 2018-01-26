<template>
  <router-link :to="href">
    <button>
      <slot></slot>
    </button>
  </router-link>
</template>
<script>
export default {
  name: 'interButton',
  props: ['href']
}
</script>
<style lang="sass" scoped>
  button
    margin-top: 15px
    height: 25px
    width: 100px
    background: #F8F3EB
    border-radius: 5px
    border: none
    cursor: pointer
    transition: all ease-in-out .5s
    box-shadow: 0px 7px 15px -6px rgba(0, 0, 0, 0.5)
    &:hover
      transform: scale(1.1)
</style>
