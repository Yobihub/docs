import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: 'SG-News Docs',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/sgnews',
			},
			editLink: {
				baseUrl: 'https://github.com/sgnews/docs/tree/master/',
			},
			sidebar: [
				{ label: 'Overview', link: '/overview' },
				{
					label: 'Account',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Registrierung', link: '/account/registration' },
						{ label: 'E-Mail', link: '/account/mail' },
						{ label: 'Passwort', link: '/account/password' },
					],
				},
				/* {
					label: 'Dashboard',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/dashboard/overview' },
					],
				},*/
			],
			// disable404Route: true,
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});