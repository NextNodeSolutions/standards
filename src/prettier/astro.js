/**
 * Prettier configuration for NextNode Astro projects
 * Extends the base config with Astro-specific settings
 * @type {import("prettier").Config}
 */
import coreConfig from './core.js'

export default {
	...coreConfig,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		...(coreConfig.overrides || []),
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
