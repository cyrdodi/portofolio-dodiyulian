// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Chivo Mono': true,
        }
      },
    ],
  ]
})
