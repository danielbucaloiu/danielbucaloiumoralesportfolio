import { computed, ref } from 'vue'

// nameKey: translation key (src/i18n/locales)
export const wallpapers = [
  { id: 'default', nameKey: 'desktop.wallpapers.default', src: '/img/default_desktop_wallpaper.jpg' },
  { id: 'wallpaper-1', nameKey: 'desktop.wallpapers.first', src: '/img/desktop_wallpaper1.jpg' },
  { id: 'wallpaper-2', nameKey: 'desktop.wallpapers.second', src: '/img/desktop_wallpaper2.jpg' },
]

const STORAGE_KEY = 'desktop-wallpaper'

// Module-level state shared by the desktop and the start menu.
// Starts with the default wallpaper so the browser render matches the pre-rendered HTML;
// syncWallpaperFromStorage() (called after mounting the desktop) restores the saved one.
const currentId = ref(wallpapers[0].id)

export function syncWallpaperFromStorage() {
  try {
    const savedId = localStorage.getItem(STORAGE_KEY)
    if (wallpapers.some((w) => w.id === savedId)) currentId.value = savedId
  } catch {
    // Storage unavailable: keep the default wallpaper.
  }
}

export function useWallpaper() {
  const currentWallpaper = computed(() => wallpapers.find((w) => w.id === currentId.value) ?? wallpapers[0])

  function setWallpaper(id) {
    currentId.value = id
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // Storage can be unavailable (private mode, blocked cookies): the choice just isn't remembered.
    }
  }

  return { wallpapers, currentWallpaper, setWallpaper }
}
