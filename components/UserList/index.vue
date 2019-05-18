<template>
  <v-card
    flat
    class="pa-2"
  >
    <v-subheader>
      Users
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-0 pa-0"
        small
        @click="$store.commit('SORT_USERS', { type: 'down' })"
      >
        <v-icon
          size="17"
          class="primary--text"
        >
          fas fa-sort-alpha-down
        </v-icon>
      </v-btn>
      <v-btn
        icon
        class="ma-0 pa-0"
        small
        @click="$store.commit('SORT_USERS', { type: 'up' })"
      >
        <v-icon
          size="17"
          class="primary--text"
        >
          fas fa-sort-alpha-up
        </v-icon>
      </v-btn>
    </v-subheader>
    <v-list>
      <template v-for="l in data">
        <list-item
          :key="l.idx"
          :item="l"
        />
        <v-divider
          :key="`${l.idx} divider`"
          class="my-2"
        ></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'UserList',
  components: { ListItem },
  props: {
    data: Array,
  },
};
</script>
