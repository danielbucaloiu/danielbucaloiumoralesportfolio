import { computed, ref, watch } from 'vue'

export const wallpapers = [
  { id: 'default', name: 'Predeterminado', src: '/img/default_desktop_wallpaper.jpg' },
  { id: 'wallpaper-1', name: 'Fondo 1', src: '/img/desktop_wallpaper1.jpg' },
  { id: 'wallpaper-2', name: 'Fondo 2', src: '/img/desktop_wallpaper2.jpg' },
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
