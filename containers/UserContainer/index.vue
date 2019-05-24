<template>
  <v-card flat class="mb-3 pa-2">
    <list-header label="User's Info">
      <v-btn
        icon
        color="error"
        flat
        small
        @click="deleteUser"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </list-header>

    <v-card-text>
      <p>No. <span class="headline">{{ getUser.idx }}</span></p>
      <p>User's Name: <span class="headline">{{ getUser.name }}</span></p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { ListHeader } from '~/components';

export default {
  name: 'UserContainer',
  components: { ListHeader },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    deleteUser() {
      this.$router.push('/');
      this.$store.dispatch('deleteUser', parseFloat(this.$route.params.id));
    },
  },
};
</script>
