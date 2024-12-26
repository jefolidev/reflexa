/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				monts: ['Montserrat', 'sans-serif'],
				poppins: 'Poppins',
			},
			flex: {
				2: '2 2 0%',
			},
			backgroundColor: {
				'salmon-500': '#FF714E',
				'royal-500': '#373882',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
}
