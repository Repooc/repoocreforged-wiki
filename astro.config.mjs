// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      components: {
        Pagination: "./src/components/Pagination.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      title: "Repooc Reforged",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
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
              link: "/introduction/",
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
