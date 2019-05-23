<template>
  <v-card
    flat
    class="pa-2"
  >
    <v-subheader>
      User's Items
    </v-subheader>
    <template v-for="l in getItems">
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
import { mapGetters } from 'vuex';
import ListItem from './ListItem';

export default {
  name: 'ItemList',
  components: { ListItem },
  computed: {
    ...mapGetters(['getItems']),
  },
};
</script>
