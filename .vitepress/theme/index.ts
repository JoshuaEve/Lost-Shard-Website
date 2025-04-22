// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ServerIpModal from './components/ServerIpModal.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add the modal to layout-bottom slot
      'layout-bottom': () => h(ServerIpModal)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register the modal component globally if needed
    app.component('ServerIpModal', ServerIpModal)
  }
} satisfies Theme