import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import svgToTinyDataUri from 'mini-svg-data-uri';
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
	theme: {
		colors: {
			'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
			'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
			'bg-primary': 'rgb(var(--bg-primary) / <alpha-value>)',
			'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
			'accent-primary': 'rgb(var(--accent-primary) / <alpha-value>)',
			'accent-secondary': 'rgb(var(--accent-secondary) / <alpha-value>)',
			'brand-primary': 'rgb(var(--brand-primary) / <alpha-value>)',
			'brand-secondary': 'rgb(var(--brand-secondary) / <alpha-value>)',
			'success-primary': 'rgb(var(--success-primary) / <alpha-value>)',
			'success-secondary': 'rgb(var(--success-secondary) / <alpha-value>)',
			'error-primary': 'rgb(var(--error-primary) / <alpha-value>)',
			'error-secondary': 'rgb(var(--error-secondary) / <alpha-value>)',
			...colors,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			backgroundColor: {
				primary: 'rgb(var(--bg-primary) / <alpha-value>)',
				secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
			},
			textColor: {
				primary: 'rgb(var(--text-primary) / <alpha-value>)',
				secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
			},
			animation: {
				'spin-0.5': 'spin 0.5s linear',
				'spin-1': 'spin 1s linear',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToTinyDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
						)}")`,
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToTinyDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
						)}")`,
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToTinyDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
			);
		},
	],
};
