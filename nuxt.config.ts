// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '✝闇落ち✝',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@nuxt/image'],
  compatibilityDate: '2025-02-03',
});
