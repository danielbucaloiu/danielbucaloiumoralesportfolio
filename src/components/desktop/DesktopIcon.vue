<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  selected: { type: Boolean, default: false },
  // 'desktop' = white label over the wallpaper, 'explorer' = black label inside a window
  variant: { type: String, default: 'desktop' },
  // Extra classes for the image (e.g. 'invert' for white icons on light backgrounds)
  iconClass: { type: [String, Array, Object], default: '' },
})

const emit = defineEmits(['select', 'open'])

const isCoarsePointer = () => window.matchMedia('(pointer: coarse)').matches

// Like Windows: one click selects, double click opens. On touch screens one tap opens.
function handleClick(event) {
  emit('select')
  if (event.pointerType === 'touch' || isCoarsePointer()) emit('open')
}
</script>

<template>
  <button
    type="button"
    class="group flex cursor-pointer flex-col items-center gap-1 p-1 text-center focus:outline-none"
    :class="props.variant === 'desktop' ? 'w-24' : 'w-20'"
    :aria-label="`Abrir ${label}`"
    @click="handleClick"
    @dblclick="emit('open')"
    @keydown.enter.prevent="emit('open')"
  >
    <img
      :src="icon"
      alt=""
      draggable="false"
      class="object-contain transition"
      :class="[
        props.variant === 'desktop' ? 'size-16 drop-shadow-[1px_2px_2px_rgb(0_0_0/0.5)]' : 'size-12',
        selected && 'opacity-70 brightness-75',
        iconClass,
      ]"
    />
    <span
      class="line-clamp-2 px-0.5 leading-tight wrap-break-word group-focus-visible:outline-1 group-focus-visible:outline-dotted"
      :class="[
        props.variant === 'desktop' ? 'text-sm' : 'text-xs',
        selected
          ? 'bg-xp-select text-white'
          : props.variant === 'desktop'
            ? 'text-white [text-shadow:1px_1px_1px_#000]'
            : 'text-black',
        props.variant === 'desktop' ? 'group-focus-visible:outline-white' : 'group-focus-visible:outline-black',
      ]"
    >
      {{ label }}
    </span>
  </button>
</template>
