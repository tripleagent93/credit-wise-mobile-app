import type { Meta, StoryObj } from "@storybook/react";
import { AlertShowcase } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: AlertShowcase,
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
} satisfies Meta<typeof AlertShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllAlerts: Story = {};

export const Interactive: Story = {
  render: () => <AlertShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive alert component with four types: Success, Info, Warning, and Error. Click the X button to dismiss alerts. Click 'Reset alerts' to restore them.",
      },
    },
  },
};

export const InCard: Story = {
  render: () => (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <AlertShowcase />
    </div>
  ),
};

export const Stacked: Story = {
  render: () => (
    <div className="space-y-3">
      <AlertShowcase />
    </div>
  ),
};
