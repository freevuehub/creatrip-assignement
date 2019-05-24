<template>
  <v-toolbar
    color="primary"
    flat
    dense
    dark
  >
    <v-toolbar-title>
      {{ label }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      :to="`/user/${$route.params.id}`"
      class="ma-0 pa-0"
      icon
    >
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'DetailToolbar',
  props: {
    label: String,
  },
};
</script>
