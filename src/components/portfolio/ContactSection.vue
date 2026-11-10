<script setup>
import { ref } from 'vue'
import { profile } from '@/data/profile'

const isCopied = ref(false)
let resetTimer

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    isCopied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (isCopied.value = false), 2000)
  } catch {
    // Clipboard not available (e.g. insecure context): the mailto link still works.
  }
}
</script>

<template>
  <section id="contacto" class="mx-auto max-w-7xl scroll-mt-20 px-6 lg:px-10 py-20 sm:py-28">
    <h2 v-reveal class="text-3xl font-semibold tracking-tight sm:text-5xl">¿Hablamos?</h2>

    <p v-reveal="80" class="mt-5 max-w-xl text-lg text-pretty text-stone-600 dark:text-stone-400">
      Estoy buscando nuevas oportunidades. Si tienes un proyecto o una oferta, escríbeme y te responderé lo antes
      posible.
    </p>

    <div v-reveal="160" class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
      <a
        :href="`mailto:${profile.email}`"
        class="text-xl font-medium break-all underline decoration-stone-300 underline-offset-8 transition hover:decoration-orange-600 sm:text-3xl dark:decoration-stone-700 dark:hover:decoration-orange-400"
      >
        {{ profile.email }}
      </a>

      <button
        type="button"
        class="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 dark:border-stone-700 dark:text-stone-400 dark:hover:border-stone-300 dark:hover:text-stone-100"
        @click="copyEmail"
      >
        <span aria-live="polite">{{ isCopied ? 'Copiado' : 'Copiar' }}</span>
      </button>
    </div>

    <ul v-reveal="240" class="mt-10 flex gap-6 text-sm">
      <li>
        <a
          :href="profile.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-stone-500 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          GitHub ↗
        </a>
      </li>
      <li v-if="profile.linkedinUrl">
        <a
          :href="profile.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-stone-500 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          LinkedIn ↗
        </a>
      </li>
    </ul>
  </section>
</template>
