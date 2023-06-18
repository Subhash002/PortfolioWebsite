/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/src/assets/background.jpg')",
        "navbanner-bg": "url('/src/assets/navbar.jpg')",
      },
    },
  },
  plugins: [],
};
