import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //Global css
  css: [
    "@baraka-mvp/baraka/dist/library.css",
    "@/assets/css/_styles.scss",
    "@baraka-mvp/tokens/build/css/decisions-jel-variables.css",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/graphik?styles=44652,44664",
        },
      ],
    },
  },
  hooks: {
    "vite:extendConfig": (config, { isClient, isServer }) => {
      if (isClient) {
        //config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
      }
    },
  },
  router: {
    base: '/jel-nuxt/'
  },
});
