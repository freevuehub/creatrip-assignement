<template>
  <v-img
    class="white--text"
    height="200px"
    :src="url">
    <span class="headline pa-2">{{ title }}</span>
  </v-img>
</template>

<script>
export default {
  name: 'ItemImg',
  props: {
    url: String,
    title: String,
  },
};
</script>
