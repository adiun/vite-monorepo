module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended", // recommended ESLint rules
    "plugin:@microsoft/sdl/common", // Microsoft SDL rules
    "plugin:@microsoft/sdl/typescript", // Microsoft SDL TS rules
    "plugin:@typescript-eslint/recommended", // recommended rules from @typescript-eslint/eslint-plugin
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. This should always be the last configuration in the extends array.
    "plugin:unicorn/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with Prettier.
  ],
  ignorePatterns: ["dist/", "lib/", "node_modules/", ".eslintrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "@microsoft/sdl",
    "functional",
    "unicorn",
    "simple-import-sort",
    "mui-unused-classes",
  ],
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
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
      },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "enumMember", format: ["PascalCase"] },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "import/no-named-as-default": "off",
    "import/default": "off",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@material-ui/core",
            message: "Use @material-ui/core/myFunc instead.",
          },
          {
            name: "@material-ui/icons",
            message: "Use @material-ui/icons/myFunc instead.",
          },
          { name: "lodash", message: "Use lodash/myFunc instead." },
        ],
        patterns: ["@truveta/*/src/*"],
      },
    ],
    "functional/prefer-readonly-type": [
      "error",
      {
        allowLocalMutation: true,
        ignorePattern: "^mutable",
      },
    ],
    "mui-unused-classes/unused-classes": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/filename-case": [
      "error",
      {
        case: "pascalCase",
        ignore: [
          ".*\\.d\\.ts",
          ".*\\.js",
          "\\.stories\\.tsx",
          "\\.test\\.tsx?",
          "reportWebVitals\\.ts",
          "setupTests\\.ts",
        ],
      },
    ],
    "unicorn/no-null": "off",
    "unicorn/no-reduce": "off",
    "unicorn/number-literal-case": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prevent-abbreviations": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
