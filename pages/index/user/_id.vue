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
        style="display: block; width: 100%;"
        :src="getItems.image_path"
        :alt="`${getItems.name}'s Image`"
        @load="getImage()"
      >
      <v-progress-circular
        v-if="!imgLoad"
        class="my-4"
        :width="3"
        :size="50"
        color="primary"
        indeterminate
      />
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
        <template v-if="!getItems.editing">
          {{ getItems.name }}
        </template>
        <v-text-field
          v-else
          v-model="name"
          hide-details
          solo
        ></v-text-field>
      </item-cell>
      <item-cell label="Description:">
        {{ getItems.subscript }}
      </item-cell>
    </v-flex>
    <v-flex
      v-if="getItems.editing"
      xs12
      class="text-xs-center"
    >
      <v-btn
        color="primary"
        @click="$store.commit('SAVE_ITEM', { name })"
      >
        SAVE
      </v-btn>
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
    name: '',
  }),
  computed: {
    ...mapGetters(['getItems']),
  },
  created() {
    this.name = this.getItems.name;
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
