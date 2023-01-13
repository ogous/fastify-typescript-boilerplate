module.exports = {
  '*.{js,ts}': ['eslint --fix', 'prettier --write "**/*.{ts,js}"'],
  '*.{json,md}': 'prettier --write "**/*.{md,json}"'
}
