/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.js",
	  ],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			grotta: ['Grotta', 'sans-serif'],
		},
		colors: {
			mainBold: '#00484A',
			mainStrong: '#346C6E',
			mainMedium: '#628D8E',
			mainLight: '#93B0B1',

			pinkBold: '#FFCFE6',
			pinkStrong: '#FDD7E9',
			pinkMedium: '#FBDEEC',
			pinkLight: '#F9E6EF',

			greenBold: '#00D442',
			greenStrong: '#31DB66',
			greenMedium: '#62E18A',
			greenLight: '#93E8AD',
			greenLightest: '#C4EED1',
			greenHover: '#EBF4EE',

			white: '#fff',
			grayishWhite: '#F2F2F2',

			yellowWarning: "#FFDA57",

			redBold: '#FF5757',
			redStrong: '#FD7777',
			redMedium: '#FB9696',
			redLight: '#F9B6B6',
			redLightest: '#F5E0E0',

			turquoiseBold: '#00827C',
			turquoiseStrong: '#319994',
			turquoiseMedium: '#62B0AC',
			turquoiseLight: '#93C7C5',

			oceanBold: '#98D3D1',
			oceanStrong: '#ABDAD8',
			oceanMedium: '#ABDAD8',
			oceanLight: '#D0E7E7',

			blackBold: '#000000',
			blackStrong: '#313131',
			blackMedium: '#626262',
			blackLight: '#939393',
			blackLightest: '#C4C4C4',
			blackTransparency: 'rgba(0, 0, 0, 0.2)',

			brownNormal: '#C4A593',
		},
		extend: {},
	},
	plugins: [],
}
