<template>
  <v-card-title>
    <v-subheader class="headline">{{ title }}</v-subheader>
    <v-divider></v-divider>
    <p class="pa-2">{{ comment }}</p>
    <v-divider></v-divider>
  </v-card-title>
</template>

<script>
export default {
  name: 'DetailContent',
  props: {
    title: String,
    comment: String,
  },
};
</script>
