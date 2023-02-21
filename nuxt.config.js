import fs from 'fs'
import path from 'path'
import { ADMIN_LOGIN_PATH, GET_USER_PATH } from './utils/api/urls'


const BASE_URL = 'https://test.iisiapteekki.fi/rest'
export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'dopla',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@assets/css/font.css', '@/assets/css/main.css'],

	routes: {
		'/*': { cors: true },
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		'@nuxt/postcss8',
	],

	device: {
		defaultUserAgent:
			'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
	],

	// target: 'static',

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		// proxy: true,
		baseURL: BASE_URL,
	},

	// server: {
	// 	https: {
	// 		key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
	// 		cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
	// 	},
	// },

	auth: {
		strategies: {
			local: {
				token: {
					property: '',
					global: true,
				},
				user: {
					property: '',
					autoFetch: true,
				},
				endpoints: {
					login: {
						url: ADMIN_LOGIN_PATH,
						method: 'post',
					},
					user: {
						url: GET_USER_PATH,
						method: 'get',
					},
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['defu'],
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
}
