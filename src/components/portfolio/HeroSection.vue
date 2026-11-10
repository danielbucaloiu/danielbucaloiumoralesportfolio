<script setup>
import { profile } from '@/data/profile'
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10 lg:pb-10 sm:pt-28 sm:pb-32">
    <p v-reveal class="font-mono text-md text-orange-600 dark:text-orange-400">Hola, soy</p>

    <h1 v-reveal="80" class="mt-3 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
      {{ profile.name }}
    </h1>

    <p v-reveal="160" class="mt-6 max-w-2xl text-lg text-pretty text-stone-600 sm:text-xl dark:text-stone-400">
      {{ profile.role }}.
      {{ profile.tagline }}
    </p>

    <div v-reveal="240" class="mt-10 flex flex-wrap items-center gap-3">
      <a
        href="#proyectos"
        class="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700 active:scale-[0.98] dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
      >
        Ver proyectos
      </a>
      <a
        href="#contacto"
        class="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium transition hover:border-stone-900 active:scale-[0.98] dark:border-stone-700 dark:hover:border-stone-300"
      >
        Contacto
      </a>

      <a
        :href="profile.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-1 grid size-10 place-items-center rounded-full transition hover:bg-stone-200/70 dark:hover:bg-stone-800"
        aria-label="GitHub"
        title="GitHub"
      >
        <img src="/img/skills/github.svg" alt="" class="size-5 dark:invert" />
      </a>
    </div>

    <p v-reveal="320" class="mt-16 text-sm text-stone-500 dark:text-stone-400">
      ¿Prefieres algo más retro?
      <RouterLink
        to="/desktop"
        class="font-medium text-orange-600 underline decoration-orange-600/30 underline-offset-4 transition hover:decoration-orange-600 dark:text-orange-400 dark:decoration-orange-400/30 dark:hover:decoration-orange-400"
      >
        Abre la versión escritorio
      </RouterLink>
    </p>
  </section>
</template>
