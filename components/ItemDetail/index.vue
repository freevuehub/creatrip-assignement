<template>
  <v-card
    flat
    class="pa-2"
  >
    <v-subheader>
      User's Item
      <template v-if="$route.name !== 'index'">
        <v-spacer />
        <v-btn
          icon
          class="ma-0 pa-0"
          small
        >
          <v-icon
            size="17"
            class="primary--text"
            @click="$store.commit('SET_EDITING')"
          >
            fas fa-edit
          </v-icon>
        </v-btn>
        <v-btn
          icon
          class="ma-0 pa-0"
          small
        >
          <v-icon
            size="17"
            class="red--text"
            @click="deleteItem"
          >
            fas fa-trash-alt
          </v-icon>
        </v-btn>
      </template>
    </v-subheader>
    <nuxt-child v-if="$route.name !== 'index'" />
    <item-default v-else />
  </v-card>
</template>

<script>
import { ItemDefault } from '~/components';

export default {
  name: 'ItemDetail',
  components: { ItemDefault },
  methods: {
    deleteItem() {
      this.$store.commit('DELETE_USER', { idx: this.$route.params.id });
      this.$router.push('/');
    },
  },
};
</script>
