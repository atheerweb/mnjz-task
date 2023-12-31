// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass' , '@mdi/font/css/materialdesignicons.min.css', '~/assets/css/global.css',],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  pages: true
})
