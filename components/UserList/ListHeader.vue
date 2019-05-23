<template>
  <v-subheader>
    Users
    <v-spacer></v-spacer>
    <v-btn
      icon
      class="ma-0 pa-0"
      small
      @click="$store.commit('SORT_USERS', { type: 'down' })"
    >
      <v-icon
        size="17"
        class="primary--text"
      >
        fas fa-sort-alpha-down
      </v-icon>
    </v-btn>
    <v-btn
      icon
      class="ma-0 pa-0"
      small
      @click="$store.commit('SORT_USERS', { type: 'up' })"
    >
      <v-icon
        size="17"
        class="primary--text"
      >
        fas fa-sort-alpha-up
      </v-icon>
    </v-btn>
  </v-subheader>
</template>
