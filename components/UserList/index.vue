<template>
  <v-card
    flat
    class="pa-2"
  >
    <v-subheader>Users</v-subheader>
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
