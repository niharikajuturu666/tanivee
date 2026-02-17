/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                netflix: {
                    red: '#E50914',
                    black: '#141414',
                    dark: '#181818',
                    gray: '#2F2F2F',
                    light: '#e5e5e5',
                }
            },
            fontFamily: {
                sans: ['"Netflix Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-to-b': 'linear-gradient(to bottom, noreferrer, transparent)',
                'gradient-to-t': 'linear-gradient(to top, noreferrer, transparent)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'fade-in-slow': 'fadeIn 1.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
                'scale-up': 'scaleUp 0.3s ease-in-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleUp: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.05)' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                }
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
