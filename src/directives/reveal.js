// v-reveal: fades an element in when it enters the viewport.
// Optional value = delay in ms, e.g. v-reveal="150".
// Does nothing when the visitor prefers reduced motion.
let observer = null

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  return observer
}

export const vReveal = {
  mounted(el, binding) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return

    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
