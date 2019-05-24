import axios from 'axios';

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

    state.users = [
      ...payload.data,
    ];
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

    state.items = [
      ...payload.data,
    ];
  },
  SET_ITEM(state, payload) {
    console.log(
      '%c\n'
      + '                                   \n'
      + '   <====== Item Change ======>    \n'
      + '                                   \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.items,
      '\n',
      'After:', payload.data,
    );

    state.item = {
      ...payload.data,
    };
  },
  SET_EDITING(state, payload) {
    console.log(
      '%c\n'
      + '                                         \n'
      + '   <====== Item Detail Change ======>    \n'
      + '                                         \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.item,
      '\n',
      'After:', {
        ...state.item,
        ...payload.data,
      },
    );

    state.item = {
      ...state.item,
      ...payload.data,
    };

    state.items = [
      ...state.items.map(
        l => l.item_idx === payload.idx
          ? { ...l, ...payload.data }
          : l
      ),
    ];
  },
};

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/users.json');

      commit('SET_USERS', { data: data.list });
    } catch (e) {
      console.error('Error', e);
    }
  },
  async fetchItems({ commit }, idx) {
    try {
      const { data } = await axios.get('http://localhost:3000/items.json');

      const list = data.list.filter(
        l => l.user_idx === idx,
      )[0].items;

      commit('SET_ITEMS', { data: list });
    } catch (e) {
      console.error('Error', e);
    }
  },
  fetchItem({ commit }, idx) {
    const list = this.state.items.filter(l => l.item_idx === idx)[0];

    commit('SET_ITEM', { data: list });
  },
  fetchItemEdit({ commit }, obj) {
    commit('SET_EDITING', obj);
  },
};

export const getters = {
  getUsers(state) {
    return state.users;
  },
  getUser(state) {
    return state.user;
  },
  getItems(state) {
    return state.items;
  },
  getItem(state) {
    return state.item;
  },
};
