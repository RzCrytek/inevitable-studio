import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	vite: {
		build: {
			cssMinify: 'lightningcss',
		},
	},
	integrations: [react()],
});
