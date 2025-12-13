/**
 * Base Prettier configuration for NextNode web projects
 * Includes Tailwind CSS plugin for class sorting
 * @type {import("prettier").Config}
 */
import coreConfig from './core.js'

export default {
	...coreConfig,
	plugins: ['prettier-plugin-tailwindcss'],
}
