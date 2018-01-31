<template>
  <a :href="href" target="_blank">
    <button :class="caca">
      <p><slot></slot></p>
    </button>
  </a>
</template>
<script>
export default {
  name: 'CqButton',
  props: ['href', 'caca']
}
</script>
<style lang="sass" scoped>
  button
    height: 100px
    width: 100px
    color: white
    border-radius: 100%
    border: none
    background: rgba(#CB5A44,0.5)
    box-shadow: 0px 8px 18px -10px rgba(black,0.75)
    cursor: pointer
    transition: all ease-in-out .5s
    animation: pulse-shadow-dark 2s infinite
    p 
      font-size: 1rem
      font-weight: bold
    &:hover
      transform: scale(1.1)
      color: #822c17 !important 
      animation: none
  .color-beige 
    background: rgba(#F8F3EB,0.5) !important
    animation: pulse-shadow-light 2s infinite !important
    &:hover
      color: #F8F3EB !important
  a 
    height: auto
    width: auto
</style>
