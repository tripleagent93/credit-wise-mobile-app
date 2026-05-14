import type { Meta, StoryObj } from "@storybook/react";
import { CreditScoreGauge } from "./CreditScoreGauge";

const meta = {
  title: "Components/Credit Score Gauge",
  component: CreditScoreGauge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "select" },
      options: ["good", "excellent", "poor"],
    },
    score: {
      control: { type: "number", min: 300, max: 850 },
    },
  },
} satisfies Meta<typeof CreditScoreGauge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Good: Story = {
  args: {
    score: 720,
    rating: "good",
  },
};

export const Excellent: Story = {
  args: {
    score: 849,
    rating: "excellent",
  },
};

export const Poor: Story = {
  args: {
    score: 350,
    rating: "poor",
  },
};

export const AllRatings: Story = {
  args: {
    score: 720,
    rating: "good",
  },
  render: () => (
    <div className="flex gap-8 flex-wrap justify-center">
      <CreditScoreGauge score={720} rating="good" />
      <CreditScoreGauge score={849} rating="excellent" />
      <CreditScoreGauge score={350} rating="poor" />
    </div>
  ),
};
