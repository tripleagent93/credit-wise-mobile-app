import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    hasIcon: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    label: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    type: "tertiary",
    label: "Button",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    type: "primary",
    label: "Button",
    hasIcon: true,
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    type: "secondary",
    label: "Button",
    hasIcon: true,
  },
};

export const TertiaryWithIcon: Story = {
  args: {
    type: "tertiary",
    label: "Button",
    hasIcon: true,
  },
};
