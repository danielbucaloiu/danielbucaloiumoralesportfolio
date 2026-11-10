<script setup>
import { computed } from 'vue'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

const projectsWithRepo = computed(() => projects.filter((project) => project.repoUrl))
</script>

<template>
  <!-- Internet Explorer look -->
  <div class="flex h-full flex-col text-xs">
    <div class="flex shrink-0 items-center gap-2 border-b border-[#d6d3ce] bg-xp-face px-2 py-1">
      <span class="text-[#7f7f7f]">Dirección</span>
      <div class="xp-input flex min-w-0 flex-1 items-center gap-1">
        <img src="/img/github.png" alt="" class="size-4" />
        <span class="truncate">{{ profile.githubUrl }}</span>
      </div>
      <a :href="profile.githubUrl" target="_blank" rel="noopener noreferrer" class="xp-button min-w-0">Ir</a>
    </div>

    <div class="min-h-0 flex-1 overflow-auto p-6">
      <div class="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
        <img src="/img/github.png" alt="" class="size-20" />
        <h3 class="text-lg font-bold">{{ profile.githubUser }}</h3>
        <p class="text-[#555]">{{ profile.role }}</p>
        <a :href="profile.githubUrl" target="_blank" rel="noopener noreferrer" class="xp-button">
          Abrir perfil en GitHub
        </a>
      </div>

      <section v-if="projectsWithRepo.length" class="mx-auto mt-6 max-w-md">
        <h4 class="mb-2 border-b border-[#d6d3ce] pb-1 font-bold text-[#215dc6]">Repositorios destacados</h4>
        <ul class="space-y-1">
          <li v-for="project in projectsWithRepo" :key="project.id">
            <a :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="text-xp-link underline">
              {{ project.name }}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
