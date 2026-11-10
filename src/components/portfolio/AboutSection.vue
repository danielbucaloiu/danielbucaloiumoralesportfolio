<script setup>
import { profile } from '@/data/profile'
</script>

<template>
  <section id="sobre-mi" class="mx-auto max-w-7xl scroll-mt-20 px-6 lg:px-10 py-20">
    <div class="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
      <h2 v-reveal class="text-3xl font-semibold tracking-tight">Sobre mí</h2>

      <div class="space-y-5 text-lg leading-relaxed text-pretty text-stone-600 dark:text-stone-400">
        <p v-for="(paragraph, index) in profile.about" :key="index" v-reveal="index * 80">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
