const state = {
  favoriteItems: []
}

const actions = {

}

const mutations = {
  set(state, item) {
    let index = state.favoriteItems.findIndex(o => o.id === item.id)
    if (index == -1) {
      state.favoriteItems.push(item)
    } else {
      state.favoriteItems[index] = item
    }
  },
  deleteFavorite(state, item) {
    let index = state.favoriteItems.findIndex(o => o.id === item.id)
    if (index > -1) {
      state.favoriteItems.splice(index, 1)
    }
  }
}

const getters = {
  getAllFavorites: () => state.favoriteItems
}

export const favorite = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};