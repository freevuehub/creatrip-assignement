<template>
  <item-list :data="getItems"></item-list>
</template>

<script>
import { mapGetters } from 'vuex';
import { ItemList } from '~/components';

export default {
  name: 'ItemsContainer',
  components: { ItemList },
  computed: {
    ...mapGetters(['getItems']),
  },
};
</script>
