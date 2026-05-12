import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";

const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6 flex justify-center">
        <div className="w-full max-w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => <BottomSheet />,
  parameters: {
    docs: {
      description: {
        story:
          "Bottom sheet modal component with drag handle, header, content, and action button. Used for secondary actions and information display.",
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="bg-gray-900 rounded-lg p-4 min-h-96 flex items-end justify-center">
      <div className="w-full max-w-sm">
        <BottomSheet />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Bottom sheet displayed over a dark overlay, showing how it appears in a full-screen modal context.",
      },
    },
  },
};

export const Stacked: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <BottomSheet />
    </div>
  ),
};
