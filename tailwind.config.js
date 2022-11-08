/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lato: ['lato', 'sans-serif'],
                cascadiaMono: ['cascadiaMono, sans-serif'],
                cascadia: ['cascadia', 'sans-serif'],
            },
            colors: {
                lightBlack: '#141313',
                subHeading: '#646363',
                offWhite: '#e4e5e4',
                darkGreen: '#373c35',
            },
            scale: {
                102: '1.025',
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '15%': { transform: 'rotate(14.0deg)' },
                    '30%': { transform: 'rotate(-8.0deg)' },
                    '40%': { transform: 'rotate(14.0deg)' },
                    '50%': { transform: 'rotate(-4.0deg)' },
                    '60%': { transform: 'rotate(10.0deg)' },
                    '70%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
            animation: {
                wave: 'wave 1.5s infinite',
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ['dark'],
        },
    },
    plugins: [],
};
