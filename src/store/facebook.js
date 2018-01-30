const state = { // similar to data

}

const mutations = { // commit single change to the state
}

const getters = { // similar to computed properties

}

const actions = { // similar to methods
  FB_Parse () {
    setTimeout(() => {
      window.FB.XFBML.parse()
    }, 0)
  }
}

export default {
  state, mutations, actions, getters
}
