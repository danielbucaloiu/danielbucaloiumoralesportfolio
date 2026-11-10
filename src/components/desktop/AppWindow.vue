<script setup>
import { computed } from 'vue'
import { useWindowManager } from '@/composables/useWindowManager'

const props = defineProps({
  win: { type: Object, required: true },
})

const windowManager = useWindowManager()

const isActive = computed(() => windowManager.state.activeId === props.win.id)
const titleId = computed(() => `window-title-${props.win.id}`)

const windowStyle = computed(() => {
  const { maximized, x, y, width, height, zIndex } = props.win
  if (maximized) return { left: 0, top: 0, width: '100%', height: '100%', zIndex }

  return {
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
    zIndex,
  }
})

// ---------- Drag & resize (pointer events work for mouse and touch) ----------
let gesture = null

function startGesture(event, type) {
  if (event.button !== 0 || props.win.maximized) return
  if (type === 'move' && event.target.closest('button')) return

  windowManager.focus(props.win.id)
  gesture = {
    type,
    startX: event.clientX,
    startY: event.clientY,
    x: props.win.x,
    y: props.win.y,
    width: props.win.width,
    height: props.win.height,
  }
  event.currentTarget.setPointerCapture(event.pointerId)
}

function updateGesture(event) {
  if (!gesture) return

  const deltaX = event.clientX - gesture.startX
  const deltaY = event.clientY - gesture.startY

  if (gesture.type === 'move') {
    windowManager.move(props.win.id, gesture.x + deltaX, gesture.y + deltaY)
  } else {
    windowManager.resize(props.win.id, gesture.width + deltaX, gesture.height + deltaY)
  }
}

function endGesture() {
  gesture = null
}

function handleTitleDoubleClick(event) {
  if (event.target.closest('button')) return
  windowManager.toggleMaximize(props.win.id)
}
</script>

<template>
  <dialog
    v-show="!win.minimized"
    open
    :aria-labelledby="titleId"
    class="xp-window pointer-events-auto absolute m-0 flex flex-col border-0 p-0 text-black"
    :class="{ 'is-active': isActive, 'rounded-none!': win.maximized }"
    :style="windowStyle"
    @pointerdown="windowManager.focus(win.id)"
  >
    <header
      class="xp-titlebar flex h-[30px] shrink-0 touch-none items-center gap-1.5 pr-1 pl-2"
      :class="win.maximized ? 'cursor-default' : 'cursor-move rounded-t-lg'"
      @pointerdown="startGesture($event, 'move')"
      @pointermove="updateGesture"
      @pointerup="endGesture"
      @pointercancel="endGesture"
      @dblclick="handleTitleDoubleClick"
    >
      <img :src="win.icon" alt="" draggable="false" class="size-4 shrink-0" />
      <h2
        :id="titleId"
        class="min-w-0 truncate text-[13px] font-bold [text-shadow:1px_1px_#0f1089]"
        :class="isActive ? 'text-white' : 'text-[#d8e4f8]'"
      >
        {{ win.title }}
      </h2>

      <div class="ml-auto flex shrink-0 gap-0.5">
        <button type="button" class="xp-control" aria-label="Minimizar" @click="windowManager.minimize(win.id)">
          <svg viewBox="0 0 10 10" class="size-2.5" aria-hidden="true">
            <rect x="1" y="7" width="6" height="2" fill="currentColor" />
          </svg>
        </button>

        <button
          type="button"
          class="xp-control"
          :aria-label="win.maximized ? 'Restaurar' : 'Maximizar'"
          @click="windowManager.toggleMaximize(win.id)"
        >
          <svg v-if="win.maximized" viewBox="0 0 10 10" class="size-2.5" aria-hidden="true">
            <rect x="3" y="0.75" width="6" height="6" fill="none" stroke="currentColor" stroke-width="1.5" />
            <rect x="0.75" y="3" width="6" height="6" fill="#2f6cf5" stroke="currentColor" stroke-width="1.5" />
          </svg>
          <svg v-else viewBox="0 0 10 10" class="size-2.5" aria-hidden="true">
            <rect x="0.75" y="0.75" width="8.5" height="8.5" fill="none" stroke="currentColor" stroke-width="1.5" />
            <rect x="0.75" y="0.75" width="8.5" height="2" fill="currentColor" />
          </svg>
        </button>

        <button
          type="button"
          class="xp-control xp-control-close"
          aria-label="Cerrar"
          @click="windowManager.close(win.id)"
        >
          <svg viewBox="0 0 10 10" class="size-2.5" aria-hidden="true">
            <path d="M2 2 8 8M8 2 2 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </header>

    <div class="mx-[3px] mb-[3px] min-h-0 flex-1 overflow-auto bg-white select-text">
      <component :is="win.component" v-bind="win.props" />
    </div>

    <div
      v-if="!win.maximized"
      class="absolute right-0 bottom-0 size-4 cursor-se-resize touch-none"
      aria-hidden="true"
      @pointerdown="startGesture($event, 'resize')"
      @pointermove="updateGesture"
      @pointerup="endGesture"
      @pointercancel="endGesture"
    />
  </dialog>
</template>
