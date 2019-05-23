import axios from 'axios';

export default async function ({ store, route }) {
  const { data } = await axios.get('http://localhost:3000/users.json');

  const list = data.list.filter(l => (parseFloat(route.params.id) || 1) === l.idx)[0];

  store.commit('SET_USER', { data: list });
}
