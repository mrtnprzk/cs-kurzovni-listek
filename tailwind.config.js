/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightBlue: "#D6E9F4",
                darkBlue: "#00497B",
                lightGrey: "#F1F5F8",
                darkGrey: "#969696",
            },
        },
    },
    plugins: [],
};
