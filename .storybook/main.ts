import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../client/**/*.stories.@(ts|tsx|js|jsx|mjs)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
