<script setup>
import { ref } from 'vue'
import { profile } from '@/data/profile'

const subject = ref('')
const message = ref('')

// No backend yet: opens the visitor's mail client with the message pre-filled.
function sendMessage() {
  const query = new URLSearchParams({ subject: subject.value, body: message.value })
  window.location.href = `mailto:${profile.email}?${query.toString().replaceAll('+', '%20')}`
}
</script>

<template>
  <form class="flex h-full flex-col bg-xp-face text-xs" @submit.prevent="sendMessage">
    <div class="flex shrink-0 items-center gap-2 border-b border-[#d6d3ce] px-2 py-1.5">
      <button type="submit" class="xp-button">
        <img src="/img/mail.png" alt="" class="size-4" />
        Enviar
      </button>
    </div>

    <div class="grid shrink-0 grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1.5 p-2">
      <label for="contact-to">Para:</label>
      <input id="contact-to" class="xp-input" :value="profile.email" readonly />

      <label for="contact-subject">Asunto:</label>
      <input id="contact-subject" v-model="subject" class="xp-input" required />
    </div>

    <label for="contact-message" class="sr-only">Mensaje</label>
    <textarea
      id="contact-message"
      v-model="message"
      class="xp-input mx-2 mb-2 min-h-24 flex-1 resize-none"
      placeholder="Escribe aquí tu mensaje..."
      required
    />
  </form>
</template>
