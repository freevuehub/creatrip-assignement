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
          <v-subheader>
            User's Item
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="ma-0 pa-0"
              small
            >
              <v-icon
                size="17"
                class="primary--text"
              >
                fas fa-edit
              </v-icon>
            </v-btn>
            <v-btn
              icon
              class="ma-0 pa-0"
              small
            >
              <v-icon
                size="17"
                class="red--text"
              >
                fas fa-trash-alt
              </v-icon>
            </v-btn>
          </v-subheader>
          <nuxt-child v-if="$route.name !== 'index'" />
          <item-default v-else />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import { UserList, ItemDefault } from '~/components';

export default {
  name: 'Main',
  layout: 'default',
  components: { UserList, ItemDefault },
  computed: {
    ...mapGetters(['getUsers']),
  },
  async created() {
    if (!this.getUsers.length) {
      const { data } = await axios.get('http://localhost:3000/users.json');

      this.$store.commit('SET_USERS', { data });
    }
  },
};
</script>
