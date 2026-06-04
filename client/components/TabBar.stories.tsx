import type { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "./TabBar";

const meta = {
  title: "Components/TabBar",
  component: TabBar,
  tags: ["autodocs"],
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: () => <TabBar />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive tab bar with 4 navigation tabs. Click to switch active tab.",
      },
    },
  },
};
