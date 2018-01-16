<template>
  <a :href="href" target="_blank">
    <button>
      <slot></slot>
    </button>
  </a>
</template>
<script>
export default {
  name: 'CqButton',
  props: ['href']
}
</script>
<style lang="sass" scoped>
  button
    margin-top: 50px
    height: 100px
    width: 100px
    background: #F8F3EB
    border-radius: 100%
    border: none
    box-shadow: 0px 5px 20px -12px rgba(0,0,0,0.75)
    cursor: pointer
    transition: all ease-in-out .5s
    &:hover
      transform: scale(1.1)
</style>
