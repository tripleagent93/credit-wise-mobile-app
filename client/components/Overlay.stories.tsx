import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";

const meta = {
  title: "Components/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6">
        <div className="max-w-sm">
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
        story: "Overlay component - a basic placeholder component for displaying overlay content.",
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full">
      <Overlay />
    </div>
  ),
};

export const InGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Overlay />
      <Overlay />
      <Overlay />
      <Overlay />
    </div>
  ),
};
