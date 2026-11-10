import { computed, onMounted, onUnmounted, ref, toValue } from 'vue'

// locale: a BCP 47 string, ref or getter (e.g. () => 'es-ES'), so the format follows the UI language.
// `now` is null until mounted, so the pre-rendered HTML (built at deploy time) never shows a stale time.
export function useClock(locale = 'es-ES') {
  const now = ref(null)
  let timerId

  onMounted(() => {
    now.value = new Date()
    timerId = setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onUnmounted(() => clearInterval(timerId))

  const format = (method, options) => (now.value ? now.value[method](toValue(locale), options) : '')

  const time = computed(() => format('toLocaleTimeString', { hour: '2-digit', minute: '2-digit' }))
  const date = computed(() =>
    format('toLocaleDateString', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  )
  const shortDate = computed(() => format('toLocaleDateString', { day: '2-digit', month: '2-digit', year: 'numeric' }))

  return { now, time, date, shortDate }
}
