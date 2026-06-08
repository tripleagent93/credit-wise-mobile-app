import type { Meta, StoryObj } from "@storybook/react";
import {
  AppleLogo,
  FacebookLogo,
  GoogleLogo,
  SocialLoginShowcase,
} from "./SocialLogin";

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
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Sign In</p>
        <div className="flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white px-2 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <AppleLogo size={24} color="white" />
            Sign in with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-2 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <GoogleLogo size={24} />
            Sign in with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-2 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FacebookLogo size={24} />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  ),
};

export const IconOnlyVariant: Story = {
  render: () => (
    <div>
      <p className="text-xs text-gray-400 font-medium mb-2">Icon Only</p>
      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-[8px] bg-black flex items-center justify-center hover:bg-gray-900 transition-colors">
          <AppleLogo size={24} color="white" />
        </button>
        <button className="w-10 h-10 rounded-[8px] bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <GoogleLogo size={24} />
        </button>
        <button className="w-10 h-10 rounded-[8px] bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <FacebookLogo size={24} />
        </button>
      </div>
    </div>
  ),
};
