module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write "**/*.{ts,tsx,js,jsx}"'
  ],
  '*.{json,md}': 'prettier --write "**/*.{md,json}"'
}
