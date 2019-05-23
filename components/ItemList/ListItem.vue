<template>
  <v-card
    style="cursor: pointer;"
    @click="$router.push({ query: { id: data.item_idx } })"
    class="mx-3 my-4"
  >
    <item-img
      :title="data.item_name"
      :url="data.image_path"
    />
    <v-card-title
      class="px-3"
    >
      <span class="grey--text">{{ data.subscript }}</span>
    </v-card-title>
  </v-card>
</template>

<script>
import ItemImg from './ItemImg';

export default {
  name: 'ListItem',
  components: { ItemImg },
  props: {
    data: {
      default: Object,
      type: Object,
    },
  },
};
</script>
