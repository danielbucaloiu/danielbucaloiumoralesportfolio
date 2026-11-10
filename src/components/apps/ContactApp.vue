<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()

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
        {{ t('desktop.contact.send') }}
      </button>
    </div>

    <div class="grid shrink-0 grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1.5 p-2">
      <label for="contact-to">{{ t('desktop.contact.to') }}</label>
      <input id="contact-to" class="xp-input" :value="profile.email" readonly />

      <label for="contact-subject">{{ t('desktop.contact.subject') }}</label>
      <input id="contact-subject" v-model="subject" class="xp-input" required />
    </div>

    <label for="contact-message" class="sr-only">{{ t('desktop.contact.message') }}</label>
    <textarea
      id="contact-message"
      v-model="message"
      class="xp-input mx-2 mb-2 min-h-24 flex-1 resize-none"
      :placeholder="t('desktop.contact.placeholder')"
      required
    />
  </form>
</template>
