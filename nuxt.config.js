export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios', 
    ['nuxt-i18n', {
      // vueI18nLoader: true,
      locales:[
        {
          code: 'en',
          name: 'English',
          iso: 'en-US',
          file: 'en.js'
        },
        {
          code: 'es',
          name: 'Español',
          iso: 'es-DO',
          file: 'es.js'
        },
        {
          code: 'de',
          name: 'Deutsch',
          iso: 'de-DE',
          file: 'de.js' 

        }
      ],
      strategy: 'prefix_except_default', 

      // detectBrowserLanguage: {
      //   useCookie: false
      // },
      lazy: 'true',
      defaultLocale: 'en',
      langDir: 'locales/',
      parsePages: false,
      pages: {
        home: {
          en: '/',
          es: '/',
          it: '/',
        },
        'products/introducers/index': {
          en:'/products/introducers',
          es:'/productos/introductores',
          de:'/produkte/einführer',
        }
      }
    }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if(ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre', 
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }// eslint fix rules
    }
  }
}
