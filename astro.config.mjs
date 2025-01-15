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
            editLink: {
                baseUrl:
                    "https://github.com/repooc/repoocreforged-wiki/edit/preview/",
            },
            lastUpdated: true,
            logo: { src: "/src/assets/HighResLogo.webp" },
            customCss: [
                "./src/styles/custom.css",
                "./src/styles/background.css",
                "./src/fonts/font-face.css",
            ],
            social: {
                discord: "https://repoocreforged.dev/discord",
                github: "https://github.com/repooc",
                patreon: "https://patreon.com/repoocreforged",
            },
            sidebar: [
                {
                    label: "Getting Started",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "Introduction",
                            slug: "introduction",
                        },
                    ],
                },
                {
                    label: "ElvUI Plugins",
                    items: [
                        {
                            label: "ActionBar Buddy",
                            slug: "addons/actionbarbuddy",
                        },
                        {
                            label: "ActionBar Masks",
                            slug: "addons/actionbarmasks",
                        },
                        {
                            label: "Dynamic Status Icons",
                            slug: "addons/dynamicstatusicons",
                        },
                        { label: "Fun Stuff", slug: "addons/funstuff" },
                        {
                            label: "Keybind Display",
                            slug: "addons/keybinddisplay",
                        },
                        {
                            label: "Ratio Minimap Auras",
                            slug: "addons/ratiominimapauras",
                        },
                        {
                            label: "Scrap Support",
                            slug: "addons/scrapsupport",
                        },
                        {
                            label: "Split ActionBars",
                            slug: "addons/splitactionbars",
                        },
                        {
                            label: "Tooltip Tweaks",
                            slug: "addons/tooltiptweaks",
                        },
                    ],
                },
            ],
        }),
        mdx(),
    ],
});
