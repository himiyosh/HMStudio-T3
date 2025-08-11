module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/careercanvas/layouts/**/*.{html,js}",
    "./content/**/*.md"
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
};
