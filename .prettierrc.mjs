const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  printWidth: 280,
  useTabs: true,
  bracketSpacing: true,
  arrowParens: "always",
  overrides: [
    {
      files: "*.js",
      options: {
        parser: "flow"
      }
    }
  ]

}

module.exports = config;

