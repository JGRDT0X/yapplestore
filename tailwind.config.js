/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},

      fontFamily: {
        'reg': ['TNR-reg', 'serif'],
        'bol': ['TNR-bold', 'serif'],
        'bla': ['TNR-black', 'serif'],
        'greg': ['G-reg', 'serif'],
      },
        fontWeight: {
          medium: 500,
          semibold: 600,
          bold: 700,
        }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}