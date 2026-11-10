<script setup>
import { computed } from 'vue'
import { desktopApps } from '@/data/apps'
import { profile } from '@/data/profile'

const emit = defineEmits(['open-app'])

const initials = computed(() =>
  profile.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)

const externalLinks = computed(() =>
  [
    { label: 'Perfil de GitHub', href: profile.githubUrl, icon: '/img/github.png' },
    // TODO: add a LinkedIn icon to /public/img and use it here
    { label: 'LinkedIn', href: profile.linkedinUrl, icon: '/img/txt.png' },
    { label: 'Enviar un correo', href: `mailto:${profile.email}`, icon: '/img/mail.png' },
  ].filter((link) => link.href),
)
</script>

<template>
  <div
    data-start-menu
    role="menu"
    class="xp-startmenu absolute bottom-10 left-0 z-20 flex w-[min(400px,100vw)] flex-col overflow-hidden rounded-t-lg shadow-[3px_0_10px_rgb(0_0_0/0.5)]"
  >
    <header class="xp-startmenu-header flex items-center gap-3 px-2 py-1.5">
      <div
        class="grid size-12 shrink-0 place-items-center rounded border-2 border-white/80 bg-[#e8a33c] text-lg font-bold text-white shadow"
        aria-hidden="true"
      >
        {{ initials }}
      </div>
      <div class="min-w-0 text-white [text-shadow:1px_1px_1px_rgb(0_0_0/0.5)]">
        <p class="truncate text-sm font-bold">{{ profile.name }}</p>
        <p class="truncate text-xs opacity-90">{{ profile.role }}</p>
      </div>
    </header>

    <div class="mx-0.5 grid grid-cols-2 border-t-2 border-[#e9a43c] bg-white">
      <ul class="py-1.5">
        <li v-for="app in desktopApps" :key="app.id">
          <button
            type="button"
            role="menuitem"
            class="flex w-full items-center gap-2 px-2 py-1.5 text-left text-xs text-black hover:bg-xp-select hover:text-white"
            @click="emit('open-app', app)"
          >
            <img :src="app.icon" alt="" draggable="false" class="size-8 shrink-0" />
            <span class="font-bold">{{ app.title }}</span>
          </button>
        </li>
      </ul>

      <ul class="border-l border-[#95bdee] bg-[#d3e5fa] py-1.5">
        <li v-for="link in externalLinks" :key="link.label">
          <a
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            class="flex items-center gap-2 px-2 py-1.5 text-xs text-[#00136b] hover:bg-xp-select hover:text-white"
          >
            <img :src="link.icon" alt="" draggable="false" class="size-6 shrink-0" />
            <span>{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </div>

    <footer class="xp-startmenu-footer h-9" />
  </div>
</template>
