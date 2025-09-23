/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: { 
      extend: { 
        fontFamily: { 
          display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'], 
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] 
        } 
      } 
    },
    plugins: [],
  };
  