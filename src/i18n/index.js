import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

export const SUPPORTED_LOCALES = ['es', 'en']
// Language of the pre-rendered HTML (what Google indexes).
export const DEFAULT_LOCALE = 'es'
const STORAGE_KEY = 'locale'

const isBrowser = typeof window !== 'undefined'

// Always start with the default locale so the browser render matches the pre-rendered HTML
// (hydration). The visitor's preferred language is applied right after mounting (see App.vue).
export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { es, en },
})

function getPreferredLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LOCALES.includes(saved)) return saved
  } catch {
    // Storage unavailable: fall back to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

/** Client only: switch to the saved/browser language and remember future changes. */
export function applyPreferredLocale() {
  if (!isBrowser) return

  i18n.global.locale.value = getPreferredLocale()
  watch(i18n.global.locale, (locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Storage unavailable: the language works, it just isn't remembered.
    }
  })
}
