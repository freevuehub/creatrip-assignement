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
          <detail-content
            :title="getItem.item_name"
            :comment="getItem.subscript"
          />
          <v-card-actions class="mt-2">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
            >Edit</v-btn>
            <v-btn
              @click="deleteItem"
              color="error"
            >Delete</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { DetailToolbar, ImgCard, DetailContent } from '~/components/ItemDetail';

export default {
  name: 'ItemContainer',
  components: { DetailToolbar, ImgCard, DetailContent },
  computed: {
    ...mapGetters(['getItem']),
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('deleteItem', parseFloat(this.$route.query.id))
      this.$router.push(`/user/${this.$route.params.id}`);
    },
  },
};
</script>
