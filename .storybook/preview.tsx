import type { Preview } from "@storybook/react";
// @ts-ignore: allow importing global CSS without type declarations
import "../client/global.css";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    viewport: {
      options: INITIAL_VIEWPORTS,
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
  // decorators: [
  //   (Story) => (
  //     <div className="p-4 flex justify-center">
  //       <div className="min-width-sm">
  //         <style>
  //           {`
  //           .docs-story {
  //             background-color: #F8F9FA !important;
  //           }
  //         `}
  //         </style>
  //         <Story />
  //       </div>
  //     </div>
  //   ),
  // ],
  // initialGlobals: {
  //   viewport: { value: "iphone14pro", isRotated: false },
  // },
};

export default preview;
