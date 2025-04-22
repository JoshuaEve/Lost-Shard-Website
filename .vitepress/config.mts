import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lost Shard",
  description: "Lost Shard Minecraft Server",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/introduction' },
      { text: 'Rules', link: '/rules' },
      { text: 'Discord', link: 'https://discord.gg/7VeubtZ' },
      {
        text: 'Server IP: minecraft.lostshard.com',
        link: '#server-ip',
        activeMatch: '^#server-ip$'
      }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Rules', link: '/rules' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
