<script setup>
import { skillGroups } from '@/data/skills'
</script>

<template>
  <section id="skills" class="mx-auto max-w-7xl scroll-mt-20 px-6 lg:px-10 py-20">
    <h2 v-reveal class="text-3xl font-semibold tracking-tight">Skills</h2>

    <dl class="mt-10 divide-y divide-stone-200 dark:divide-stone-800">
      <div
        v-for="group in skillGroups"
        :key="group.category"
        v-reveal
        class="grid gap-4 py-6 first:pt-0 md:grid-cols-[1fr_3fr] md:gap-16"
      >
        <dt class="font-medium">{{ group.category }}</dt>
        <dd>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm transition-colors hover:border-stone-400 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600"
            >
              <img
                :src="skill.icon"
                alt=""
                loading="lazy"
                class="size-4 object-contain"
                :class="{ 'opacity-80 dark:invert': skill.mono }"
              />
              {{ skill.name }}
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </section>
</template>
