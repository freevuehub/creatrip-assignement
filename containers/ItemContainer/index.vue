<template>
  <v-card>
    <v-toolbar
      color="primary"
      flat
      dense
      dark
    >
      <v-toolbar-title>
        {{ getItem.item_name }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        :to="`/user/${$route.params.id}`"
        class="ma-0 pa-0"
        icon
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        md6
        class="pa-2"
      >
        <v-card>
          <v-img :src="getItem.image_path"></v-img>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        md6
        class="pa-2"
      >
        {{ getItem.item_name }}
        {{ getItem.subscript }}
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ItemContainer',
  computed: {
    ...mapGetters(['getItem']),
  },
};
</script>
