const result = require('dotenv').config({
  path: process.env.NODE_ENV
    ? `env/.env.${process.env.NODE_ENV}`
    : 'env/.env.development'
})
if (result.error) {
  throw result.error
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', crossorigin: 'anonymous' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],

  // env
  env: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-slick-carousel',
    '@/plugins/axios',
    '@/plugins/repositories',
    '@/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/common'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],

  vuetify: {
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#ff0000',
          secondary: '#231f20',
          success: '#07b53b',
          danger: '#ff0000',
          warning: '#ffd60a',
          info: '#007aff',
          dark: '#242939',
          black: '#242939',
          background: '#f2f3f8',
          color: '#0F3460',
          grey: '#c5c5c5'
        }
      }
    }
  },

  styleResources: {
    scss: ['~/assets/scss/_mixins.scss']
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: false,
          type: false
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true // minify css
    },
    optimizeCSS: true,
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'] // optional-chaining
    }
  }
}
