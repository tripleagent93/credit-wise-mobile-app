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
      options: [350, 840],
      control: { type: "select" },
    },
    trend: {
      control: { type: "radio" },
      options: ["up", "down", "stable"],
    },
  },
} satisfies Meta<typeof CreditScoreGauge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Poor: Story = {
  args: {
    score: 350,
    rating: "poor",
    trend: "down",
  },
};

export const Excellent: Story = {
  args: {
    score: 840,
    rating: "excellent",
    trend: "up",
  },
};

export const AllRatings: Story = {
  args: {
    score: 720,
    rating: "good",
  },
  render: () => (
    <div className="flex gap-8 flex-wrap justify-center">
      <CreditScoreGauge score={350} rating="poor" />
      <CreditScoreGauge score={850} rating="excellent" />
    </div>
  ),
};
