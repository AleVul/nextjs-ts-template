module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/preset-typescript",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};
