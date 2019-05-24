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
        <users-container :style="!mobile && `position: sticky; top: 24px;`" />
      </v-flex>
      <nuxt-child v-if="userId" />
      <item-manual v-else />
    </v-layout>
  </v-container>
</template>

<script>
import { ItemManual } from '~/components';
import { UsersContainer } from '~/containers';

export default {
  name: 'MainView',
  layout: 'default',
  components: { UsersContainer, ItemManual },
  computed: {
    mobile: ({ $vuetify }) => $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
    userId: ({ $route }) => !!$route.params.id,
  },
  created() {
    this.$store.dispatch('fetchUsers');
  },
};
</script>
