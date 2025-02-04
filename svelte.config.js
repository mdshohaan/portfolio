import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'), // Use absolute path
			$lib: path.resolve('./src/lib') // Ensure $lib works properly
		}
	}
};

export default config;