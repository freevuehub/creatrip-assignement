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
      @click="openItem"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog
      v-model="addFormDialog"
      max-width="500"
    >
      <add-item-form @closeForm="closeForm" />
    </v-dialog>
  </v-card>
</template>

<script>
import AddItemForm from './AddItemForm';
import ListItem from './ListItem';
import ListHeader from '../ListHeader';

export default {
  name: 'ItemList',
  components: { ListItem, ListHeader, AddItemForm },
  props: {
    data: Array,
  },
  data: () => ({
    addFormDialog: false,
  }),
  methods: {
    closeForm() {
      this.addFormDialog = false;
    },
    openItem() {
      this.addFormDialog = true;
    },
  },
};
</script>
