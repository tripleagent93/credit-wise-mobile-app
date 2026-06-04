import type { Meta, StoryObj } from "@storybook/react";
import { BadgeShowcase } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: BadgeShowcase,
  tags: ["autodocs"],
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
