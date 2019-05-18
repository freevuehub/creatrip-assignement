<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      class="text-xs-center"
      xs12
    >
      <img
        v-show="imgLoad"
        @load="getImage()"
        style="display: block; width: 100%;"
        :src="getItems.image_path"
        :alt="`${getItems.name}'s Image`"
      >
      <v-progress-circular
        class="my-4"
        :width="3"
        :size="50"
        v-if="!imgLoad"
        color="primary"
        indeterminate
      ></v-progress-circular>
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
  name: 'Item',
  middleware: ['items'],
  components: { ItemCell },
  data: () => ({
    imgLoad: false,
  }),
  computed: {
    ...mapGetters(['getItems']),
  },
  methods: {
    getImage() {
      setTimeout(() => {
        this.imgLoad = true;
      }, 300);
    },
  },
};
</script>
