import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	// Vite Plugins
	plugins: [tsconfigPaths()],

	test: {
		// Environment Configuration
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/test/setup.ts'],

		// Mock Cleanup Configuration
		restoreMocks: true,
		clearMocks: true,
		unstubGlobals: true,
		mockReset: false,

		// Coverage Configuration
		coverage: {
			provider: 'v8',
			reporter: ['json', 'html', 'text'],
			reportsDirectory: './src/test/coverage',
			enabled: true,
			exclude: [
				'**/*.test.ts',
				'**/*.spec.ts',
				'**/node_modules/**',
				'**/dist/**',
				'**/.astro/**',
				'**/coverage/**',
				'**/tests/**',
				'**/config/**',
				'**/types/**',
			],
		},
	},
})
