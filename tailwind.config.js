/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // ✅ Ensure it matches your file structure
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'background-dark': '#0A1B2A',
          'foreground-light': '#8CAFD1',
          'border-line': '#668AAB',
          'highlight': '#A8B8C9',
        },
        fontFamily: {
          'retro': ['"VT323"', 'monospace'], 
        },
      },
    },
    plugins: [],
  };
  