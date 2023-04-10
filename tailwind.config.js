/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            gridColumn: {
                'span-big': '1 / span 5',
            },
            gridRow: {
                'span-big': '1 / span 2',
            },
        },
    },
    plugins: [],
};
