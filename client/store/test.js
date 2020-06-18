export const state = () => ({
  items: []
})

export const getters = {
  getItems:(state) => {
    return state.items;
  }
}

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const actions = {

  async fetchItems({commit}, params) {
    let items = [
      {
        id: 1,
        name: "ahoj"
      },
      {
        id:2,
        name: "cau"
      }
    ]

    commit('setItems', items)
    return items;
  }

}
