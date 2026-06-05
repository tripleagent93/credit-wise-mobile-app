import type { Meta, StoryObj } from "@storybook/react";
import { AppHeader } from "./AppHeader";

const meta = {
  title: "Components/AppHeader",
  component: AppHeader,
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
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
