/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E3A8A',   // Navy blue
          accent: '#FACC15',    // Solar yellow
          neutral: '#6B7280',   // Cool gray
        },
      },
    },
    plugins: [],
  };
  
  