<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()

const navLinks = [
  { labelKey: 'portfolio.nav.projects', href: '#proyectos' },
  { labelKey: 'portfolio.nav.about', href: '#sobre-mi' },
  { labelKey: 'portfolio.nav.skills', href: '#skills' },
  { labelKey: 'portfolio.nav.contact', href: '#contacto' },
]

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-colors duration-300"
    :class="
      isScrolled || isMenuOpen
        ? 'border-stone-200 bg-stone-50/85 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/85'
        : 'border-transparent'
    "
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 lg:px-10">
      <a href="#" class="font-semibold tracking-tight" @click="isMenuOpen = false">
        {{ profile.name.split(' ').slice(0, 2).join(' ') }}
      </a>

      <nav :aria-label="t('portfolio.nav.label')" class="ml-auto hidden md:block">
        <ul class="flex gap-1 text-sm">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="rounded-full px-3 py-1.5 text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              {{ t(link.labelKey) }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="ml-auto flex items-center gap-1 md:ml-0">
        <LanguageSwitcher class="mr-1" />

        <RouterLink
          to="/desktop"
          class="grid size-9 place-items-center rounded-full transition-colors hover:bg-stone-200/70 dark:hover:bg-stone-800"
          :title="t('portfolio.desktopVersion')"
          :aria-label="t('portfolio.openDesktopVersion')"
        >
          <img src="/img/windows_xp_icon_logo.png" alt="" class="size-4.5" />
        </RouterLink>

        <ThemeToggle />

        <button
          type="button"
          class="grid size-9 place-items-center rounded-full text-stone-600 hover:bg-stone-200/70 md:hidden dark:text-stone-400 dark:hover:bg-stone-800"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? t('portfolio.nav.closeMenu') : t('portfolio.nav.openMenu')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path v-if="isMenuOpen" d="M6 6l12 12M18 6 6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav v-if="isMenuOpen" id="mobile-menu" :aria-label="t('portfolio.nav.label')" class="px-6 pb-4 md:hidden">
        <ul class="flex flex-col">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block border-b border-stone-200 py-3 text-stone-700 dark:border-stone-800 dark:text-stone-300"
              @click="isMenuOpen = false"
            >
              {{ t(link.labelKey) }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
