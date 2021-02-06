export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - firechat',
    title: 'firechat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    middleware: ['auth'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/variables.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase',
    '~/plugins/auth',
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/pwa', '@nuxtjs/google-adsense'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  pwa: {
    meta: {
      title: 'Firechat',
      author: 'Adam Henriksson',
    },
    manifest: {
      name: 'Firechat: A nuxt+firebase app',
      short_name: 'Firechat',
      lang: 'en',
    },
    start_url: '/dist/index.html',
    theme_color: '#1a202c',
    background_color: '#1a202c',
  },

  'google-adsense': {
    id: 'ca-pub-2706852497952095',
  },
};
