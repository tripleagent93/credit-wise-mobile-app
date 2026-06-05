import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";
import { AppHeader } from "./AppHeader";
import { TabBar } from "./TabBar";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex justify-center min-h-[712px]">
        <div className="min-width-sm">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col h-full w-full justify-between">
      <Overlay />
      <AppHeader />
      <Modal
        title={"Start your goal"}
        message={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        }
        actionLabel={"Start Goal"}
      />
      <TabBar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Overlay component - a semi-transparent backdrop used to focus attention on modals, popups, or other foreground content. It dims the background and prevents interaction with underlying elements.",
      },
    },
  },
};
