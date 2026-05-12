import type { Meta, StoryObj } from "@storybook/react";
import { GaugeShowcase } from "./CreditGauge";

const meta = {
  title: "Components/CreditGauge",
  component: GaugeShowcase,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-6 flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GaugeShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllScores: Story = {};

export const Showcase: Story = {
  render: () => <GaugeShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Credit score gauge component displaying three different score examples: 720 (Good), 350 (Poor), and 849 (Excellent). The gauge visually represents the score on a 300-850 scale with color-coded bands.",
      },
    },
  },
};

export const GoodScore: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-gray-400 text-center">Score: 720 - Good</p>
          <svg viewBox="0 0 200 140" width="200" height="140" role="img">
            <path d="M 2.5 100 A 72 72 0 0 0 197.5 100" fill="none" stroke="#E5E7EB" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 2.5 100 A 72 72 0 0 0 38.41 42.18" fill="none" stroke="#FF4B4B" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 38.41 42.18 A 72 72 0 0 0 78.68 27.73" fill="none" stroke="#FF8C42" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 78.68 27.73 A 72 72 0 0 0 126.29 26.14" fill="none" stroke="#FFD23F" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 126.29 26.14 A 72 72 0 0 0 169.55 50.75" fill="none" stroke="#7ED348" strokeWidth="16" strokeLinecap="butt" />
          </svg>
          <p className="text-sm text-[#757575]">Rating: <span className="font-semibold">Good</span></p>
        </div>
      </div>
    </div>
  ),
};

export const ExcellentScore: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-gray-400 text-center">Score: 849 - Excellent</p>
          <svg viewBox="0 0 200 140" width="200" height="140" role="img">
            <path d="M 2.5 100 A 72 72 0 0 0 197.5 100" fill="none" stroke="#E5E7EB" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 2.5 100 A 72 72 0 0 0 38.41 42.18" fill="none" stroke="#FF4B4B" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 38.41 42.18 A 72 72 0 0 0 78.68 27.73" fill="none" stroke="#FF8C42" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 78.68 27.73 A 72 72 0 0 0 126.29 26.14" fill="none" stroke="#FFD23F" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 126.29 26.14 A 72 72 0 0 0 169.55 50.75" fill="none" stroke="#7ED348" strokeWidth="16" strokeLinecap="butt" />
          </svg>
          <p className="text-sm text-[#757575]">Rating: <span className="font-semibold">Excellent</span></p>
        </div>
      </div>
    </div>
  ),
};

export const PoorScore: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-gray-400 text-center">Score: 350 - Poor</p>
          <svg viewBox="0 0 200 140" width="200" height="140" role="img">
            <path d="M 2.5 100 A 72 72 0 0 0 197.5 100" fill="none" stroke="#E5E7EB" strokeWidth="16" strokeLinecap="butt" />
            <path d="M 2.5 100 A 72 72 0 0 0 22.5 80" fill="none" stroke="#FF4B4B" strokeWidth="16" strokeLinecap="butt" />
          </svg>
          <p className="text-sm text-[#757575]">Rating: <span className="font-semibold">Poor</span></p>
        </div>
      </div>
    </div>
  ),
};
