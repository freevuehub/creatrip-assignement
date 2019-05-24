<template>
  <v-flex
    md6
    xs12
    class="pa-2"
  >
    <items-container />
  </v-flex>
</template>

<script>
import { ItemsContainer } from '~/containers';

export default {
  name: 'ItemListView',
  components: { ItemsContainer },
  computed: {
    userId: ({ $route }) => parseFloat($route.params.id),
    itemId: ({ $route }) => parseFloat($route.query.id),
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) this.getItems();
      if (to.query.id) this.getItem();
    },
  },
  async created() {
    await this.getItems();

    if (this.itemId) this.getItem();
  },
  methods: {
    getItems() {
      return new Promise((resolve) => {
        resolve(this.$store.dispatch('fetchItems', this.userId));
      });
    },
    getItem() {
      this.$store.dispatch('fetchItem', this.itemId);
    },
  },
};
</script>
