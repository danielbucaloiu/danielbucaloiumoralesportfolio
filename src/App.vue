<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { applyPreferredLocale } from '@/i18n'
import { syncThemeFromDocument } from '@/composables/useTheme'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { OG_IMAGE, SITE_URL } from '@/data/site'

const { t, locale } = useI18n()
const route = useRoute()

// Runs after hydration: apply the visitor's theme and language without breaking the pre-rendered HTML
onMounted(() => {
  syncThemeFromDocument()
  applyPreferredLocale()
})

const canonicalUrl = computed(() => `${SITE_URL}${route.path === '/' ? '/' : route.path}`)

// Structured data (https://schema.org): tells Google who this page is about and links the
// portfolio with the GitHub and LinkedIn profiles of the same person.
const structuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/`,
  inLanguage: locale.value,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: profile.name,
    givenName: 'Daniel',
    familyName: 'Bucaloiu Morales',
    alternateName: 'Daniel Bucaloiu',
    jobTitle: t('profile.role'),
    description: t('meta.description'),
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/img/profile.jpg`,
    email: `mailto:${profile.email}`,
    sameAs: [profile.githubUrl, profile.linkedinUrl].filter(Boolean),
    knowsAbout: ['Vue 3', 'JavaScript', 'TypeScript', 'Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'Docker'],
  },
  hasPart: projects
    .filter((project) => project.demoUrl)
    .map((project) => ({
      '@type': 'CreativeWork',
      name: project.name,
      url: project.demoUrl,
      author: { '@id': `${SITE_URL}/#person` },
    })),
}))

useHead({
  htmlAttrs: { lang: locale },
  title: () => t('meta.title'),
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    { name: 'description', content: () => t('meta.description') },
    { name: 'author', content: profile.name },

    // Open Graph (LinkedIn, WhatsApp, Facebook...)
    { property: 'og:type', content: 'profile' },
    { property: 'og:site_name', content: profile.name },
    { property: 'og:title', content: () => t('meta.title') },
    { property: 'og:description', content: () => t('meta.description') },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: () => t('meta.title') },
    { property: 'og:locale', content: () => (locale.value === 'es' ? 'es_ES' : 'en_US') },
    { property: 'profile:first_name', content: 'Daniel' },
    { property: 'profile:last_name', content: 'Bucaloiu Morales' },

    // Twitter / X
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t('meta.title') },
    { name: 'twitter:description', content: () => t('meta.description') },
    { name: 'twitter:image', content: OG_IMAGE },
  ],
  script: [{ key: 'structured-data', type: 'application/ld+json', innerHTML: () => JSON.stringify(structuredData.value) }],
})
</script>

<template>
  <RouterView />
</template>
