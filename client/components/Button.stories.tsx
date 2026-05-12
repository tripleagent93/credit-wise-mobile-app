import type { Meta, StoryObj } from "@storybook/react";
import { ButtonShowcase } from "./Button";

const meta = {
  title: "Components/Button",
  component: ButtonShowcase,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6">
        <div className="max-w-xs">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};

export const Showcase: Story = {
  render: () => <ButtonShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Displays all button variants: primary solid, secondary outline, tertiary text, primary with icon, secondary with icon.",
      },
    },
  },
};

export const Compact: Story = {
  render: () => (
    <div className="space-y-2">
      <ButtonShowcase />
    </div>
  ),
};
