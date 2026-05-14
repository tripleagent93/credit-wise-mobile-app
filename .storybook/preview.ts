import type { Preview } from "@storybook/react";
import "../client/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    viewport: {
      defaultViewport: "iphone14",
    },

    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F8F9FA" },
        { name: "dark", value: "#0A192F" },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    layout: "centered",

    docs: {
      autodocs: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
