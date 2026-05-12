import { useState } from "react";
import { cn } from "@/lib/utils";

const alertsConfig = [
  {
    id: "success",
    bg: "bg-[#DCFCE7]",
    iconBg: "bg-green-500",
    title: "Success",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "info",
    bg: "bg-[#DBEAFE]",
    iconBg: "bg-blue-500",
    title: "Info",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    id: "warning",
    bg: "bg-[#FEF9C3]",
    iconBg: "bg-yellow-400",
    title: "Warning",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: "error",
    bg: "bg-[#FEE2E2]",
    iconBg: "bg-red-500",
    title: "Error",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

export function AlertShowcase() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const dismiss = (id: string) => setDismissed((prev) => ({ ...prev, [id]: true }));
  const reset = () => setDismissed({});
  const allDismissed = alertsConfig.every((a) => dismissed[a.id]);

  return (
    <div className="flex flex-col gap-3">
      {alertsConfig.map((alert) =>
        dismissed[alert.id] ? null : (
          <div
            key={alert.id}
            className={cn("flex items-start gap-3 rounded-lg px-3 py-2.5", alert.bg)}
          >
            <span
              className={cn(
                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5",
                alert.iconBg
              )}
            >
              {alert.icon}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#212121]">{alert.title}</p>
              <p className="text-xs text-[#757575] mt-0.5">{alert.text}</p>
            </div>
            <button
              onClick={() => dismiss(alert.id)}
              className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors mt-0.5"
              aria-label={`Dismiss ${alert.title} alert`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        )
      )}
      {(Object.keys(dismissed).length > 0 || allDismissed) && (
        <button
          onClick={reset}
          className="text-xs text-[#1851A0] hover:underline text-left mt-1 font-medium"
        >
          Reset alerts
        </button>
      )}
    </div>
  );
}
