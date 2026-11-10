<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { projects } from '@/data/projects'
import { getTechIcon } from '@/data/techIcons'
import { useContent } from '@/composables/useContent'

const { t, projectDescription } = useContent()

// Preload every screenshot so switching projects doesn't show an empty image while it loads.
onMounted(() => {
  projects.forEach((project) => {
    if (project.image) new Image().src = project.image
  })
})

const activeIndex = ref(0)
const activeProject = computed(() => projects[activeIndex.value])
const tabRefs = ref([])

const formatNumber = (number) => String(number).padStart(2, '0')

const activeHostname = computed(() => {
  const url = activeProject.value.demoUrl || activeProject.value.repoUrl
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return activeProject.value.name
  }
})

// Tabs keyboard pattern: arrow keys move between projects, Home/End jump to the edges.
async function handleTabKeydown(event) {
  const lastIndex = projects.length - 1
  const keyMap = {
    ArrowDown: activeIndex.value === lastIndex ? 0 : activeIndex.value + 1,
    ArrowRight: activeIndex.value === lastIndex ? 0 : activeIndex.value + 1,
    ArrowUp: activeIndex.value === 0 ? lastIndex : activeIndex.value - 1,
    ArrowLeft: activeIndex.value === 0 ? lastIndex : activeIndex.value - 1,
    Home: 0,
    End: lastIndex,
  }
  if (!(event.key in keyMap)) return

  event.preventDefault()
  activeIndex.value = keyMap[event.key]
  await nextTick()
  tabRefs.value[activeIndex.value]?.focus()
}
</script>

<template>
  <section id="proyectos" class="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 lg:px-10">
    <h2 v-reveal class="text-3xl font-semibold tracking-tight">{{ t('portfolio.projects.title') }}</h2>

    <div v-reveal="100" class="mt-10 grid gap-4 md:grid-cols-[220px_1fr] md:gap-6">
      <!-- Project selector -->
      <div
        role="tablist"
        :aria-label="t('portfolio.projects.title')"
        aria-orientation="vertical"
        class="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:flex-col md:overflow-visible md:p-0"
      >
        <button
          v-for="(project, index) in projects"
          :id="`project-tab-${project.id}`"
          :key="project.id"
          :ref="(el) => (tabRefs[index] = el)"
          type="button"
          role="tab"
          :aria-selected="index === activeIndex"
          aria-controls="project-panel"
          :tabindex="index === activeIndex ? 0 : -1"
          class="flex shrink-0 items-baseline gap-3 rounded-xl border px-4 py-3 text-left font-medium transition-colors md:text-lg cursor-pointer"
          :class="
            index === activeIndex
              ? 'border-stone-900 bg-white text-stone-900 dark:border-stone-100 dark:bg-stone-900 dark:text-stone-100'
              : 'border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-900 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-600 dark:hover:text-stone-100'
          "
          @click="activeIndex = index"
          @keydown="handleTabKeydown"
        >
          <span
            class="font-mono text-xs transition-colors"
            :class="index === activeIndex ? 'text-orange-600 dark:text-orange-400' : 'text-stone-400 dark:text-stone-600'"
          >
            {{ formatNumber(index + 1) }}
          </span>
          {{ project.name }}
        </button>
      </div>

      <!-- Active project -->
      <div
        id="project-panel"
        role="tabpanel"
        :aria-labelledby="`project-tab-${activeProject.id}`"
        class="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_16px_48px_-16px_rgb(0_0_0/0.12)] sm:p-10 lg:flex lg:min-h-130 lg:items-center dark:border-stone-800 dark:bg-stone-900 dark:shadow-none"
      >

        <Transition
          mode="out-in"
          enter-active-class="transition-[opacity,filter] duration-300 ease-out motion-reduce:transition-none"
          enter-from-class="opacity-0 blur-sm"
          leave-active-class="transition-[opacity,filter] duration-200 ease-in motion-reduce:transition-none"
          leave-to-class="opacity-0 blur-sm"
        >
          <article :key="activeProject.id" class="relative grid w-full items-center gap-10 lg:grid-cols-[1fr_1.45fr]">
            <div>
              <p class="font-mono text-sm text-orange-600 dark:text-orange-400">
                {{ formatNumber(activeIndex + 1) }}
                <span class="text-stone-400 dark:text-stone-600">/ {{ formatNumber(projects.length) }}</span>
              </p>

              <h3 class="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">{{ activeProject.name }}</h3>

              <p class="mt-4 text-lg leading-relaxed text-pretty text-stone-600 dark:text-stone-400">
                {{ projectDescription(activeProject) }}
              </p>

              <ul class="mt-6 flex flex-wrap gap-2">
                <li
                  v-for="tech in activeProject.tech"
                  :key="tech"
                  class="flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm dark:border-stone-700 dark:bg-stone-800"
                >
                  <img v-if="getTechIcon(tech)" :src="getTechIcon(tech)" alt="" class="size-4 object-contain" />
                  {{ tech }}
                </li>
              </ul>

              <div class="mt-8 flex flex-wrap gap-3">
                <a
                  v-if="activeProject.demoUrl"
                  :href="activeProject.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700 active:scale-[0.98] dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white hover:scale-105"
                >
                  {{ t('portfolio.projects.visit') }}
                </a>
                <a
                  v-if="activeProject.repoUrl"
                  :href="activeProject.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium transition hover:border-stone-900 active:scale-[0.98] dark:border-stone-700 dark:hover:border-stone-300 hover:scale-105"
                >
                  <img src="/img/skills/github.svg" alt="" class="size-4 dark:invert" />
                  {{ t('common.code') }}
                </a>
              </div>
            </div>

            <!-- Screenshot inside a minimal browser frame -->
            <a
              v-if="activeProject.image"
              :href="activeProject.demoUrl || activeProject.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group block overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-xl shadow-stone-900/10 transition duration-300 hover:-translate-y-1 motion-reduce:transition-none dark:border-stone-700 dark:bg-stone-800 dark:shadow-black/40"
              :aria-label="t('common.open', { name: activeProject.name })"
            >
              <div class="flex items-center gap-3 border-b border-stone-200 px-4 py-2.5 dark:border-stone-700" aria-hidden="true">
                <div class="flex gap-1.5">
                  <span class="size-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                  <span class="size-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                  <span class="size-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                </div>
                <div
                  class="flex-1 truncate rounded-md bg-white px-3 py-1 text-center font-mono text-xs text-stone-500 dark:bg-stone-900 dark:text-stone-400"
                >
                  {{ activeHostname }}
                </div>
                <div class="hidden w-10.5 sm:block" />
              </div>
              <img :src="activeProject.image" :alt="t('common.screenshotOf', { name: activeProject.name })" class="h-auto w-full" />
            </a>
          </article>
        </Transition>
      </div>
    </div>
  </section>
</template>
