import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      lang: 'fr-CA'
    },
    mutations: {
      french (state) {
        state.lang = 'fr-CA'
      },
      english (state) {
        state.lang = 'en'
      }
    },
    action: {
      reload (state) {
        location.reload()
      }
    }
  })
}

export default createStore
