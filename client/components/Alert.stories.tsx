import type { Meta, StoryObj } from "@storybook/react";
import { AlertShowcase } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: AlertShowcase,
  tags: ["autodocs"],
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
