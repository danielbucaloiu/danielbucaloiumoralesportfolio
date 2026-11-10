import { computed, ref, watch } from 'vue'

// nameKey: translation key (src/i18n/locales)
export const wallpapers = [
  { id: 'default', nameKey: 'desktop.wallpapers.default', src: '/img/default_desktop_wallpaper.jpg' },
  { id: 'wallpaper-1', nameKey: 'desktop.wallpapers.first', src: '/img/desktop_wallpaper1.jpg' },
  { id: 'wallpaper-2', nameKey: 'desktop.wallpapers.second', src: '/img/desktop_wallpaper2.jpg' },
]

const STORAGE_KEY = 'desktop-wallpaper'

function readSavedId() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

// Module-level state shared by the desktop and the start menu.
const savedId = readSavedId()
const currentId = ref(wallpapers.some((w) => w.id === savedId) ? savedId : wallpapers[0].id)

watch(currentId, (id) => {
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies): the choice just isn't remembered.
  }
})

export function useWallpaper() {
  const currentWallpaper = computed(() => wallpapers.find((w) => w.id === currentId.value) ?? wallpapers[0])

  function setWallpaper(id) {
    currentId.value = id
  }

  return { wallpapers, currentWallpaper, setWallpaper }
}
