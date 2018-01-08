<template>
  <div id="Text">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Text'
}
</script>
<style lang="sass" scoped>
  #Text
    padding: 5%
    text-align: center
  h2
    font-size: 2.2rem
    font-weight: 600
  p
    font-size: 0.8rem
    font-weight: 400
  img
    max-height: 50%
    border-radius: 5px
  .dark
    color: white
  .hover
    background: rgba(black, 0.5)
    height: 100%
    width: 100%
    margin: 5%
</style>
