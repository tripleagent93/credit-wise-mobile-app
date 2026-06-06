import { ReactNode } from "react";
import { CloseIcon } from "./ui/close-icon";

export interface ModalProps {
  type?: "info" | "danger";
  title: string;
  message: string | ReactNode;
  actionLabel: string;
  onClick?: () => void;
  onClose?: () => void;
  dismissible?: boolean;
}

export function Modal({
  type = "info",
  title,
  message,
  actionLabel,
  onClick,
  onClose,
  dismissible = true,
}: ModalProps) {
  const modalStyles = {
    info: "bg-[#1851A0] hover:bg-[#144088] text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <div className="flex flex-col gap-5 max-w-sm" style={{ zIndex: 9999999 }}>
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-[#212121] text-md">{title}</span>
          {dismissible && (
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-[#757575] leading-relaxed">{message}</p>
        </div>
        <div className="px-4 pb-4">
          <button
            onClick={onClick}
            className={`w-full py-2.5 rounded-md text-sm font-medium transition-colors ${modalStyles[type]}`}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
