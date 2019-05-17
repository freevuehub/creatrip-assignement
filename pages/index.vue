<template>
  <v-container>
    <v-layout
      wrap
      row
    >
      <v-flex
        md6
        xs12
      >
        <h1>content</h1>
      </v-flex>
      <v-flex
        md6
        xs12
      >
        <h1>content</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Main',
  layout: 'default',
  async created() {
    const { data } = await axios.get('/items.json');

    this.$store.commit('fetchItems', { data });
  },
};
</script>
