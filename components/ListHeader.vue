<template>
  <v-subheader>
    {{ label }}
    <v-spacer></v-spacer>
    <slot></slot>
  </v-subheader>
</template>

<script>
export default {
  name: 'ListHeader',
  props: {
    label: String,
  },
};
</script>
