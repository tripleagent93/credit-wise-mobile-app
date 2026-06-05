import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    outlined: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Info",
    outlined: false,
    hasIcon: false,
  },
};

export const Filled: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <Badge type="info" label={"Info"} outlined={false} />
      <Badge type="danger" label={"Danger"} outlined={false} />
      <Badge type="success" label={"Success"} outlined={false} />
      <Badge type="warning" label={"Warning"} outlined={false} />
    </div>
  ),
  args: {
    label: "Excellent",
    outlined: false,
    hasIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Badge component with filled variants.",
      },
    },
  },
};

export const Outlined: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <Badge type="info" label={"Info"} outlined />
      <Badge type="danger" label={"Danger"} outlined />
      <Badge type="success" label={"Success"} outlined />
      <Badge type="warning" label={"Warning"} outlined />
    </div>
  ),
  args: {
    label: "Excellent",
    outlined: false,
    hasIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Badge component with outlined variants.",
      },
    },
  },
};

export const OutlinedWithIcon: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <Badge type="info" label={"Info"} outlined hasIcon />
      <Badge type="danger" label={"Danger"} outlined hasIcon />
      <Badge type="success" label={"Success"} outlined hasIcon />
      <Badge type="warning" label={"Warning"} outlined hasIcon />
    </div>
  ),
  args: {
    label: "Excellent",
    outlined: false,
    hasIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Badge component with outlined variants with icons.",
      },
    },
  },
};
