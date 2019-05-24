<template>
  <v-card>
    <v-img :src="url"></v-img>
    <v-btn
      icon
      fab
      color="primary"
      @click="fileChange"
      style="position: absolute; bottom: 0; right: 0; transform: translateY(50%);"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <input
      @change="fileSet"
      v-show="false"
      type="file"
      ref="fileInput"
      accept="image/"
    >
  </v-card>
</template>

<script>
export default {
  name: 'ImgCard',
  props: {
    url: String,
  },
  methods: {
    fileChange() {
      this.$refs.fileInput.click();
    },
    fileSet(event) {
      [...event.target.files].forEach((l) => {
        if (/\.(jpg|svg|jpeg|png|bmp)$/i.test(l.name)) {
          const image = new FileReader();

          image.readAsDataURL(l);
          image.onload = (e) => {
            this.$store.dispatch(
              'fetchItemEdit',
              {
                data: { image_path: e.target.result },
                idx: this.$route.query.id,
              },
            );
          };
        }
      });
    },
  },
};
</script>
