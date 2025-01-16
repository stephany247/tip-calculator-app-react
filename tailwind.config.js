/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'vd-cyan': 'hsl(183, 100%, 15%)',
        'dg-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'lg-cyan': 'hsl(185, 41%, 84%)',
        'vlg-cyan': 'hsl(189, 41%, 97%)',
        'active-cyan': 'hsl(173, 61%, 77%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        space: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

