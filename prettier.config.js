/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: true,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
};
