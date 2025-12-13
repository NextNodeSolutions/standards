/**
 * Core Prettier configuration - no plugins
 * For TypeScript libraries and projects without Tailwind
 * @type {import("prettier").Config}
 */
export default {
	useTabs: true,
	tabWidth: 4,
	endOfLine: 'lf',
	printWidth: 80,
	jsxSingleQuote: false,
	trailingComma: 'all',
	semi: false,
	arrowParens: 'avoid',
	bracketSpacing: true,
	bracketSameLine: false,
	singleQuote: true,
	overrides: [
		{
			files: ['*.json', '*.jsonc'],
			options: {
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'none',
			},
		},
	],
}
