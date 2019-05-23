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
        <user-list
          :style="!mobile && `position: sticky; top: 24px;`"
          :data="getUsers"
        />
      </v-flex>

      <nuxt-child />
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import { UserList } from '~/components';

export default {
  name: 'Main',
  layout: 'default',
  components: { UserList },
  computed: {
    mobile: ({ $vuetify }) => $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
    ...mapGetters(['getUsers']),
  },
  async created() {
    if (!this.getUsers.length) {
      const { data } = await axios.get('http://localhost:3000/users.json');

      this.$store.commit('SET_USERS', { data: data.list });
    }
  },
};
</script>
