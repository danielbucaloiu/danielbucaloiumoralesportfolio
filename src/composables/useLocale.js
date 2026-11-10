import { computed } from 'vue'
import { i18n, SUPPORTED_LOCALES } from '@/i18n'

export function useLocale() {
  const locale = computed(() => i18n.global.locale.value)

  function setLocale(value) {
    if (SUPPORTED_LOCALES.includes(value)) i18n.global.locale.value = value
  }

  const toggleLocale = () => setLocale(locale.value === 'es' ? 'en' : 'es')

  return { locale, locales: SUPPORTED_LOCALES, setLocale, toggleLocale }
}
