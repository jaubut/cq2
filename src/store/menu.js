const state = {
  show: false
}

const mutations = {
  trigger (state) {
    state.show = !state.show
  },
  close (state) {
    state.show = false
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
