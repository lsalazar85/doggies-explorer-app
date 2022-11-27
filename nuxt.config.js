export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Doggies Explorer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Doogies explorer app' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap'
        }
    ],
  },

  env: {
    MAINNET: 'https://mainnet.infura.io/v3/c83c37fa3b754594ada81272a37fa9b7',
    ADDRESS: '0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6',
  },

  privateRuntimeConfig: {
    MAINNET: '${MAINNET}',
    ADDRESS: '${ADDRESS}'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: [
      '~/assets/styles/scss/abstracts/_colors.scss',
      '~/assets/styles/scss/base/_base.scss',
    ],
  },
}
