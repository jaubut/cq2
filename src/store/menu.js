const state = {
  show: false
}

const mutations = {
  trigger (state) {
    state.show = !state.show
  },
  close (state) {
    state.show = false
  },
  open (state) {
    state.show = true
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
