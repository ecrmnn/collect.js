module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: [
    'import',
  ],
  rules: {
    'no-console': 'error',
    'newline-before-return': 'error',
    'no-ternary': 'error',
  },
};
