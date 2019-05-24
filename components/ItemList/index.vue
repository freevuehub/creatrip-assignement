<template>
  <v-card
    flat
    class="pa-2"
  >
    <list-header label="User's Items" />
    <template v-for="l in data">
      <list-item
        :data="l"
        :key="l.item_idx"
      />
    </template>
    <v-btn
      block
      color="primary"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import ListItem from './ListItem';
import ListHeader from '../ListHeader';

export default {
  name: 'ItemList',
  components: { ListItem, ListHeader },
  props: {
    data: Array,
  },
};
</script>
