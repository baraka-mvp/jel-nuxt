

import Plugin from '@baraka-mvp/baraka'
//import Plugin from './rollup-build'
import { NuxtLink } from "#components"

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(Plugin,{
    framework:"nuxt",
    nuxtlink:NuxtLink
  })
})