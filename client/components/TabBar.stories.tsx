import type { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "./TabBar";

const meta = {
  title: "Components/TabBar",
  component: TabBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4 flex justify-center">
        <div className="min-width-sm">
          <Story />
        </div>
      </div>
    ),
  ],
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
