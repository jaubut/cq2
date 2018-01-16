<template>
  <div id="Footer">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Chanvre Québec Logo">
    </div>
    <div v-if="$store.state.lang.lang === 'fr-CA'" class="container">
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
    </div>
    <div v-if="$store.state.lang.lang === 'en'" class="container">
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>who are u bitch</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
    </div>
    <div class="base-footer">
      <p class="text-base">2018-2019 Open source under the MIT License ©</p>
      <div class="social" style="font-size:1em; color:#4F5D56;">
        <a href="https://www.twitter.com/chanvrequebec"target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/jechanvre" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/chanvrequebec" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    lang () { return this.$store.state.lang }
  }
}
</script>
<style lang="sass" scoped>
  #Footer
    display: grid
    grid-template: 10% 80% 10% / 10% 80% 10%
    width: 100%
    font-family: 'Barlow', sans-serif
    p
      font-size: 0.8rem
      padding: 15px 0
    h3
      font-size: 1rem
      font-weight: 600
  .container
    grid-area: 2/2/3/3
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    align-items: center
    padding: 5% 5% 10% 5%
  @media (min-width:468px)
    .container
      grid-area: 1/2/3/3
      justify-content: space-around
  .border-right
    grid-area: 1/3/3/4
    margin-bottom: 50px
    border-left: 1px solid black
  .text
    display: flex
    flex-flow: column wrap
    justify-content: space-between
    align-items: flex-start
    padding-top: 50px
  @media (min-width: 468px)
    .text
      padding-top: 0
  .logo
    grid-area: 1/1/1/3
    display: flex
    justify-content: flex-start
    align-items: center
    padding-left: 5%
    margin-top: -50px
    img
      height: 100px
  .base-footer
    grid-area: 3/1/4/4
    display: flex
    flex-flow: row wrap
    background: rgba(black, 0.2)
    padding: 10% 0
    justify-content: center
    align-items: center
  @media (min-width:468px)
    .base-footer
      justify-content: flex-end
      padding: 0
  .social
    display: flex
    flex-flow: row wrap
    padding: 0 10%
    a
      cursor: pointer
      padding: 0 10px
      transition: all ease-in-out .5s
      &:hover
        transform: scale(1.5)
  .text-base
    display: flex
    font-size: 0.8rem
    color: #4F5D56
    align-self: center
    margin-right: auto
    margin-left: 10%
</style>
