const scaffold = require("@adiun/vm-scaffold/.eslintrc.ui");

// https://github.com/dotansimha/graphql-eslint/tree/master/docs
const graphqlRules = {
  "@typescript-eslint/naming-convention": "off",
  "unicorn/filename-case": "off",
  "@graphql-eslint/avoid-duplicate-fields": "error",
  "@graphql-eslint/fields-on-correct-type": "error",
  "@graphql-eslint/known-argument-names": "error",
  "@graphql-eslint/known-type-names": "error",
  "@graphql-eslint/no-undefined-variables": "error",
  "@graphql-eslint/no-unreachable-types": "error",
  "@graphql-eslint/no-unused-variables": "error",
  "@graphql-eslint/unique-variable-names": "error",
  "@graphql-eslint/provided-required-arguments": "error",
  "@graphql-eslint/value-literals-of-correct-type": "error",
  "@graphql-eslint/variables-are-input-types": "error",
  "@graphql-eslint/variables-in-allowed-position": "error",
};

module.exports = {
  ...scaffold,
  overrides: [
    {
      files: ["*.tsx", "*.ts", "*.jsx", "*.js"],
      processor: "@graphql-eslint/graphql",
      rules: graphqlRules,
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        // NOTE: Prettier is disabled within GraphQL snippets.
        "prettier/prettier": "off",
        ...graphqlRules,
      },
    },
  ],
  parserOptions: {
    ...scaffold.parserOptions,
    project: "./tsconfig.json",
  },
};
