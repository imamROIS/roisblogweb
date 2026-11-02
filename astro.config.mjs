// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		
		starlight({
			title: 'ROIS',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				
				
				{
					label: 'Learnng Path',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Learning Path', slug: 'learning-path/learning-path' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Network',
					items: [{ autogenerate: { directory: 'network' } }],
				},
				{
					label: '1. Fondasi IT',
					items: [{ autogenerate: { directory: '1-konsep-dasar-komputer' } }],
				},
				{
					label: 'Sistem Operasi',
					items: [{ autogenerate: { directory: 'operating-systems/' } }],
				},
				{ 
					label: 'Tentang Saya', 
					link: '/tentang/about' 
				},
			],
		}),
	],
});
