<template>
  <v-card>
    <detail-toolbar :label="getItem.item_name" />
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
          class="pa-2"
        >
          <img-card :url="getItem.image_path" />
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
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { DetailToolbar, ImgCard } from '~/components/ItemDetail';

export default {
  name: 'ItemContainer',
  components: { DetailToolbar, ImgCard },
  computed: {
    ...mapGetters(['getItem']),
  },
};
</script>
