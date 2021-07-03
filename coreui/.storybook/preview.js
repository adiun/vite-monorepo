import * as jest from "jest-mock";
window.jest = jest;

// Hack for jest-mock
window.global = window;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
