import Vue from 'vue'
import Vuex from 'vuex'

import Firebase from 'Firebase'
import 'Firebase/firestore'
import config from '../FirebaseConfig'

import lang from './lang'
import clients from './clients'

Firebase.initializeApp(config)

Vue.use(Vuex)
const state = {
  db: Firebase.firestore(),
  counterChanvCo: 100
}

export default new Vuex.Store({
  state,
  modules: {
    lang,
    clients
  }
})
