<template>
  <v-flex
    class="my-2"
    xs12
  >
    <span class="subheading grey--text">{{ label }}</span>
    <span class="body-2"><slot></slot></span>
  </v-flex>
</template>

<script>
export default {
  name: 'ItemCell',
  props: {
    label: String,
  },
};
</script>
