import { logger } from '@nuxt/kit'
import { version } from './package.json'
logger.success(`Using J-Squared v${version}`)

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  extends: [
    process.env.TYPOGRAPHY_THEME || '@nuxt-themes/typography',
    '@nuxt-themes/elements'
  ],
  modules: [
    '@nuxt/content',
    //'@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-config-schema',
    //'@nuxthq/studio'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  css: [
    '@/assets/scss/_base.scss'
  ],
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  }
})
