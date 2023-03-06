/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'raleway': ['Raleway'],
			},
			colors: {
				"green": "#DFEDE7",
				"blu": "#BDE5FE",
				"purp": "#D6C6F4",
				"tan": "#FFEDD7",
			}
		},
	},
	plugins: [],
}
