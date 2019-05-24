<template>
  <v-card flat class="mb-3 pa-2">
    <list-header label="User's Info">
      <v-btn
        icon
        color="error"
        flat
        small
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </list-header>

    <p>No. {{ getUser.idx }}</p>
    <p>User's Name: {{ getUser.name }}</p>
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
};
</script>
