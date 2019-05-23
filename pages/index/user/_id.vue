<template>
  <v-flex
    md6
    xs12
    class="pa-2"
  >
    <item-list />
  </v-flex>
</template>

<script>
import { get } from 'axios';
import { ItemList } from '~/components';

export default {
  name: 'ItemListView',
  middleware: ['setUserToStore'],
  components: { ItemList },
  computed: {
    id: ({ $route }) => parseFloat($route.params.id),
  },
  watch: {
    $route() {
      this.getItems();
    },
  },
  created() {
    this.getItems();
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    async getItems() {
      const { data } = await get('http://localhost:3000/items.json');

      const list = data.list.filter(
        l => l.user_idx === this.id
      )[0].items;

      this.$store.commit('SET_ITEMS', { data: list });
    },
  },
};
</script>
