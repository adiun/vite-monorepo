module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // recommended rules from @typescript-eslint/eslint-plugin
    "plugin:import/recommended",
    "plugin:import/typescript",
    "eslint:recommended", // recommended ESLint rules
    "plugin:@microsoft/sdl/common", // Microsoft SDL rules
    "plugin:@microsoft/sdl/typescript", // Microsoft SDL TS rules
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. This should always be the last configuration in the extends array.
  ],
  ignorePatterns: [
    "dist/",
    "lib/",
    "node_modules/",
    ".eslintrc.js",
    "vite.config.ts",
    "tsup.config.ts",
    "jest.config.js",
    "jest-dev.config.js",
    "eslint/",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["functional", "unicorn", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "property",
        filter: "__typename",
        format: null,
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        filter: {
          regex: "^(display_name|logo_url|page_background)$",
          match: true,
        },
      },
      {
        // Excludes properties like Content-Type, etc
        selector: "property",
        format: null,
        filter: {
          regex: "[-]",
          match: true,
        },
      },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "enumMember", format: ["PascalCase"] },
    ],
    // slow performance
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-async-promise-executor": ["error"],
    "no-unused-vars": "off", // Typescript eslint rule covers this ^
    "no-undef": "off", //https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    "no-console": ["warn", { allow: ["error", "info", "warn"] }],
    "no-restricted-imports": [
      "error",
      {
        paths: [{ name: "lodash", message: "Use lodash/myFunc instead." }],
        patterns: ["@adiun/*/src/*"],
      },
    ],
    "functional/prefer-readonly-type": [
      "error",
      {
        allowLocalMutation: true,
        ignorePattern: "^mutable",
      },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          ["internal", "parent"],
          "sibling",
          "index",
          "object",
        ],
        "newlines-between": "always",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "pascalCase",
        ignore: [".*\\.d\\.ts", ".*\\.js", "setupTests\\.ts"],
      },
    ],
    "unicorn/no-array-reduce": "off",
    "unicorn/no-null": "off",
    "unicorn/no-reduce": "off",
    "unicorn/number-literal-case": "off",
    "unicorn/numeric-separators-style": [
      "error",
      { onlyIfContainsSeparator: true },
    ],
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prevent-abbreviations": "off",
    "@typescript-eslint/no-misused-promises": ["error"],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/promise-function-async": ["error"],
  },
};
