import axios from 'axios';

export default async function ({ store, route }) {
  const { data } = await axios.get('http://localhost:3000/items.json');
  const item = data.filter(
    l => (parseInt(route.params.id) || 1) === l.idx
  );

  store.commit('SET_ITEMS', { data: item[0] });
}
