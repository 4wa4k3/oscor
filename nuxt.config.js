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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'preconnect', href:'https://fonts.gstatic.com', crossorigin:'crossorigin' }],
    link: [{ rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&family=Oswald:wght@300;400;500&display=swap',  }], 
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
      lazy: true,
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
      defaultLocale: 'en',
      langDir: 'locales/',
      encodePaths: false,
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
    transpile: [
      "gsap"
    ],

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
