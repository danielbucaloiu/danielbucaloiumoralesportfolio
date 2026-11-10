<script setup>
import { ref } from 'vue'
import { projects } from '@/data/projects'
import { useWindowManager } from '@/composables/useWindowManager'
import DesktopIcon from '@/components/desktop/DesktopIcon.vue'
import ProjectDetailApp from './ProjectDetailApp.vue'

const windowManager = useWindowManager()
const selectedProjectId = ref(null)

function openProject(project) {
  windowManager.open({
    id: `project-${project.id}`,
    title: project.name,
    icon: project.icon || '/img/txt.png',
    component: ProjectDetailApp,
    props: { project },
    // Big enough for a 16:9 screenshot plus the info and buttons; open() shrinks it on small screens
    width: 820,
    height: 720,
  })
}
</script>

<template>
  <div class="flex h-full flex-col text-xs">
    <div class="flex shrink-0 items-center gap-2 border-b border-[#d6d3ce] bg-xp-face px-2 py-1">
      <span class="text-[#7f7f7f]">Dirección</span>
      <div class="xp-input flex min-w-0 flex-1 items-center gap-1">
        <img src="/img/folder.png" alt="" class="size-4" />
        <span class="truncate">C:\Portfolio\Proyectos</span>
      </div>
    </div>

    <div class="flex min-h-0 flex-1">
      <aside class="xp-explorer-sidebar hidden w-44 shrink-0 p-3 sm:block">
        <section class="overflow-hidden rounded-t">
          <h3 class="bg-linear-to-r from-white to-[#c6d3f7] px-2 py-1 font-bold text-[#215dc6]">Detalles</h3>
          <div class="space-y-1 bg-xp-panel p-2 text-[11px]">
            <p class="font-bold">Proyectos</p>
            <p>Carpeta de archivos</p>
            <p>{{ projects.length }} elementos</p>
          </div>
        </section>
      </aside>

      <ul
        class="flex min-w-0 flex-1 flex-wrap content-start gap-3 overflow-auto p-3"
        @pointerdown.self="selectedProjectId = null"
      >
        <li v-for="project in projects" :key="project.id">
          <DesktopIcon
            variant="explorer"
            :icon="project.icon || '/img/folder.png'"
            :icon-class="{ invert: project.invertIconOnLight }"
            :label="project.name"
            :selected="selectedProjectId === project.id"
            @select="selectedProjectId = project.id"
            @open="openProject(project)"
          />
        </li>
      </ul>
    </div>

    <footer class="shrink-0 border-t border-[#d6d3ce] bg-xp-face px-2 py-0.5 text-[11px]">
      {{ projects.length }} objetos
    </footer>
  </div>
</template>
