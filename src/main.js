import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { i18n } from './i18n'
import { vReveal } from './directives/reveal'

// vite-ssg: in `npm run build` the pages are pre-rendered to static HTML (good for SEO),
// in the browser the app is hydrated and works as a normal SPA.
export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app }) => {
  app.use(i18n)
  app.directive('reveal', vReveal)
})
