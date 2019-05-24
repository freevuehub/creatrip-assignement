<template>
  <v-flex
    md6
    xs12
    class="pa-2"
  >
    <user-container />
    <items-container />
  </v-flex>
</template>

<script>
import { ItemsContainer, UserContainer } from '~/containers';

export default {
  name: 'ItemListView',
  components: { ItemsContainer, UserContainer },
  computed: {
    userId: ({ $route }) => parseFloat($route.params.id),
    itemId: ({ $route }) => parseFloat($route.query.id),
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        this.getItems();
        this.getUser();
      }
      if (to.query.id) this.getItem();
    },
  },
  async created() {
    await this.getItems();

    this.getUser();

    if (this.itemId) this.getItem();
  },
  methods: {
    getItems() {
      return new Promise((resolve) => {
        resolve(this.$store.dispatch('fetchItems', this.userId));
      });
    },
    getUser() {
      this.$store.dispatch('fetchUser', this.userId);
    },
    getItem() {
      this.$store.dispatch('fetchItem', this.itemId);
    },
  },
};
</script>
