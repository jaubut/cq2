import Vue from 'vue'
import Vuex from 'vuex'

import lang from './lang'
import clients from './clients'
import artisans from './artisans'
import menu from './menu'
import facebook from './facebook'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    clients,
    menu,
    artisans,
    facebook
  }
})
