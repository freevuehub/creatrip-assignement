<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <img
        v-show="imgLoad"
        @load="imgLoad = true"
        style="display: block; width: 100%;"
        :src="getItems.image_path"
        :alt="`${getItems.name}'s Image`"
      >
      <v-divider class="my-2" />
    </v-flex>
    <v-flex
      xs12
      class="pa-2"
    >
      <item-cell label="No.">
        {{ $route.params.id }}
      </item-cell>
      <item-cell label="Name:">
        {{ getItems.name }}
      </item-cell>
      <item-cell label="Description:">
        {{ getItems.subscript }}
      </item-cell>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import { ItemCell } from '~/components';

export default {
  middleware: ['items'],
  components: { ItemCell },
  data: () => ({
    imgLoad: false,
  }),
  computed: {
    ...mapGetters(['getItems']),
  },
};
</script>
