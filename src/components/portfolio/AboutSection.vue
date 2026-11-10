<script setup>
import { profile } from '@/data/profile'
import { useContent } from '@/composables/useContent'
import LinkifiedText from '@/components/LinkifiedText.vue'

const { t, aboutParagraphs, aboutHighlights } = useContent()
</script>

<template>
  <section id="sobre-mi" class="mx-auto max-w-7xl scroll-mt-20 px-6 lg:px-10 py-20">
    <div class="flex flex-col gap-8 md:flex-row md:gap-40">
      <h2 v-reveal class="shrink-0 text-3xl font-semibold tracking-tight whitespace-nowrap">{{ t('portfolio.about.title') }}</h2>

      <div class="space-y-5 text-lg leading-relaxed text-pretty text-stone-600 dark:text-stone-400">
        <p v-for="(paragraph, index) in aboutParagraphs" :key="index" v-reveal="index * 80">
          <LinkifiedText
            :text="paragraph"
            :links="profile.aboutLinks"
            :highlights="aboutHighlights"
            highlight-class="font-medium text-stone-900 dark:text-stone-100"
            link-class="font-medium text-orange-600 underline decoration-orange-600/30 underline-offset-4 transition hover:decoration-orange-600 dark:text-orange-400 dark:decoration-orange-400/30 dark:hover:decoration-orange-400"
          />
        </p>
      </div>
    </div>
  </section>
</template>
