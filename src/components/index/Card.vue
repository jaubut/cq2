<template>
  <div @mousehover="hover = !hover" id="Cards">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Cards',
  props: ['hover']
}
</script>
<style lang="sass" scoped>
  #Cards
    display: flex
    flex-flow: column wrap
    justify-content: space-evenly
    align-items: center
    font-family: 'Barlow', sans-serif
    background-image: none
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    overflow: hidden
    padding: 5%
  .green
    background: #4F5D56 !important
  .blue
    background: #4267B2 !important
  #Cards:nth-child(5n+1)
    grid-column: 1 / 3
    background-color: #F6F6F6
    justify-content: center
  #Cards:nth-child(5n+2)
    grid-columns: 1 / 2
    background-color: #F6F6F6
  #Cards:nth-child(5n+3)
    grid-columns: 2 / 3
    background-color: #F8F3EB
  #Cards:nth-child(5n+4)
    grid-columns: 1 / 2
    background-color: #F8F3EB
  #Cards:nth-child(5n+5)
    grid-columns: 2 / 3
    background-color: #F6F6F6
  @media (max-width: 468px)
    #Cards
      grid-column: 1/3
</style>
