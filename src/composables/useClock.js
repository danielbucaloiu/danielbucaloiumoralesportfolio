import { computed, onMounted, onUnmounted, ref } from 'vue'

export function useClock(locale = 'es-ES') {
  const now = ref(new Date())
  let timerId

  onMounted(() => {
    timerId = setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onUnmounted(() => clearInterval(timerId))

  const time = computed(() =>
    now.value.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }),
  )

  const date = computed(() =>
    now.value.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  )

  const shortDate = computed(() =>
    now.value.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),
  )

  return { now, time, date, shortDate }
}
