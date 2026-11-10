<script setup>
const model = defineModel()

</script>
<template>
    <div class="hover:bg-white/50 hover:rounded-xl px-2 py-2 cursor-pointer">
        <slot></slot>
    </div>
</template>