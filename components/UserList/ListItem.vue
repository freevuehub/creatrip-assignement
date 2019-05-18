<template>
  <v-list-tile
    avatar
    :to="`/user/${item.idx}`"
  >
    <list-avatar>{{ item.name.split('')[0].toUpperCase() }}</list-avatar>
    <list-content>{{ item.name }}</list-content>
    <v-list-tile-action>
      <v-icon size="18">fas fa-chevron-right</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import ListAvatar from './ListAvatar';
import ListContent from './ListContent';

export default {
  name: 'UserList',
  components: { ListContent, ListAvatar },
  props: {
    item: Object,
  },
};
</script>
