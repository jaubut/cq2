<template>
  <div id="Menu">
    <router-link :to="{ name: 'Alimentation' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Alimentation</h2>
      <h2 v-else>Food</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Tout sur l'alimentation</p>
      <p v-else>Everything on food</p>
    </router-link>
    <router-link :to="{ name: 'Construction' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Construction</h2>
      <h2 v-else>Building</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Construction</p>
      <p v-else>Construction</p>
    </router-link>
    <router-link :to="{ name: 'Textile' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Textle</h2>
      <h2 v-else>Clothing</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Textile</p>
      <p v-else>Clothing</p>
    </router-link>
    <router-link :to="{ name: 'Soins' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Soins-corporel</h2>
      <h2 v-else>Skin-care</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Soins-corporel</p>
      <p v-else>Skin-care</p>
    </router-link>
    <router-link :to="{ name: 'Blog'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Le blog</h2>
      <h2 v-else>The blog</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Le blog</p>
      <p v-else>The blog</p>
    </router-link>
    <router-link :to="{ name: 'Apropos'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">L'équipe</h2>
      <h2 v-else>The team</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">À propos de nous</p>
      <p v-else>About us</p>
    </router-link>
    <router-link :to="{ name: 'Artisans'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Nos marques</h2>
      <h2 v-else>Our brands</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Les entreprises du chanvre d'ici</p>
      <p v-else>The companies from here</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'menu'
}
</script>
<style lang="sass" scoped>
  #Menu
    position: absolute
    display: flex
    flex-flow: column wrap
    justify-content: flex-start
    align-items: flex-start
    background: rgba(white, 0.4)
    margin: 2%
    padding: 2% 2%
    height: 40vh
    width: 92%
    border-radius: 5px
    overflow: scroll
    h2
      font-family: 'Barlow', sans-serif
      font-size: 2rem
      @media(max-width:468px)
        font-size: x-large
    p
      font-family: 'Barlow', sans-serif
      font-size: 1rem
      font-weight: 100
      color: rgba(black,0.7)
      width: inherit
      margin: 0
      margin-top: -5px
      @media(max-width:468px)
        font-size: smaller
    a
      padding: 15px 5px
      &:hover
        transform: translateX(5px)
        transition: transform .5s ease-in-out
</style>
