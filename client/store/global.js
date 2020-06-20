export const state = () => ({
  games: [],
  kresby: []
})

export const getters = {
  getGames:(state) => {
    return state.games;
  }
}

export const mutations = {
  setItems(state, items) {
    state.games = items.games;
    state.kresby = items.kresby;
  }
}

export const actions = {

  async fetchItems({commit}, params) {
    commit('setItems', {
      games: require('../static/games.json'),
      kresby: require('../static/kresby.json'),
    });
  }

}
