<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

// Declare the window extension
declare global {
  interface Window {
    __showServerIpModal?: () => void
  }
}

const route = useRoute()
const showModal = ref(false)
const copyButtonText = ref('Copy to Clipboard')

// Make this available to window for nav items
const showServerIpModal = () => {
  showModal.value = true
}
provide('showServerIpModal', showServerIpModal)

// Set on window after component is mounted
onMounted(() => {
  window.__showServerIpModal = showServerIpModal
  
  // Check if URL has #server-ip and show modal
  if (window.location.hash === '#server-ip') {
    showServerIpModal()
  }
  
  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#server-ip') {
      showServerIpModal()
    }
  })
  
  // Listen for clicks on elements with href="#server-ip"
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href="#server-ip"]')
    if (link) {
      e.preventDefault()
      showServerIpModal()
    }
  })
})

// Watch route changes
watch(() => route.path + window.location.hash, (newPath) => {
  if (newPath.endsWith('#server-ip')) {
    showServerIpModal()
  }
})

const copyIp = () => {
  const ip = 'minecraft.lostshard.com'
  navigator.clipboard.writeText(ip).then(() => {
    copyButtonText.value = 'Copied!'
    setTimeout(() => {
      if (showModal.value) {
        copyButtonText.value = 'Copy to Clipboard'
      }
    }, 2000)
  }).catch(err => {
    console.error('Copy failed:', err)
    // Fallback method
    const textarea = document.createElement('textarea')
    textarea.value = ip
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copyButtonText.value = 'Copied!'
    setTimeout(() => {
      if (showModal.value) {
        copyButtonText.value = 'Copy to Clipboard'
      }
    }, 2000)
  })
}

const closeModal = () => {
  showModal.value = false
  copyButtonText.value = 'Copy to Clipboard'
  
  // Remove the hash if it's #server-ip
  if (window.location.hash === '#server-ip') {
    history.pushState('', document.title, window.location.pathname + window.location.search)
  }
}
</script>

<template>
  <div v-if="showModal" class="server-ip-modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Join Our Server</h2>
      <p>Connect using this IP address:</p>
      <p class="ip-display">minecraft.lostshard.com</p>
      <button @click="copyIp" class="copy-button">{{ copyButtonText }}</button>
    </div>
  </div>
</template>

<style scoped>
/* Your existing styles remain unchanged */
.server-ip-modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: var(--vp-c-bg);
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  width: 90%;
  max-width: 500px;
  border-radius: 8px;
  position: relative;
  text-align: center;
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.close {
  color: var(--vp-c-text-1);
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: var(--vp-c-text-2);
}

.copy-button {
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;
}

.copy-button:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

.ip-display {
  font-family: monospace;
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: var(--vp-c-mute);
  border-radius: 4px;
  display: inline-block;
  margin: 1rem 0;
}
</style>