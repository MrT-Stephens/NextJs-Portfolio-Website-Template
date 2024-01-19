/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary": {
                    "light": "#023047",
                    "dark": "#023047",
                },
                "secondary-one": {
                    "light": "#219ebc",
                    "dark": "#219ebc",
                },
                "secondary-two": {
                    "light": "#8ecae6",
                    "dark": "#8ecae6",
                },
                "secondary-three": {
                    "light": "#023b58",
                    "dark": "#023b58",
                },
                "primary-text": {
                    "light": "#ffffff",
                    "dark": "#ffffff",
                },
            },
            screens: {
                "3xl": "2000px",
                "4xl": "3000px",
                "5xl": "4200px",
            },
            scale: {
                200: "2.00",
                300: "3.00",
                400: "4.00",
            },
        },
    },
    plugins: [],
};
