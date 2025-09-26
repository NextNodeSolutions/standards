import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	// Vite Plugins
	plugins: [tsconfigPaths()],

	test: {
		// Environment Configuration
		globals: true,
		environment: 'node',
		include: ['src/**/*.{test,spec}.ts'],
		env: {
			NODE_ENV: 'test',
		},

		// Coverage Configuration
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './src/__tests__/coverage',
			exclude: [
				'node_modules/**',
				'dist/**',
				'**/*.d.ts',
				'**/*.test.ts',
				'**/*.spec.ts',
				'**/*.config.ts',
				'**/types.ts',
			],
		},
	},
})
