<template>
  <v-app>
    <header-nav />

    <v-content>
      <nuxt />
    </v-content>

    <footer-bottom />
  </v-app>
</template>

<script>
import { HeaderNav, FooterBottom } from '../components';

export default {
  name: 'DefaultLayout',
  components: { HeaderNav, FooterBottom },
};
</script>
