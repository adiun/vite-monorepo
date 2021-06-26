const scaffold = require("./.eslintrc");

module.exports = {
  ...scaffold,
  extends: [
    ...scaffold.extends,
    "plugin:@microsoft/sdl/react", // Microsoft SDL React rules
    "plugin:react/recommended",
    "plugin:testing-library/react",
  ],
  ignorePatterns: [...scaffold.ignorePatterns, "creevey.config.js"],
  plugins: [...scaffold.plugins, "react", "react-hooks"],
  rules: {
    ...scaffold.rules,
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "^(useCallbackDelay|useCommands|useStateAsync)$" },
    ],
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    "react/self-closing-comp": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "react/jsx-wrap-multilines": "error",
    "react/jsx-uses-react": "off", //https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/react-in-jsx-scope": "off", //https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "testing-library/prefer-screen-queries": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
