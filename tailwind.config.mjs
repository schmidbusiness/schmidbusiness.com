/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'on-error-container': '#93000a',
				'on-error': '#ffffff',
				'tertiary-fixed': '#f9e37a',
				'primary-container': '#3366cc',
				'tertiary-fixed-dim': '#dcc661',
				'primary': '#094cb2',
				'outline': '#737784',
				'tertiary-container': '#bfab49',
				'on-tertiary-fixed-variant': '#524600',
				'on-primary-fixed-variant': '#00419d',
				'surface-bright': '#faf9fa',
				'inverse-on-surface': '#f2f0f1',
				'inverse-surface': '#303031',
				'surface-container-high': '#e9e8e9',
				'surface-container-lowest': '#ffffff',
				'error': '#ba1a1a',
				'surface-dim': '#dbdadb',
				'on-primary-container': '#e7ebff',
				'surface-container': '#efedee',
				'primary-fixed': '#d9e2ff',
				'secondary-fixed-dim': '#c2c7cc',
				'error-container': '#ffdad6',
				'surface-container-low': '#f5f3f4',
				'on-tertiary-container': '#4a3f00',
				'on-primary-fixed': '#001946',
				'on-secondary-fixed-variant': '#42474b',
				'on-secondary-container': '#606569',
				'surface-tint': '#2259bf',
				'on-secondary': '#ffffff',
				'on-tertiary-fixed': '#211b00',
				'background': '#faf9fa',
				'secondary-fixed': '#dfe3e8',
				'surface-container-highest': '#e3e2e3',
				'surface': '#faf9fa',
				'primary-fixed-dim': '#b1c5ff',
				'on-background': '#1b1c1d',
				'outline-variant': '#c3c6d5',
				'on-tertiary': '#ffffff',
				'on-surface-variant': '#434653',
				'inverse-primary': '#b1c5ff',
				'tertiary': '#6d5e00',
				'surface-variant': '#e3e2e3',
				'secondary-container': '#dfe3e8',
				'on-surface': '#1b1c1d',
				'secondary': '#5a5f63',
				'on-primary': '#ffffff',
				'on-secondary-fixed': '#171c20',
				'charcoal': '#303031'
			},
			borderRadius: {
				DEFAULT: '0.125rem',
				lg: '0.25rem',
				xl: '0.5rem',
				full: '0.75rem'
			},
			spacing: {
				'section-gap': '120px',
				'unit': '8px',
				'content-gap': '64px',
				'gutter': '24px',
				'margin-desktop': 'auto',
				'max-width': '1280px',
				'margin-mobile': '20px'
			},
			maxWidth: {
				'max-width': '1280px'
			},
			fontFamily: {
				headline: ['Noto Serif'],
				display: ['Noto Serif'],
				body: ['Inter'],
				label: ['Public Sans'],
				'headline-lg': ['Noto Serif'],
				'label-lg': ['Public Sans'],
				'body-lg': ['Inter'],
				'display-lg': ['Noto Serif'],
				'label-sm': ['Public Sans'],
				'headline-md': ['Noto Serif'],
				'headline-sm': ['Noto Serif'],
				'body-md': ['Inter'],
				'headline-lg-mobile': ['Noto Serif']
			},
			fontSize: {
				'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '500' }],
				'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
				'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
				'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '600' }],
				'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
				'headline-md': ['28px', { lineHeight: '36px', fontWeight: '500' }],
				'headline-sm': ['22px', { lineHeight: '28px', fontWeight: '500' }],
				'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
				'headline-lg-mobile': ['32px', { lineHeight: '40px', fontWeight: '500' }]
			}
		}
	}
}
