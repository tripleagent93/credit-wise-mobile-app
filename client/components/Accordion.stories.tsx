import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {};

export const Showcase: Story = {
  render: () => <Accordion />,
  parameters: {
    docs: {
      description: {
        story: "Interactive accordion component with two items.",
      },
    },
  },
};

export const OpenByDefault: Story = {
  args: {
    open: true,
  },
};
