import type { Meta, StoryObj } from "@storybook/react";
import { BadgeShowcase } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: BadgeShowcase,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6">
        <div className="max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof BadgeShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};

export const Showcase: Story = {
  render: () => <BadgeShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Badge component with outlined and filled variants. Displays credit score ratings: Fair, Excellent, Poor, and Good.",
      },
    },
  },
};

export const CompactView: Story = {
  render: () => (
    <div className="bg-white p-4 rounded-lg">
      <BadgeShowcase />
    </div>
  ),
};
