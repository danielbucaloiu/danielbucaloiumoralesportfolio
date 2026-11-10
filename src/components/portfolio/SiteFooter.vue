<script setup>
import { profile } from '@/data/profile'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-stone-200 dark:border-stone-800">
    <div
      class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 lg:px-10 py-8 text-sm text-stone-500 dark:text-stone-400"
    >
      <p>© {{ currentYear }} {{ profile.name }}</p>
      <RouterLink to="/desktop" class="flex items-center gap-2 transition hover:text-stone-900 dark:hover:text-stone-100">
        <img src="/img/windows_xp_icon_logo.png" alt="" class="size-4" />
        Versión escritorio
      </RouterLink>
    </div>
  </footer>
</template>
