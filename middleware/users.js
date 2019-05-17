import axios from 'axios';

export default async function ({ store }) {
  const { data } = await axios.get('http://localhost:3000/users.json');

  store.commit('SET_USERS', { data });
}
