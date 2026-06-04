import type { Meta, StoryObj } from "@storybook/react";
import { SocialLoginShowcase } from "./SocialLogin";

const meta = {
  title: "Components/SocialLogin",
  component: SocialLoginShowcase,
  tags: ["autodocs"],
} satisfies Meta<typeof SocialLoginShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};

export const Showcase: Story = {
  render: () => <SocialLoginShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Social login buttons with three variants: Full-width 'Sign In', Icon-only, and Full-width 'Continue With'. Supports Apple, Google, and Facebook.",
      },
    },
  },
};

export const SignInVariant: Story = {
  render: () => (
    <div className="max-w-sm">
      <p className="text-xs text-gray-400 font-medium mb-3">Sign In</p>
      <div className="flex flex-col gap-2">
        <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Sign in with Apple
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">
          <svg width="17" height="17" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  ),
};

export const IconOnlyVariant: Story = {
  render: () => (
    <div className="max-w-sm">
      <p className="text-xs text-gray-400 font-medium mb-3">Icon Only</p>
      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-900">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50">
          <svg width="17" height="17" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
          </svg>
        </button>
      </div>
    </div>
  ),
};
