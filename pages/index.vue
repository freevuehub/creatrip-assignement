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
        <v-card
          flat
          class="pa-2"
        >
          <v-subheader>Users</v-subheader>
          <v-list>
            <template v-for="l in getUsers">
              <user-list
                :key="l.idx"
                :item="l"
              />
              <v-divider
                :key="l.idx"
                class="my-2"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
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
