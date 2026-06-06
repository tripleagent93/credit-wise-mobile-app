import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoModal: Story = {
  args: {
    type: "info",
    title: "Start goal",
    message:
      "Reach a 740+ score to secure the lowest mortgage rates and save thousands in interest.",
    actionLabel: "OK",
    dismissible: true,
  },
};

export const DangerModal: Story = {
  args: {
    type: "danger",
    title: "Delete goal",
    message:
      "Are you sure you want to delete this goal? This action cannot be undone.",
    actionLabel: "Delete",
    dismissible: true,
  },
};
