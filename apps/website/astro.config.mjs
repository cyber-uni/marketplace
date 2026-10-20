// @ts-check
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://cyber-uni.github.io',
	base: '/marketplace/',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			title: 'cyber-uni marketplace',
			description:
				"The plugin marketplace for cyber-uni's agentic plugins: Claude Code, Codex, GitHub Copilot CLI, and Cursor.",
			// The cyber-uni org mark (cyber-uni/.github brand/): the u with the AI spark inside
			// the shared cyber-* frame.
			//
			// The favicon self-themes: browser chrome follows the OS, so that one file
			// flips its own fill under `prefers-color-scheme` and needs no pair.
			//
			// The header logo cannot. Starlight switches on `data-theme`, which this site
			// defaults to dark independent of the OS, so a single self-theming file renders
			// black on the dark header whenever the visitor's OS is set to light. The header
			// ships as a pair and lets Starlight pick.
			favicon: '/img/logo.svg',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				alt: 'cyber-uni',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cyber-uni/marketplace',
				},
			],
			customCss: ['./src/styles/global.css'],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
					],
				},
				{ label: 'Marketplace', slug: 'marketplace' },
			],
		}),
	],
})
