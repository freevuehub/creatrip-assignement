<template>
  <v-container>
    <v-layout
      wrap
      row
    >
      <v-flex
        md6
        xs12
        class="pa-2"
      >
        <user-list :data="getUsers" />
      </v-flex>
      <v-flex
        md6
        xs12
        class="pa-2"
      >
        <v-card
          flat
          class="pa-2"
        >
          <v-subheader>User's Item</v-subheader>
          <nuxt-child />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import { UserList } from '~/components';

export default {
  name: 'Main',
  layout: 'default',
  middleware: ['users'],
  components: { UserList },
  computed: {
    ...mapGetters(['getUsers']),
  },
};
</script>
