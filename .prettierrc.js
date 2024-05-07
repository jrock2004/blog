module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  overrides: [
    {
      files: ["*.yml"],
      options: {
        tabWidth: 2,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
