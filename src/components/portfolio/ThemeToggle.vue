<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="relative grid size-9 place-items-center rounded-full text-stone-600 transition-colors hover:bg-stone-200/70 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100 cursor-pointer"
    :aria-label="isDark ? t('portfolio.theme.toLight') : t('portfolio.theme.toDark')"
    :title="isDark ? t('portfolio.theme.light') : t('portfolio.theme.dark')"
    @click="toggleTheme"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="rotate-90 scale-50 opacity-0"
      leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
      leave-to-class="-rotate-90 scale-50 opacity-0"
    >
      <!-- Sun -->
      <svg
        v-if="isDark"
        key="sun"
        viewBox="0 0 24 24"
        class="size-4.5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      <!-- Moon -->
      <svg
        v-else
        key="moon"
        viewBox="0 0 24 24"
        class="size-4.5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
      </svg>
    </Transition>
  </button>
</template>
