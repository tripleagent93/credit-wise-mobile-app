import { ReactNode } from "react";

const XIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export interface ModalProps {
  type?: "info" | "danger";
  title: string;
  message: string | ReactNode;
  actionLabel: string;
  onAction?: () => void;
  onClose?: () => void;
  zIndex?: number;
  dismissible?: boolean;
}

export function Modal({
  type = "info",
  title,
  message,
  actionLabel,
  onAction,
  onClose,
  zIndex = 9999999,
  dismissible = true,
}: ModalProps) {
  return (
    <div className="flex flex-col gap-5 max-w-sm" style={{ zIndex }}>
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-[#212121] text-sm">{title}</span>
          {dismissible && (
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
            >
              <XIcon />
            </button>
          )}
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-[#757575] leading-relaxed">{message}</p>
        </div>
        <div className="px-4 pb-4">
          <button
            onClick={onAction}
            className="w-full bg-[#1851A0] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#144088] transition-colors"
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
