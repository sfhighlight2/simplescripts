/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'heading': ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
