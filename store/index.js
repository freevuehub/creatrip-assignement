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
      'Before:', state.item,
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
  ADD_ITEM(state, payload) {
    console.log(
      '%c\n'
      + '                               \n'
      + '   <====== Item Add ======>    \n'
      + '                               \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.items,
      '\n',
      'After:', [
        ...state.items,
        payload,
      ],
    );

    state.items = [
      ...state.items,
      payload,
    ];
  },
  DELETE_USER(state, payload) {
    console.log(
      '%c\n'
      + '                                  \n'
      + '   <====== User Delete ======>    \n'
      + '                                  \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.users,
      '\n',
      'After:', state.users.filter(l => l.idx !== payload),
    );

    state.users = state.users.filter(l => l.idx !== payload);
    state.items = [];
  },
  DELETE_ITEM(state, payload) {
    console.log(
      '%c\n'
      + '                                  \n'
      + '   <====== Item Delete ======>    \n'
      + '                                  \n'
      + '\n',
      'background: #00afa0; color: #fff; font-weight: bold;',
      'Before:', state.items,
      '\n',
      'After:', state.items.filter(l => l.item_idx !== payload),
    );

    state.items = state.items.filter(l => l.item_idx !== payload);
  },
};

export const actions = {
  async fetchUsers({ commit }) {
    if (this.state.users.length) return;

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
  fetchUser({ commit }, idx) {
    const list = this.state.users.filter(l => l.idx === idx)[0];

    commit('SET_USER', { data: list });
  },
  fetchItem({ commit }, idx) {
    const list = this.state.items.filter(l => l.item_idx === idx)[0];

    commit('SET_ITEM', { data: list });
  },
  fetchAddItem({ commit }, obj) {
    let lastIds = this.state.items.length ? this.state.items[this.state.items.length - 1].item_idx : 0;

    commit('ADD_ITEM', { ...obj, item_idx: ++lastIds });
  },
  fetchItemEdit({ commit }, obj) {
    commit('SET_EDITING', obj);
  },
  deleteUser({ commit }, idx) {
    commit('DELETE_USER', idx);
  },
  deleteItem({ commit }, idx) {
    commit('DELETE_ITEM', idx);
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
