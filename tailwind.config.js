module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-work': 'hsl(15, 100%, 70%)',
        'clr-play': 'hsl(195, 74%, 62%)',
        'clr-study': 'hsl(348, 100%, 68%)',
        'clr-exercise': 'hsl(145, 58%, 55%)',
        'clr-social': 'hsl(264, 64%, 52%)',
        'clr-self-care': 'hsl(43, 84%, 65%)',
        'clr-person': 'hsl(246, 80%, 60%)',
        'clr-section': 'hsl(226, 43%, 10%)',
        'clr-card': 'hsl(235, 46%, 20%)',
        'clr-accent': 'hsl(236, 100%, 87%)',
        'clr-inactive': 'hsl(235, 45%, 61%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
