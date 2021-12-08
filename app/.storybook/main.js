module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
      // customize the Vite config here
      config.resolve.alias.foo = 'bar';

      // return the customized config
      return config;
  },
  // ... other options here
};