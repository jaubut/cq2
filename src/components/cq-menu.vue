<template>
  <div id="cqMenu">
    <button @mouseover="autoScroll" class="next"><i class="fas fa-fast-forward"></i></button> 
    <router-link :to="{ name: 'Apropos'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">À propos</h2>
      <h2 v-else>The team</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">L'équipe et sa mission</p>
      <p v-else>About us</p>
    </router-link>
    <router-link :to="{ name: 'Lechanvre'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Le chanvre</h2>
      <h2 v-else>Hemp</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">information sur la plante</p>
      <p v-else>About the plant</p>
    </router-link>
    <router-link :to="{ name: 'Artisans'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Les marques d'ici</h2>
      <h2 v-else>Brands</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Les entreprises du chanvre</p>
      <p v-else>Made in Can.</p>
    </router-link>
    <router-link :to="{ name: 'Blog'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Le blogue</h2>
      <h2 v-else>The blog</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Information & opinion</p>
      <p v-else>The blog</p>
    </router-link>    
    <router-link :to="{ name: 'Construction' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Construction</h2>
      <h2 v-else>Building</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Maison en chanvre</p>
      <p v-else>Construction</p>
    </router-link>
    <router-link :to="{ name: 'Textile' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Textile</h2>
      <h2 v-else>Clothing</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Tissus en chanvre</p>
      <p v-else>Clothing</p>
    </router-link>
    <router-link :to="{ name: 'Soins' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Soins corporels</h2>
      <h2 v-else>Skin-care</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Huile de chanvre</p>
      <p v-else>Skin-care</p>
    </router-link>
     <router-link :to="{ name: 'Alimentation' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Alimentation</h2>
      <h2 v-else>Food</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Section alimentation</p>
      <p v-else>Everything on food</p>
    </router-link>
     <router-link :to="{ name: 'CBD' }">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Médecine</h2>
      <h2 v-else>Food</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">Informations sur le CBD</p>
      <p v-else>Everything on food</p>
    </router-link>
    <router-link :to="{ name: 'Photos'}">
      <h2 v-if="$store.state.lang.lang === 'fr-CA'">Photos</h2>
      <h2 v-else>Pictures</h2>
      <p v-if="$store.state.lang.lang === 'fr-CA'">La gallerie du chanvre</p>
      <p v-else>Our currated hemp pictures</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Cqmenu',
  methods: {
    autoScroll () {
      document.getElementById('cqMenu').scrollBy(10, 0)
    }
  }
}
</script>
<style lang="sass" scoped>
  #cqMenu
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
    transition: all ease-in-out .5s
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
      width: auto !important
      height: auto !important
      &:hover
        transform: translateX(5px)
        transition: transform .5s ease-in-out
  .next
    position: fixed
    margin-top: auto
    top: 155px
    right: -40px
    z-index: 2
    cursor: pointer
    opacity: 0 
    @media(max-width: 468px)
      opacity: 1
  .fa-fast-forward
    width: 40px
    height: 40px
    color: #cb5a44
    animation: bounce-arrow 2s infinite
</style>
