import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";

const meta = {
  title: "Components/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4 flex justify-center min-h-[712px]">
        <div className="min-width-sm">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => <Overlay />,
  parameters: {
    docs: {
      description: {
        story:
          "Overlay component - a basic placeholder component for displaying overlay content.",
      },
    },
  },
};
