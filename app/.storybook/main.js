let coreui = "http://localhost:6006";
if (process.env.NODE_ENV === "production") {
  coreui = "../storybook-coreui";
}

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
    };
  },
  refs: {
    react: {
      title: "Core UI",
      url: coreui,
    },
  },
};
