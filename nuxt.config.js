export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kayan - Africa Inland Mission',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kayan is a Webflow Template especially for Charity, NGO, Non-Profit Organization or Foundation, Campaign &amp; Event Donation, Religion or a Fundraising website.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@500;700&display=swap' },

    ]
  },

  ssr: true, // true => universal, false => spa

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins:  ['~/plugins/vue-fragment.js', { src: "~/plugins/aos.client", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  
    components:['BContainer', 'BRow', 'BCol', 'BNav', 'BNavItem'],
    componentPlugins: [
      'ModalPlugin'
    ],
  },
  
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  server: {
    host: '0.0.0.0', // default: localhost
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
