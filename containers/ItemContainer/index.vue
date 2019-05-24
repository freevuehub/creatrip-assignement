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
            v-model="contentText"
            :contentText="{ title: getItem.item_name, comment: getItem.subscript }"
            :editing="editing"
          />
          <v-card-actions class="mt-2">
            <v-spacer></v-spacer>
            <v-btn
              @click="editContent"
              color="primary"
            >{{ editing ? 'Save' : 'Edit' }}</v-btn>
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
  data: () => ({
    editing: false,
    contentText: {
      title: '',
      comment: '',
    },
  }),
  watch: {
    getItem(v) {
      this.contentText.title = v.item_name;
      this.contentText.comment = v.subscript;
    },
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('deleteItem', parseFloat(this.$route.query.id))
      this.$router.push(`/user/${this.$route.params.id}`);
    },
    editContent() {
      if (this.editing) {
        this.$store.dispatch(
          'fetchItemEdit',
          {
            data: { item_name: this.contentText.title, subscript: this.contentText.comment  },
            idx: this.$route.query.id,
          },
        );
      }

      this.editing = !this.editing;
    },
  },
};
</script>
