<script setup>
import AboutSection from '@/components/portfolio/AboutSection.vue'
import ContactSection from '@/components/portfolio/ContactSection.vue'
import HeroSection from '@/components/portfolio/HeroSection.vue'
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue'
import SiteFooter from '@/components/portfolio/SiteFooter.vue'
import SiteHeader from '@/components/portfolio/SiteHeader.vue'
import SkillsSection from '@/components/portfolio/SkillsSection.vue'
</script>

<template>
  <div
    class="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased transition-colors duration-300 selection:bg-orange-200 selection:text-stone-900 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-orange-400/30 dark:selection:text-stone-50"
  >
    <SiteHeader />
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
