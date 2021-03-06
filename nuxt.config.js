const pkg = require('./package');

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: { color: '#fff' },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    theme: {
      primary: '#00afa0',
      secondary: '#f1a852',
    },
    iconfont: 'fa',
  },
  build: {
    extend(config, ctx) {
    },
  },
};
