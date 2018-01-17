import Vue from 'vue'
import Vuex from 'vuex'

import lang from './lang'
import clients from './clients'
import menu from './menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    clients,
    menu
  }
})
