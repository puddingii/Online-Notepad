export default {
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
    '@nuxtjs/vuetify'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css',
      rel: 'stylesheet',
      integrity: 'sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU',
      crossorigin: 'anonymous'
    }, {
      rel: 'icon',
      href: '/icon/favicon3.png'
    }],
    script: [{
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js',
      integrity: 'sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ',
      crossorigin: 'anonymous'
    }],
    title: 'Notepad'
  },
  css: ['@/assets/css/default.css'],
  vuetify: {
    icons: {
      iconfont: 'mdi'
    }
  }

};