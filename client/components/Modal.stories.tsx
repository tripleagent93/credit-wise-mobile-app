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
    title: "Info",
    message: "Reach a 740+ score to secure the lowest mortgage rates and save thousands in interest.",
    actionLabel: "OK",
    dismissible: true,
  },
};

// export const Showcase: Story = {
//   render: () => <Modal title={""} message={""} actionLabel={""} />,
//   parameters: {
//     docs: {
//       description: {
//         story:
//           "Modal component showcasing three variations: Info/Start Goal modal, Delete Confirmation modal, and Interactive Goal Slider modal. The slider is interactive - drag to change the goal value.",
//       },
//     },
//   },
// };

// export const StartGoal: Story = {
//   render: () => (
//     <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden max-w-sm">
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//         <span className="font-semibold text-[#212121] text-sm">Start goal</span>
//         <button className="text-gray-400 hover:text-gray-600">
//           <svg
//             width="15"
//             height="15"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//       </div>
//       <div className="px-4 py-3">
//         <p className="text-sm text-[#757575] leading-relaxed">
//           Reach a 740+ score to secure the lowest mortgage rates and save
//           thousands in interest.
//         </p>
//       </div>
//       <div className="px-4 pb-4">
//         <button className="w-full bg-[#1851A0] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#144088]">
//           Start Goal
//         </button>
//       </div>
//     </div>
//   ),
// };

// export const DeleteConfirm: Story = {
//   render: () => (
//     <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden max-w-sm">
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//         <span className="font-semibold text-[#212121] text-sm">
//           Delete goal
//         </span>
//         <button className="text-gray-400 hover:text-gray-600">
//           <svg
//             width="15"
//             height="15"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//       </div>
//       <div className="px-4 py-3">
//         <p className="text-sm text-gray-500 leading-relaxed">
//           Are you sure you want to delete this goal? This action cannot be
//           undone.
//         </p>
//       </div>
//       <div className="px-4 pb-4">
//         <button className="w-full bg-red-500 text-white py-2.5 rounded-md text-sm font-medium hover:bg-red-600">
//           Delete
//         </button>
//       </div>
//     </div>
//   ),
// };
