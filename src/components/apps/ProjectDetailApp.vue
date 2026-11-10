<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="flex h-full flex-col gap-3 overflow-auto bg-xp-face p-4 text-xs">
    <!-- Takes the remaining space; the image always fits entirely (object-contain) -->
    <div class="relative min-h-40 flex-1 border border-[#919b9c] bg-white">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Captura de ${project.name}`"
        class="absolute inset-0 size-full object-contain p-1"
      />
      <img v-else src="/img/folder.png" alt="" class="absolute inset-0 m-auto size-20 opacity-40" />
    </div>

    <h3 class="shrink-0 text-base font-bold text-[#215dc6]">{{ project.name }}</h3>
    <p class="shrink-0 leading-relaxed">{{ project.description }}</p>

    <fieldset v-if="project.tech?.length" class="shrink-0 border border-[#d0d0bf] px-3 pt-1 pb-3">
      <legend class="px-1 text-[#215dc6]">Tecnologías</legend>
      <ul class="flex flex-wrap gap-1.5">
        <li v-for="tech in project.tech" :key="tech" class="border border-xp-input-border bg-white px-2 py-0.5">
          {{ tech }}
        </li>
      </ul>
    </fieldset>

    <div v-if="project.repoUrl || project.demoUrl" class="flex shrink-0 justify-end gap-2">
      <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="xp-button">
        Código
      </a>
      <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer" class="xp-button">
        Ver demo
      </a>
    </div>
  </article>
</template>
