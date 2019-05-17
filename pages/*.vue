<template>
  <v-container
    align-content-center
    justify-center
    fill-height
  >
    <v-card
      color="error"
      dark
      flat
    >
      <v-toolbar
        color="error"
        flat
      >
        <v-toolbar-title class="display-1">
          404 Not Found
        </v-toolbar-title>
      </v-toolbar>
      <v-card-media class="px-3">
        <p class="subheading">
          해당 페이지를 찾을 수 없습니다.
        </p>
      </v-card-media>
      <v-card-action>
        <v-btn
          to="/"
          class="ma-0 pa-0 subheading"
          flat
          block
        >
          메인페이지로 이동
        </v-btn>
      </v-card-action>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: '404',
  layout: 'error',
};
</script>
