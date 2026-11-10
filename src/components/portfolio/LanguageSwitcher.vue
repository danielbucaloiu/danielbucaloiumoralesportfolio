<script setup>
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { locale, locales, setLocale } = useLocale()
</script>

<template>
  <div
    role="group"
    :aria-label="t('common.language')"
    class="flex items-center rounded-full border border-stone-200 p-0.5 text-xs font-medium dark:border-stone-800"
  >
    <button
      v-for="code in locales"
      :key="code"
      type="button"
      :lang="code"
      :aria-pressed="locale === code"
      class="cursor-pointer rounded-full px-2 py-1 uppercase transition-colors"
      :class="
        locale === code
          ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900'
          : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
      "
      @click="setLocale(code)"
    >
      {{ code }}
    </button>
  </div>
</template>
