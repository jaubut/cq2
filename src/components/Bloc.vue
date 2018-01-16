<template>
  <div id="Bloc">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Bloc',
  props: ['hover']
}
</script>
<style lang="sass" scoped>
  #Bloc
    display: flex
    flex-flow: column wrap
    justify-content: space-evenly
    grid-column: span 1
    align-items: center
    font-family: 'Barlow', sans-serif
    background-color: #f6f6f6
    background-image: none
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    overflow: hidden
    padding: 5%
  video
    width: 100%
    height: auto
    background: black
  .green
    background: #4F5D56 !important
    color: white !important
  .blue
    background: #4267B2 !important
  .span-2
    grid-column: span 2 !important
  .span-v
    grid-row: span 2
  .beige
    background-color: #F8F3EB !important
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
  @media (max-width:468px)
    #Bloc
      grid-column: span 2
    .span-v
      grid-row: span 1
</style>
