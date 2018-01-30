<template>
  <div id="app">
    <header>
      <router-link class="logo" :to="{ name: 'Index' }">
        <img class="logo" src="./assets/logo-round.svg" alt="logo, chanvre quebec">
      </router-link>
      <img @click="$store.commit('trigger')" class="burger" src="./assets/burger.svg" alt="burger">
      <div class="lang">
        <span @click="$store.commit('french')">fr</span>
        <span @click="$store.commit('english')">en</span>
      </div>
    </header>
    <transition name="fade">
      <MenuCQ v-on-click-outside="closeTrigger" @click.native="$store.commit('close')" v-if="$store.state.menu.show"></MenuCQ>
    </transition>
    <main :class="{ active: $store.state.menu.show }">
      <transition name="fadeIndex">
        <router-view></router-view>
      </transition>
    </main>
    <FooterCQ></FooterCQ>
    <div class="fb-customerchat" page_id="1515670032095765"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { mixin as onClickOutside } from 'vue-on-click-outside'
import MenuCQ from '@/components/cq-menu'
import FooterCQ from '@/components/cq-footer'

export default {
  name: 'app',
  mixins: [onClickOutside],
  components: {
    MenuCQ,
    FooterCQ
  },
  data () {
    return {
      metadata: {}
    }
  },
  created () {
    this.getMeta()
  },
  watch: {
    '$route': 'getMeta'
  },
  methods: {
    closeTrigger (state) {
      this.$store.state.menu.show = false
    },
    getMeta ($route) {
      this.metadata = {
        'title': this.$route.meta.title,
        'og:type': 'content'
      }
    }
  },
  postMeta () {
    axios.put('/api/v1/sites/9caa2988-52d8-4ff0-abd7-2845da1e0be6/metadata', {
      metadata: this.metadata
    })
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Barlow')
  @import './assets/css/_global.css'

  html, body
    background-image: url(./assets/background.svg)
    background-repeat: repeat-y
    background-size: 100%
    margin: 0
    padding: 0
  a
    text-decoration: none
    color: inherit
    &:hover
      color: inherit
  header
    height: 75px
    display: grid
    grid-template: 50% 50% / 100%
    padding: 0 5%
    .lang
      grid-area: 1/1/3/2
      display: flex
      flex-flow: row wrap
      margin-bottom: auto
      margin-top: auto
      span, a
        padding: 0 5px
        font-family: 'Barlow', sans-serif
        font-size: 0.7rem
        &:hover
          cursor: pointer
        &:active
          color: #4F5D56
    .burger
      grid-area: 1/1/3/2
      height: 10px
      margin-left: auto
      margin-bottom: auto
      margin-top: auto
      z-index: 1
      &:hover
        cursor: pointer
      &:active
        transform: translateY(5px)
        transition: transform 0.5s ease-in-out
    .logo
      grid-area: 1/1/3/2
      height: 75px
      margin: auto
      padding-top: 7.5px
      z-index: 1
    @media (min-width: 468px)
      .logo
        height: 125px
  main
    width: inherit
    background: white
    min-height: 100vh
    margin: 0 2% 5% 2%
    transition: all 0.5s ease-in-out
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)
  .active
    transform: translateY(calc(40vh + 75px))
  @media (min-width: 468px)
    .active
      transform: translateY(calc(40vh + 75px))
  h1, h2, h3, h4, h5, h6
    margin: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity 0.5s ease-in-out
  .fade-enter, .fade-leave-to
    opacity: 0
  .fadeIndex-enter-active, .fadeIndex-leave-active
    transition: opacity .75s ease-in-out
  .fadeIndex-enter, .fadeIndex-leave-to
    opacity: 0
  .transite-enter-active, .transite-leave-active
    transition: transform, opacity 1s ease-in-out
  .transite-enter, .transite-leave-to
    transform: translateY(100px)
    opacity: 0
</style>
