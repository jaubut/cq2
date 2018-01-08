<template>
  <div @mousehover="hover = !hover" id="Cards" v-bind:style="{'background-image': 'url(' + card.fields.background.fields.file.url + ')'}" :class="card.fields.specialclass">
    <router-link :to="{ name: card.fields.link }">
      <div class="hover" v-show="hover">
        <p>titi caca</p>
      </div>
    </router-link>
    <div class="text" v-bind:class="{ dark: card.fields.dark }">
      <h2>{{ card.fields.title }}</h2>
      <p>{{ card.fields.description }}</p>
    </div>
    <img :src="card.fields.image.fields.file.url" alt="">
    <i v-html="card.fields.code"></i>
  </div>
</template>
<script>
export default {
  name: 'Cards',
  props: ['card'],
  data () {
    return {
      hover: false
    }
  }
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
    .text
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
  .green
    background: #4F5D56 !important
  .blue
    background: #4267B2 !important
    img
      height: 0
  .hover
    background: rgba(black, 0.5)
    height: 100%
    width: 100%
    margin: 5%
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
