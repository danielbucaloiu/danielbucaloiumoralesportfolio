<script setup>
import { useClock } from '@/composables/useClock'
import { useWindowManager } from '@/composables/useWindowManager'

defineProps({
  startMenuOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['toggle-start-menu'])

const windowManager = useWindowManager()
const { now, time, date, shortDate } = useClock()
</script>

<template>
  <footer class="xp-taskbar absolute inset-x-0 bottom-0 z-10 flex h-10 items-stretch">
    <button
      type="button"
      data-start-button
      class="xp-start flex shrink-0 items-center gap-1.5 pr-5 pl-2.5 text-lg font-bold text-white italic [text-shadow:1px_1px_2px_rgb(0_0_0/0.6)]"
      :class="{ 'is-pressed': startMenuOpen }"
      :aria-expanded="startMenuOpen"
      aria-haspopup="menu"
      @click="emit('toggle-start-menu')"
    >
      <img src="/img/windows_xp_icon_logo.png" alt="" draggable="false" class="size-7 drop-shadow-[1px_1px_1px_rgb(0_0_0/0.4)]" />
      <span>inicio</span>
    </button>

    <nav aria-label="Ventanas abiertas" class="flex min-w-0 flex-1 items-center gap-1 px-2">
      <button
        v-for="win in windowManager.state.windows"
        :key="win.id"
        type="button"
        class="xp-task flex h-8 w-40 min-w-0 shrink items-center gap-1.5 px-2 text-xs text-white"
        :class="{ 'is-active': windowManager.state.activeId === win.id && !win.minimized }"
        :title="win.title"
        @click="windowManager.toggleFromTaskbar(win.id)"
      >
        <img :src="win.icon" alt="" draggable="false" class="size-4 shrink-0" />
        <span class="truncate">{{ win.title }}</span>
      </button>
    </nav>

    <time
      class="xp-tray flex shrink-0 flex-col items-center justify-center px-3 text-[11px] leading-tight text-white"
      :datetime="now.toISOString()"
      :title="date"
    >
      <span>{{ time }}</span>
      <span>{{ shortDate }}</span>
    </time>
  </footer>
</template>
