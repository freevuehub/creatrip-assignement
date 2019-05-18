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
  SORT_USERS(state, payload) {
    switch (payload.type) {
      case 'up':
        return state.users.sort((prev, next) => prev.name < next.name ? 1 : -1);
      case 'down':
        return state.users.sort((prev, next) => prev.name > next.name ? 1 : -1);
      default:
        return state.users;
    }
  },
  DELETE_USER(state, payload) {
    state.users = state.users.filter(l => l.idx !== parseInt(payload.idx));
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
