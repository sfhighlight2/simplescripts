/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-navy': '#1B3A52',
                'primary-teal': '#1BA098',
                'brand-light': '#F7F9FB',
                'secondary-text': '#6B7280',
            },
            fontFamily: {
                'heading': ['Plus Jakarta Sans', 'sans-serif'],
                'brand-primary': ['Inter', 'sans-serif'],
                'brand-secondary': ['DM Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
