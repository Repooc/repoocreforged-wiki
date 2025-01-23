// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/addons/actionbarbuddy": "/elvui-plugins/actionbarbuddy",
    "/addons/actionbarmasks": "/elvui-plugins/actionbarmasks",
    "/addons/dynamicstatusicons": "/elvui-plugins/dynamicstatusicons",
    "/addons/funstuff": "/elvui-plugins/funstuff",
    "/addons/keybinddisplay": "/elvui-plugins/keybinddisplay",
    "/addons/ratiominimapauras": "/elvui-plugins/ratiominimapauras",
    "/addons/scrapsupport": "/elvui-plugins/scrapsupport",
    "/addons/splitactionbars": "/elvui-plugins/splitactionbars",
    "/addons/tooltiptweaks": "/elvui-plugins/tooltiptweaks",
  },
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      components: {
        Pagination: "./src/components/Pagination.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      title: "Repooc Reforged",
      editLink: {
        baseUrl: "https://github.com/repooc/repoocreforged-wiki/edit/preview/",
      },
      lastUpdated: true,
      logo: { src: "/src/assets/HighResLogo.webp" },
      customCss: ["./src/styles/custom.css", "./src/fonts/font-face.css"],
      social: {
        discord: "https://repoocreforged.dev/discord",
        github: "https://github.com/repooc",
        patreon: "https://patreon.com/repoocreforged",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              slug: "introduction",
            },
          ],
        },
        {
          label: "ElvUI Plugins",
          autogenerate: { directory: "elvui-plugins" },
        },
      ],
    }),
    mdx(),
  ],
});
