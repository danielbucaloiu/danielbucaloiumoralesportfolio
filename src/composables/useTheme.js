import { computed, ref } from 'vue'

const STORAGE_KEY = 'theme'

// Starts as 'light' so the browser render matches the pre-rendered HTML (hydration).
// The real theme class is already on <html> thanks to the inline script in index.html;
// syncThemeFromDocument() (called after mounting, see App.vue) copies it into this state.
const theme = ref('light')

export function syncThemeFromDocument() {
  theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function setTheme(value) {
  theme.value = value
  document.documentElement.classList.toggle('dark', value === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Storage unavailable: the theme works, it just isn't remembered.
  }
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')
  const toggleTheme = () => setTheme(isDark.value ? 'light' : 'dark')

  return { theme, isDark, toggleTheme }
}
