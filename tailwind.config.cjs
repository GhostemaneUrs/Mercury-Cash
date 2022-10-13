module.exports = {
  content: ['index.html', 'src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'gray-mercury-100': '#DFDFDF',
        'purple-mercury-100': '#683AE4',
        'purple-disabled': 'rgba(110, 55, 238, 0.5)',
      },
      boxShadow: {
        mercury: '1px 1px 4px rgba(89,89,89,0.25)',
      },
    },
  },
  plugins: [],
}
