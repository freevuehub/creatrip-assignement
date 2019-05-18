export const state = () => ({
  items: {},
  users: [],
});

export const mutations = {
  SET_ITEMS(state, payload) {
    state.items = {
      ...payload.data,
      editing: false,
    };
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
  SET_EDITING(state) {
    state.items.editing = !state.items.editing;
  },
  SAVE_ITEM(state, payload) {
    state.items = {
      ...state.items,
      editing: false,
      name: payload.name,
    };
    state.users = state.users.map(l => {
      if (l.idx === state.items.idx) {
        l = {
          ...l,
          name: payload.name,
        };
      }

      return l;
    });
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
