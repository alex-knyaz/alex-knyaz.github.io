import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import type { ConfigEnv, UserConfig } from 'vite';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => ({
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [
				tailwindcss({
					content: ['./src/**/*.{html,js,svelte,ts,md}'],
					theme: {extend: {}},
					plugins: [require('@tailwindcss/typography')],
					darkMode: 'selector',
				}) as any,
				autoprefixer as any,
			],
		},
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
	build: {
		rollupOptions: { external: ['bun'] },
		target: 'esnext',
		minify: mode === 'production' ? 'terser' : false,
		sourcemap: mode !== 'production'
	}
}));
