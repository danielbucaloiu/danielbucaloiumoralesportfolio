<script setup>
import { computed } from 'vue'

// Renders plain text turning some words into links or highlights, without v-html.
// links:      { 'text to find': 'https://url' }
// highlights: ['text to find', ...]
const props = defineProps({
  text: { type: String, required: true },
  links: { type: Object, default: () => ({}) },
  highlights: { type: Array, default: () => [] },
  linkClass: { type: [String, Array, Object], default: '' },
  highlightClass: { type: [String, Array, Object], default: '' },
})

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const segments = computed(() => {
  // Longest first, so "Desarrollador Full-Stack" wins over "Full-Stack"
  const words = [...Object.keys(props.links), ...props.highlights].sort((a, b) => b.length - a.length)
  if (!words.length) return [{ text: props.text }]

  const pattern = new RegExp(`(${words.map(escapeRegExp).join('|')})`, 'g')
  return props.text
    .split(pattern)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      href: props.links[part],
      isHighlight: props.highlights.includes(part),
    }))
})
</script>

<template>
  <template v-for="(segment, index) in segments" :key="index">
    <a v-if="segment.href" :href="segment.href" target="_blank" rel="noopener noreferrer" :class="linkClass">{{
      segment.text
    }}</a>
    <strong v-else-if="segment.isHighlight" :class="highlightClass">{{ segment.text }}</strong>
    <template v-else>{{ segment.text }}</template>
  </template>
</template>
