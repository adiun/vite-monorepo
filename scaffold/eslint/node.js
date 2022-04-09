module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["@aduin/scaffold/eslint"],
  ignorePatterns: [
    "dist/",
    "lib/",
    "node_modules/",
    ".eslintrc.js",
    "vite.config.ts",
    "tsup.config.ts",
    "jest.config.js",
    "jest-dev.config.js",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["functional", "unicorn", "@typescript-eslint"],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        case: "pascalCase",
        ignore: [
          ".*\\.d\\.ts",
          ".*\\.js",
          "\\.test\\.ts?",
          "setupTests\\.ts",
          ".*\\.graphql",
        ],
      },
    ],
  },
};
