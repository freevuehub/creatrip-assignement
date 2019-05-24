<template>
  <user-list :data="getUsers"></user-list>
</template>

<script>
import { mapGetters } from 'vuex';
import { UserList } from '~/components';

export default {
  name: 'UsersContainer',
  components: { UserList },
  computed: {
    ...mapGetters(['getUsers']),
  },
};
</script>
