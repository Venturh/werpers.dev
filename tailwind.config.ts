import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

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
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
