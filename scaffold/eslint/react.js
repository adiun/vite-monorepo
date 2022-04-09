module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  globals: {
    JSX: true,
    React: true,
  },
  extends: ["@adiun/scaffold/eslint"],
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
    "no-restricted-imports": [
      "error",
      {
        paths: [{ name: "lodash", message: "Use lodash/myFunc instead." }],
        patterns: ["@adiun/*/src/*"],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "pascalCase",
        ignore: [
          ".*\\.d\\.ts",
          ".*\\.js",
          "\\.stories\\.tsx",
          "\\.test\\.tsx",
          "\\.test\\.ts",
          "reportWebVitals\\.ts",
          "setupTests\\.ts",
          ".*\\.graphql",
          "vite.config.ts",
        ],
      },
    ],
  },
};
