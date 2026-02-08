/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#d6bcfa', // Purple 300
                    DEFAULT: '#805ad5', // Purple 600
                    dark: '#553c9a', // Purple 800
                }
            }
        },
    },
    plugins: [],
}
