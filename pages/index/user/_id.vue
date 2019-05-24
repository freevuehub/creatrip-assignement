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
    id: ({ $route }) => parseFloat($route.params.id),
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) this.getItems();
    },
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      this.$store.dispatch('fetchItems', this.id);
    },
  },
};
</script>
