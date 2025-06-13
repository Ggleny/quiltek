/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  trailingComma: "es5",
  tailwindFunctions: ["clsx", "tw"],
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/tailwind.css",
  importOrder: ["^react", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tabWidth: 2
};

export default config;
