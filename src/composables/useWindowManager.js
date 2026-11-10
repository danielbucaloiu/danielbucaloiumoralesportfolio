import { markRaw, reactive, readonly } from 'vue'

export const TASKBAR_HEIGHT = 40

const MOBILE_BREAKPOINT = 640
const MIN_WIDTH = 260
const MIN_HEIGHT = 160
// Pixels of a window that must always stay inside the screen while dragging.
const VISIBLE_MARGIN = 80
const TITLEBAR_HEIGHT = 30
const CASCADE_STEP = 28
const CASCADE_STEPS = 8

// Module-level state: every component that calls useWindowManager() shares it.
const state = reactive({
  windows: [],
  activeId: null,
})

let topZIndex = 0
let cascadeIndex = 0

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

function getViewport() {
  return {
    width: window.innerWidth,
    height: window.innerHeight - TASKBAR_HEIGHT,
  }
}

function findWindow(id) {
  return state.windows.find((win) => win.id === id)
}

function getTopmostVisibleWindow() {
  return state.windows
    .filter((win) => !win.minimized)
    .reduce((top, win) => (!top || win.zIndex > top.zIndex ? win : top), null)
}

function activateTopmostWindow() {
  state.activeId = getTopmostVisibleWindow()?.id ?? null
}

function keepInsideViewport(win) {
  const viewport = getViewport()
  win.width = Math.min(win.width, viewport.width)
  win.height = Math.min(win.height, viewport.height)
  win.x = clamp(win.x, VISIBLE_MARGIN - win.width, viewport.width - VISIBLE_MARGIN)
  win.y = clamp(win.y, 0, viewport.height - TITLEBAR_HEIGHT)
}

function focus(id) {
  const win = findWindow(id)
  if (!win) return
  if (state.activeId === id && win.zIndex === topZIndex) return

  win.zIndex = ++topZIndex
  state.activeId = id
}

/**
 * Opens a window, or brings it to the front if it is already open.
 * @param {{ id: string, title: string, icon: string, component: object,
 *           props?: object, width?: number, height?: number }} options
 */
function open({ id, title, icon, component, props = {}, width = 520, height = 380 }) {
  const existing = findWindow(id)
  if (existing) {
    existing.minimized = false
    focus(id)
    return
  }

  const viewport = getViewport()
  const windowWidth = Math.min(width, viewport.width - 16)
  const windowHeight = Math.min(height, viewport.height - 16)
  const offset = (cascadeIndex++ % CASCADE_STEPS) * CASCADE_STEP

  state.windows.push({
    id,
    title,
    icon,
    component: markRaw(component),
    props,
    width: windowWidth,
    height: windowHeight,
    x: clamp(120 + offset, 8, Math.max(8, viewport.width - windowWidth - 8)),
    y: clamp(40 + offset, 8, Math.max(8, viewport.height - windowHeight - 8)),
    zIndex: 0,
    minimized: false,
    maximized: viewport.width < MOBILE_BREAKPOINT,
  })

  focus(id)
}

function close(id) {
  const index = state.windows.findIndex((win) => win.id === id)
  if (index === -1) return

  state.windows.splice(index, 1)
  if (state.activeId === id) activateTopmostWindow()
}

function minimize(id) {
  const win = findWindow(id)
  if (!win) return

  win.minimized = true
  if (state.activeId === id) activateTopmostWindow()
}

function toggleMaximize(id) {
  const win = findWindow(id)
  if (!win) return

  win.maximized = !win.maximized
  focus(id)
}

function move(id, x, y) {
  const win = findWindow(id)
  if (!win || win.maximized) return

  win.x = x
  win.y = y
  keepInsideViewport(win)
}

function resize(id, width, height) {
  const win = findWindow(id)
  if (!win || win.maximized) return

  const viewport = getViewport()
  win.width = clamp(width, MIN_WIDTH, viewport.width)
  win.height = clamp(height, MIN_HEIGHT, viewport.height - win.y)
}

/** Taskbar button behaviour: minimize the active window, restore/focus the rest. */
function toggleFromTaskbar(id) {
  const win = findWindow(id)
  if (!win) return

  if (!win.minimized && state.activeId === id) {
    minimize(id)
  } else {
    win.minimized = false
    focus(id)
  }
}

function fitAllToViewport() {
  state.windows.forEach(keepInsideViewport)
}

export function useWindowManager() {
  return {
    state: readonly(state),
    open,
    close,
    focus,
    minimize,
    toggleMaximize,
    move,
    resize,
    toggleFromTaskbar,
    fitAllToViewport,
  }
}
