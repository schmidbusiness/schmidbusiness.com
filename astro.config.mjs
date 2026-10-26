// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://schmidbusiness.com',
	vite: {
		ssr: {
			external: ['svgo']
		}
	}
});
