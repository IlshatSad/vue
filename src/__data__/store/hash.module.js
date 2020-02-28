import getHashes from '../services/getHash';

const state = {
  hash: null
}

const actions = {
  requestHash({ commit }) {
    getHashes()
      .then(resp => commit('setHash', resp.data))
  }
}

const mutations = {
  setHash(state, hash) {
    state.hash = hash
  }
}

const getters = {
  getHashes: (state) => state.hash
}


export const getHash = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};