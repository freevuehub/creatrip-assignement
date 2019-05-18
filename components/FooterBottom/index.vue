<template>
  <v-footer
    dark
    height="auto"
    color="secondary"
    class="text-xs-center"
  >
    <v-container>
      <template v-for="l in snsList">
        <v-btn
          :key="l.link"
          :href="l.link"
          target="_blank"
          class="mx-3"
          icon
        >
          <v-icon size="25">{{ l.icon }}</v-icon>
        </v-btn>
      </template>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterBottom',
  data: () => ({
    snsList: [
      {
        icon: 'fab fa-github',
        link: 'https://github.com/freevuehub',
      },
      {
        icon: 'fas fa-laptop-code',
        link: 'https://freevuehub.github.io/',
      },
      {
        icon: 'fas fa-envelope',
        link: 'mailto:hackish@hanmail.net',
      },
    ],
  }),
};
</script>
