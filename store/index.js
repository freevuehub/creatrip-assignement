export const state = () => ({
  items: [],
  test: null,
});

export const mutations = {
  fetchItems(state, payload) {
    state = {
      ...state,
      items: payload.data,
    };
  },
};

export const getters = {
  getTest(state) {
    return state.test;
  },
};
