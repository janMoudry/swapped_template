import animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	purge: {
		enabled: true,
		content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	},
	theme: {
		extend: {
			backgroundColor: {
				primary: "var(--primary)",
				"primary-light": "var(--primary-light)",
				"primary-dark": "var(--primary-dark)",

				secondary: "var(--secondary)",
				"secondary-light": "var(--secondary-light)",
				"secondary-dark": "var(--secondary-dark)",
			},
			textColor: {
				primary: "var(--primary)",
				"primary-light": "var(--primary-light)",
				"primary-dark": "var(--primary-dark)",

				secondary: "var(--secondary)",
				"secondary-light": "var(--secondary-light)",
				"secondary-dark": "var(--secondary-dark)",
			},
			colors: {
				"gray-900": "#1C1D1F",
				"gray-800": "#2F3033",
				"gray-700": "#6D6E73",
				"gray-600": "#84858A",
				"gray-500": "#B3B4BA",
				"gray-400": "#D0D1D6",
				"gray-300": "#E4E5EB",
				"gray-200": "#F0F1F7",
				"gray-100": "#FAFAFC",

				primary: "var(--primary)",
				"primary-light": "var(--primary-light)",
				"primary-dark": "var(--primary-dark)",

				secondary: "var(--secondary)",
				"secondary-light": "var(--secondary-light)",
				"secondary-dark": "var(--secondary-dark)",
			},
			fontSize: {
				"heading-1": "36px",
				"heading-2": "28px",
				"heading-3": "22px",

				"body-1": "18px",
				"body-2": "16px",
				"body-3": "16px",
			},
			fontFamily: {
				sans: ["Montserrat"],
			},
			fontWeight: {
				normal: "500",
				bold: "700",
			},
			gridTemplateRows: {
				17: "repeat(17, minmax(0, 1fr))",
			},
		},
	},
	plugins: [animated],
};
