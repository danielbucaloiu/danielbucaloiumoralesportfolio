// v-reveal: fades an element in when it enters the viewport.
// Optional value = delay in ms, e.g. v-reveal="150".
// Does nothing when the visitor prefers reduced motion, and skips elements that are already
// on screen when mounted (the pre-rendered HTML is visible before JS loads; hiding it to
// animate it again would make it flicker).
let observer = null

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

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
  // Required for server-side rendering (vite-ssg): no extra attributes in the static HTML
  getSSRProps() {
    return {}
  },
  mounted(el, binding) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window) || isInViewport(el)) return

    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
