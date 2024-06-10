const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

module.exports = {
  plugins: [prettierPluginTailwindcss],
  tailwindConfig: './tailwind.config.js',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'es5'
};