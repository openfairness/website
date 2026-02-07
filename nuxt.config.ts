// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueuse/nuxt'],
  app: {
    head: {
      title: 'Open Fairness | In Mathematics We Trust',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Open-source provably fair algorithms for transparent gaming' }
      ]
    }
  }
})
