import type { Meta, StoryObj } from "@storybook/react";
import { AccordionShowcase } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: AccordionShowcase,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6">
        <div className="max-w-sm bg-white rounded-lg p-4">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof AccordionShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {};

export const Showcase: Story = {
  render: () => <AccordionShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive accordion component with two expandable items. The second item is open by default and contains nested scoring scenarios.",
      },
    },
  },
};

export const Expanded: Story = {
  render: () => (
    <div className="divide-y divide-gray-100">
      <div className="py-3 border-b border-gray-100">
        <button className="w-full flex items-center justify-between text-left gap-2">
          <span className="text-sm font-medium text-[#212121]">Spend or pay on your accounts</span>
          <span className="text-gray-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </span>
        </button>
        <p className="mt-2 text-sm text-[#757575] leading-relaxed">
          Paying your accounts regularly improves your credit utilization ratio and boosts your score over time.
        </p>
      </div>
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div className="divide-y divide-gray-100">
      <div className="py-3 border-b border-gray-100">
        <button className="w-full flex items-center justify-between text-left gap-2">
          <span className="text-sm font-medium text-[#212121]">Spend or pay on your accounts</span>
          <span className="text-gray-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  ),
};
