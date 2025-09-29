import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: { componentIslands: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  imports: {
    dirs: ['../types']
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
  routeRules: {
    '/login': { prerender: true },
  }
})