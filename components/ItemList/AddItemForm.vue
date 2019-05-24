<template>
  <v-card>
    <v-toolbar
      dense
      color="primary"
      flat
      dark
    >
      <v-toolbar-title>
        Add Item
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        small
        @click="$emit('closeForm')"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-title>
      <v-layout column>
        <v-flex class="mb-2">
          <template v-if="!!imgName">
            <v-subheader>
              {{ imgName }}
            </v-subheader>
          </template>
          <template v-else>
            <v-btn
              block
              color="primary"
              @click="openFileInput"
            >
              <v-icon>image</v-icon>
            </v-btn>
            <input
              v-show="false"
              ref="addImage"
              type="file"
              accept="image/"
              @change="addImage"
            >
          </template>
        </v-flex>
        <v-flex class="mb-2">
          <v-text-field
            v-model="title"
            placeholder="Title"
            hide-details
            solo
          />
        </v-flex>
        <v-flex>
          <v-textarea
            v-model="comment"
            placeholder="Comment"
            hide-details
            solo
          />
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider />
    <v-card-actions>
      <v-btn
        color="primary"
        block
        @click="saveItem"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AddItemForm',
  data: () => ({
    title: '',
    comment: '',
    url: '',
    imgName: '',
  }),
  methods: {
    openFileInput() {
      this.$refs.addImage.click();
    },
    addImage(event) {
      [...event.target.files].forEach((l) => {
        if (/\.(jpg|svg|jpeg|png|bmp)$/i.test(l.name)) {
          const image = new FileReader();

          image.readAsDataURL(l);
          image.onload = (e) => {
            this.url = e.target.result;
            this.imgName = l.name;
          };
        }
      });
    },
    saveItem() {
      this.$emit('closeForm');

      if (!this.title) return;
      if (!this.comment) return;
      if (!this.url) return;

      this.$store.dispatch('fetchAddItem', {
        image_path: this.url,
        item_name: this.title,
        subscript: this.comment,
      });

      this.title = '';
      this.comment = '';
      this.url = '';
      this.imgName = '';
    },
  },
};
</script>
