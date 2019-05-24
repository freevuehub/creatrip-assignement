<template>
  <v-app>
    <header-nav />

    <v-content>
      <nuxt />
    </v-content>

    <footer-bottom />

    <v-dialog
      v-model="itemId"
      persistent
      fullscreen
      transition="dialog-bottom-transition"
    >
      <item-container />
    </v-dialog>
  </v-app>
</template>

<script>
import { HeaderNav, FooterBottom } from '../components';
import { ItemContainer } from '../containers';

export default {
  name: 'DefaultLayout',
  components: { HeaderNav, FooterBottom, ItemContainer },
  data: () => ({
    tets: true,
  }),
  computed: {
    itemId: ({ $route }) => !!$route.query.id,
  },
};
</script>
