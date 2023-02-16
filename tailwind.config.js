/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
		extend: {
			colors: {
				'neon-green': 'hsl(150, 100%, 66%)',
				'light-cyan': 'hsl(193, 38%, 86%)',
				'grayish-blue': 'hsl(217, 19%, 38%)',
				'dark-grayish-blue': 'hsl(217, 19%, 24%)',
				'dark-blue': 'hsl(218, 23%, 16%)'
			},
			fontFamily: {
				'sans': ['Manrope', 'sans-serif']
			}
		},
		screens: {
			'md': '560px'
		},
		keyframes: {
			'fade': {
				'from': { opacity: .3 },
				'to': { opacity: 1 }
			}
		}
    },
    plugins: [],
}
