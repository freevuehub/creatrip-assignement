<template>
  <v-card
    flat
    class="pa-2"
  >
    <list-header />
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
import ListHeader from './ListHeader';
import ListItem from './ListItem';

export default {
  name: 'UserList',
  components: { ListItem, ListHeader },
  props: {
    data: Array,
  },
};
</script>
