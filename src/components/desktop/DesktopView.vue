<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { desktopApps } from '@/data/apps'
import { useHead } from '@unhead/vue'
import { syncWallpaperFromStorage, useWallpaper } from '@/composables/useWallpaper'
import { useWindowManager } from '@/composables/useWindowManager'
import AppWindow from './AppWindow.vue'
import DesktopIcon from './DesktopIcon.vue'
import StartMenu from './StartMenu.vue'
import Taskbar from './Taskbar.vue'

const { t } = useI18n()
const windowManager = useWindowManager()
const { currentWallpaper } = useWallpaper()

// The desktop is an alternative view of the same content: keep it out of search results
// so it doesn't compete with the main page.
useHead({ meta: [{ name: 'robots', content: 'noindex, follow' }] })

const selectedIconId = ref(null)
const isStartMenuOpen = ref(false)

function openApp(app) {
  windowManager.open(app)
  isStartMenuOpen.value = false
}

function handleDocumentPointerDown(event) {
  if (!event.target.closest('[data-start-menu], [data-start-button]')) {
    isStartMenuOpen.value = false
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') isStartMenuOpen.value = false
}

onMounted(() => {
  syncWallpaperFromStorage()
  document.addEventListener('pointerdown', handleDocumentPointerDown)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', windowManager.fitAllToViewport)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleDocumentPointerDown)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', windowManager.fitAllToViewport)
})
</script>

<template>
  <div
    class="fixed inset-0 overflow-hidden bg-[#3a6ea5] bg-cover bg-center font-xp transition-[background-image] duration-300 select-none"
    :style="{ backgroundImage: `url('${currentWallpaper.src}')` }"
  >
    <main class="absolute inset-x-0 top-0 bottom-10">
      <ul
        class="flex h-full flex-col flex-wrap content-start gap-3 p-3"
        :aria-label="t('desktop.desktopLabel')"
        @pointerdown.self="selectedIconId = null"
      >
        <li v-for="app in desktopApps" :key="app.id">
          <DesktopIcon
            :icon="app.icon"
            :label="t(app.titleKey)"
            :selected="selectedIconId === app.id"
            @select="selectedIconId = app.id"
            @open="openApp(app)"
          />
        </li>
      </ul>

      <!-- Window layer: its own stacking context so windows never cover the taskbar -->
      <div class="pointer-events-none absolute inset-0 isolate">
        <AppWindow v-for="win in windowManager.state.windows" :key="win.id" :win="win" />
      </div>
    </main>

    <StartMenu v-if="isStartMenuOpen" @open-app="openApp" />
    <Taskbar :start-menu-open="isStartMenuOpen" @toggle-start-menu="isStartMenuOpen = !isStartMenuOpen" />
  </div>
</template>
