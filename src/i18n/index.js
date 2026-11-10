import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

export const SUPPORTED_LOCALES = ['es', 'en']
const STORAGE_KEY = 'locale'

function getInitialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LOCALES.includes(saved)) return saved
  } catch {
    // Storage unavailable: fall back to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'es',
  messages: { es, en },
})

// Keep <html lang>, the tab title and the meta description in sync, and remember the choice.
function applyLocale(locale) {
  const { t } = i18n.global
  document.documentElement.lang = locale
  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Storage unavailable: the language works, it just isn't remembered.
  }
}

applyLocale(i18n.global.locale.value)
watch(i18n.global.locale, applyLocale)
