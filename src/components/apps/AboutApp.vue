<script setup>
import { profile } from '@/data/profile'
import LinkifiedText from '@/components/LinkifiedText.vue'

const menuItems = ['Archivo', 'Edición', 'Formato', 'Ver', 'Ayuda']
</script>

<template>
  <!-- Notepad look -->
  <div class="flex h-full flex-col">
    <nav class="flex shrink-0 gap-3 border-b border-[#d6d3ce] bg-xp-face px-2 py-0.5 text-xs" aria-hidden="true">
      <span v-for="item in menuItems" :key="item">{{ item }}</span>
    </nav>
    <article class="min-h-0 flex-1 overflow-auto p-2 font-notepad text-[13px] leading-relaxed whitespace-pre-wrap"><LinkifiedText :text="profile.bio" :links="profile.aboutLinks" :highlights="profile.aboutHighlights" highlight-class="font-bold" link-class="text-[#0000ee] underline hover:text-[#551a8b]" /></article>
  </div>
</template>
