<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { desktopApps } from '@/data/apps'
import { useLocale } from '@/composables/useLocale'
import { profile } from '@/data/profile'
import { useWallpaper } from '@/composables/useWallpaper'

const emit = defineEmits(['open-app'])

const { t } = useI18n()
const { locale, toggleLocale } = useLocale()

const { wallpapers, currentWallpaper, setWallpaper } = useWallpaper()

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
    { label: t('desktop.startMenu.githubProfile'), href: profile.githubUrl, icon: '/img/github.png' },
    // TODO: add a LinkedIn icon to /public/img and use it here
    { label: t('desktop.startMenu.linkedin'), href: profile.linkedinUrl, icon: '/img/txt.png' },
    { label: t('desktop.startMenu.sendEmail'), href: `mailto:${profile.email}`, icon: '/img/mail.png' },
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
        <p class="truncate text-xs opacity-90">{{ t('profile.role') }}</p>
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
            <span class="font-bold">{{ t(app.titleKey) }}</span>
          </button>
        </li>
      </ul>

      <ul class="flex flex-col border-l border-[#95bdee] bg-[#d3e5fa] py-1.5">
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

        <li>
          <RouterLink
            to="/"
            role="menuitem"
            class="flex items-center gap-2 px-2 py-1.5 text-xs text-[#00136b] hover:bg-xp-select hover:text-white"
          >
            <img src="/img/txt.png" alt="" draggable="false" class="size-6 shrink-0" />
            <span>{{ t('desktop.startMenu.classicPortfolio') }}</span>
          </RouterLink>
        </li>

        <li>
          <button
            type="button"
            role="menuitem"
            class="flex w-full items-center gap-2 px-2 py-1.5 text-left text-xs text-[#00136b] hover:bg-xp-select hover:text-white"
            @click="toggleLocale"
          >
            <span
              class="grid size-6 shrink-0 place-items-center rounded-sm border border-xp-input-border bg-white text-[9px] font-bold text-[#215dc6] uppercase"
              aria-hidden="true"
            >
              {{ locale === 'es' ? 'en' : 'es' }}
            </span>
            <span>{{ t('desktop.startMenu.switchLanguage') }}</span>
          </button>
        </li>

        <li class="mt-auto border-t border-[#95bdee] px-2 pt-2">
          <p id="wallpaper-picker-label" class="mb-1.5 text-xs font-bold text-[#00136b]">{{ t('desktop.startMenu.wallpaper') }}</p>
          <div role="radiogroup" aria-labelledby="wallpaper-picker-label" class="flex gap-1.5">
            <button
              v-for="wallpaper in wallpapers"
              :key="wallpaper.id"
              type="button"
              role="radio"
              :aria-checked="currentWallpaper.id === wallpaper.id"
              :title="t(wallpaper.nameKey)"
              class="aspect-video flex-1 overflow-hidden border-2 hover:border-[#e9a43c]"
              :class="currentWallpaper.id === wallpaper.id ? 'border-xp-select' : 'border-white'"
              @click="setWallpaper(wallpaper.id)"
            >
              <img :src="wallpaper.src" :alt="t(wallpaper.nameKey)" draggable="false" class="size-full object-cover" />
            </button>
          </div>
        </li>
      </ul>
    </div>

    <footer class="xp-startmenu-footer h-9" />
  </div>
</template>
