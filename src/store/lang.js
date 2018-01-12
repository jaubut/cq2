const state = {
  lang: 'fr-CA'
}
const mutations = {
  french (state) {
    state.lang = 'fr-CA'
  },
  english (state) {
    state.lang = 'en'
  }
}
const actions = {
  reload (state) {
    location.reload()
  }
}
export default {
  state, mutations, actions
}
