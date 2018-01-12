const state = {
  all: {}
}

const mutations = {
  SET_CLIENT (state, { client }) {
    state.all = { ...state.all, [client.id]: client.data() }
  }
}

const actions = {
  async get ({ commit, db }) {
    let clients = db.collection('clients')
    clients.forEach(client => commit('SET_CLIENT', { client }))
  }
}

export default {
  state, mutations, actions
}
