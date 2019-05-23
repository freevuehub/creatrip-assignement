export const state = () => ({
  users: [],
  user: {},
  items: [],
  item: {},
});

export const mutations = {
  SET_USERS(state, payload) {
    console.log(
      '%c\n'
      + '                                   \n'
      + '   <====== Users Change ======>    \n'
      + '                                   \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.users,
      '\n',
      'After:', payload.data,
    );

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
  SET_USER(state, payload) {
    console.log(
      '%c\n'
      + '                                   \n'
      + '   <====== User Change ======>     \n'
      + '                                   \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.user,
      '\n',
      'After:', payload.data,
    );

    state.user = { ...payload.data };
  },
  SET_ITEMS(state, payload) {
    console.log(
      '%c\n'
      + '                                   \n'
      + '   <====== Items Change ======>    \n'
      + '                                   \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.items,
      '\n',
      'After:', payload.data,
    );

    state.items = payload.data;
  },
  SET_EDITING(state) {
    state.item.editing = !state.item.editing;
  },
  /*
  SET_USERS(state, payload) {
    state.users = payload.data;
  },
  SET_USER_ITEMS(state, payload) {
    console.log(payload);

    state.userItems = payload.data;
  },
  SET_ITEM(state, payload) {
    state.item = {
      ...payload.data,
      editing: false,
    };
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
    state.item.editing = !state.item.editing;
  },
  SAVE_ITEM(state, payload) {
    state.item = {
      ...state.item,
      editing: false,
      name: payload.name,
    };
    state.users = state.users.map(l => {
      if (l.idx === state.item.idx) {
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
  */
};

export const getters = {
  getItems(state) {
    return state.items;
  },
  getItem(state) {
    return state.item;
  },
  getUsers(state) {
    return state.users;
  },
};
