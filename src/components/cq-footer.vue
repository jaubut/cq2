<template>
  <div id="cqFooter">
    <div class="logo">
      <router-link :to="{ name: 'Index' }">
        <img src="../assets/logo-round.svg" alt="Chanvre Québec Logo">
      </router-link>
    </div>
    <div v-if="$store.state.lang.lang === 'fr-CA'" class="container">
      <div class="text">
        <h3>Nos essentiels</h3>
        <router-link :to="{ name: 'Lechanvre' }">
          <p><strong>Le chanvre c'est quoi ?</strong></p>
        </router-link>
        <router-link :to="{ name: 'Alimentation' }">
          <p>Alimentation</p>
        </router-link>
        <router-link :to="{ name: 'Construction' }">
          <p>Construction</p>
        </router-link>
        <router-link :to="{ name: 'Textile' }">
          <p>Textile</p>
        </router-link>
        <router-link :to="{ name: 'Soins' }">
          <p>Soins-corporel</p>
        </router-link>
      </div>
      <div class="text">
        <h3>Nous contacter</h3>
        <router-link :to="{ name: 'Apropos' }">
          <p>L'équipe</p>
        </router-link>
        <a href="mailto:allo@chanvrequebec.com">
          <p>allo@chanvrequebec.com</p>
        </a>
        <p>Heure d'ouverture: <span>9h - 17h</span></p>
        <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/chanvreduquebec"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt=""><span style="margin-left:5px">Encouragez-nous avec un café</span></a>
      </div>
      <div class="text">
        <h3>Découvrir le chanvre d'ici <span class="button beta">beta</span></h3>
        <router-link :to="{ name: 'Artisans' }">
          <p>Voir tous les marques d'ici</p>
        </router-link>
        <p>Si vous voulez vous aussi être affiché, <br /><a href="mailto:allo@chanvrequebec.com"><span>écrivez-nous ici.</span></a></p>
      </div>
      <div class="text">
        <h3>Le blog</h3>
        <router-link :to="{ name: 'Blog' }">
          <p>Voir tous les articles</p>
        </router-link>
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
  name: 'cqFooter'
}
</script>
<style lang="sass" scoped>
  #cqFooter
    display: grid
    grid-template: 10% 70% 10% 10% / 10% 80% 10%
    width: 100%
    font-family: 'Barlow', sans-serif
    p
      font-size: 0.8rem
      padding: 10px 0
      cursor: pointer
      transition: all ease-in-out .5s
      &:hover
        transform: translateX(5px)
    h3
      font-size: 1rem
      font-weight: 600
  .container
    grid-area: 2/2/3/3
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    align-items: flex-start
    padding: 5% 5% 10% 5%
  @media (min-width:468px)
    .container
      grid-area: 1/2/3/3
      justify-content: flex-start
  .border-right
    grid-area: 1/3/3/4
    margin-bottom: 50px
    border-left: 1px solid black
  .text
    display: flex
    flex-flow: column wrap
    justify-content: space-between
    align-items: flex-start
    margin-right: auto
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
    grid-area: 4/1/5/4
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
  .buy-me-coffee
    grid-area: 3/2/4/3
    display: flex
    justify-content: center
    align-items: center
    padding: 5%
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
