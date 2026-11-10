import { createRouter, createWebHistory } from 'vue-router'
import PortfolioView from '@/views/PortfolioView.vue'

const routes = [
  { path: '/', name: 'portfolio', component: PortfolioView },
  // Loaded on demand: visitors of the regular portfolio don't download the desktop code.
  { path: '/desktop', name: 'desktop', component: () => import('@/components/desktop/DesktopView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
