import type { Meta, StoryObj } from "@storybook/react";
import { within } from "storybook/test";
import { TextInputShowcase } from "./TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInputShowcase,
  tags: ["autodocs"],
} satisfies Meta<typeof TextInputShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllInputs: Story = {};

export const Showcase: Story = {
  render: () => <TextInputShowcase />,
  parameters: {
    docs: {
      description: {
        story: "Text input component with Email and Password fields.",
      },
    },
  },
};

export const EmailInput: Story = {
  render: () => (
    <div className="max-w-sm">
      <label className="text-xs font-medium text-gray-500 mb-1 block">
        Email
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
      />
    </div>
  ),
};

export const PasswordInput: Story = {
  render: () => (
    <div className="max-w-sm">
      <label className="text-xs font-medium text-gray-500 mb-1 block">
        Password
      </label>
      <input
        type="password"
        placeholder="••••••••"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
      />
    </div>
  ),
};

export const WithFocus: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("email@example.com");
    await input.focus();
  },
  render: () => (
    <div className="max-w-sm">
      <label className="text-xs font-medium text-gray-500 mb-1 block">
        Email
      </label>
      <input
        type="email"
        placeholder="email@example.com"
        autoFocus
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
      />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="max-w-sm">
      <label className="text-xs font-medium text-gray-500 mb-1 block">
        Email
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        defaultValue="user@example.com"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
      />
    </div>
  ),
};
