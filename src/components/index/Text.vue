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
    padding: 3% 5%
</style>
