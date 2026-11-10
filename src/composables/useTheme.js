import { computed, ref } from 'vue'

const STORAGE_KEY = 'theme'

// The initial class is set by an inline script in index.html (avoids a flash of the wrong theme).
const theme = ref(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

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
