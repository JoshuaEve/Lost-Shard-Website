import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Lost-Shard-Website/",
  title: "Lost Shard",
  description: "Lost Shard Minecraft Server",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Wiki", link: "/introduction" },
      { text: "Rules", link: "/rules" },
      { text: "Discord", link: "https://discord.gg/7VeubtZ" },
      {
        text: "Server IP: minecraft.lostshard.com",
        link: "#server-ip",
        activeMatch: "^#server-ip$",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Rules", link: "/rules" },
          { text: "New Player Guide", link: "/getting-started" },
        ],
      },
      {
        text: "Commands",
        collapsed: true,
        items: [
          { text: "Overview", link: "/commands/" },
          { text: "Player Commands", link: "/commands/player-commands" },
          { text: "Admin Commands", link: "/commands/admin-commands" },
        ],
      },
      {
        text: "Skills",
        collapsed: true,
        items: [
          { text: "Overview", link: "/skills/" },
          {
            text: "Combat",
            items: [
              { text: "Blades", link: "/skills/blades" },
              { text: "Archery", link: "/skills/archery" },
              { text: "Brawling", link: "/skills/brawling" },
            ],
          },
          {
            text: "Gathering",
            items: [
              { text: "Mining", link: "/skills/mining" },
              { text: "Lumberjacking", link: "/skills/lumberjacking" },
              { text: "Fishing", link: "/skills/fishing" },
            ],
          },
          {
            text: "Crafting",
            items: [{ text: "Blacksmithy", link: "/skills/blacksmithy" }],
          },
          {
            text: "Magic",
            items: [{ text: "Magery", link: "/skills/magery" }],
          },
          {
            text: "Utility",
            items: [
              { text: "Survivalism", link: "/skills/survivalism" },
              { text: "Taming", link: "/skills/taming" },
            ],
          },
        ],
      },
      {
        text: "Magic",
        collapsed: true,
        items: [
          { text: "Overview", link: "/magic/" },
          { text: "Spell List", link: "/magic/spells" },
          { text: "Runebook", link: "/magic/runebook" },
        ],
      },
      {
        text: "Combat",
        collapsed: true,
        items: [
          { text: "Overview", link: "/combat/" },
          { text: "PvP & Murder System", link: "/combat/pvp" },
          { text: "Status Effects", link: "/combat/status-effects" },
        ],
      },
      {
        text: "Groups",
        collapsed: true,
        items: [
          { text: "Parties", link: "/groups/parties" },
          { text: "Clans", link: "/groups/clans" },
        ],
      },
      {
        text: "Economy",
        collapsed: true,
        items: [
          { text: "Overview", link: "/economy/" },
          { text: "Bank", link: "/economy/bank" },
        ],
      },
      {
        text: "Plots & Land",
        collapsed: true,
        items: [
          { text: "Overview", link: "/plots/" },
          { text: "Control Points", link: "/plots/control-points" },
        ],
      },
      {
        text: "Misc",
        items: [{ text: "Titles", link: "/titles" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
