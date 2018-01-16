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
    font-weight: bold
  p
    font-size: 1.3rem
    font-weight: 100
    line-height: 1.5rem
    padding: 3% 10%
</style>
