import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // vite-ssg (npm run build): pre-render these routes to static HTML -> dist/index.html, dist/desktop.html
  ssgOptions: {
    includedRoutes: () => ['/', '/desktop'],
    script: 'async',
    formatting: 'minify',
  },
})
