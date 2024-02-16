/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'neutral': '#27272A',
				'primary': '#2B7567',
				'primary-dart': '#163b34',
				'secondary': '#EB7500',
			},
			backgroundImage: {
				'header': 'url("/images/header.webp")',
				'footer': 'url("/images/footer.webp")',
			},
		},
	},
	plugins: [],
};
