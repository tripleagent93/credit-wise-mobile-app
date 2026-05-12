import type { Meta, StoryObj } from "@storybook/react";
import { AppHeader } from "./AppHeader";

const meta = {
  title: "Components/AppHeader",
  component: AppHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithNotification: Story = {
  render: () => (
    <div className="bg-gray-50 p-4">
      <AppHeader />
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="bg-white p-4 rounded-lg max-w-md">
      <AppHeader />
    </div>
  ),
};
