<script setup>
import { skillGroups } from '@/data/skills'
import { useContent } from '@/composables/useContent'

const { t, skillName } = useContent()
</script>

<template>
  <!-- Control Panel look -->
  <div class="min-h-full space-y-5 p-4 text-xs">
    <section v-for="group in skillGroups" :key="group.id">
      <h3
        class="mb-2 border-b-2 border-transparent pb-0.5 text-sm font-bold text-[#215dc6] [border-image:linear-gradient(to_right,#215dc6,transparent)_1]"
      >
        {{ t(`skills.categories.${group.id}`) }}
      </h3>
      <ul class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
        <li
          v-for="skill in group.skills"
          :key="skill.key ?? skill.name"
          class="flex items-center gap-2 border border-[#d0d0bf] bg-[#f6f6f0] px-2 py-1.5"
        >
          <img :src="skill.icon" alt="" draggable="false" class="size-6 shrink-0 object-contain" />
          {{ skillName(skill) }}
        </li>
      </ul>
    </section>
  </div>
</template>
