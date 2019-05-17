export const state = () => ({
  items: {},
  users: [],
});

export const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload.data;
  },
  SET_USERS(state, payload) {
    state.users = payload.data;
  },
};

export const getters = {
  getItems(state) {
    return state.items;
  },
  getUsers(state) {
    return state.users;
  },
};
