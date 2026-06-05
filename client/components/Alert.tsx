import { useState } from "react";
import { cn } from "@/lib/utils";

const alertsConfig = [
  {
    id: "success",
    bg: "bg-[#DCFCE7]",
    title: "Success",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 2.66667C8.66663 2.66667 2.66663 8.66667 2.66663 16C2.66663 23.3333 8.66663 29.3333 16 29.3333C23.3333 29.3333 29.3333 23.3333 29.3333 16C29.3333 8.66667 23.3333 2.66667 16 2.66667ZM13.3333 22.6667L6.66663 16L8.54663 14.12L13.3333 18.8933L23.4533 8.77334L25.3333 10.6667L13.3333 22.6667Z"
          fill="#0BB074"
        />
      </svg>
    ),
  },
  {
    id: "info",
    bg: "bg-[#DBEAFE]",
    title: "Info",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M17.3333 12H14.6666V9.33332H17.3333M17.3333 22.6667H14.6666V14.6667H17.3333M16 2.66666C14.249 2.66666 12.5152 3.01153 10.8975 3.6816C9.27984 4.35166 7.80998 5.33378 6.57187 6.5719C4.07138 9.07238 2.66663 12.4638 2.66663 16C2.66663 19.5362 4.07138 22.9276 6.57187 25.4281C7.80998 26.6662 9.27984 27.6483 10.8975 28.3184C12.5152 28.9884 14.249 29.3333 16 29.3333C19.5362 29.3333 22.9276 27.9286 25.428 25.4281C27.9285 22.9276 29.3333 19.5362 29.3333 16C29.3333 14.249 28.9884 12.5152 28.3184 10.8975C27.6483 9.27987 26.6662 7.81001 25.428 6.5719C24.1899 5.33378 22.7201 4.35166 21.1024 3.6816C19.4847 3.01153 17.7509 2.66666 16 2.66666Z"
          fill="#1851A0"
        />
      </svg>
    ),
  },
  {
    id: "warning",
    bg: "bg-[#FEF9C3]",
    title: "Warning",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M17.3334 18.6667H14.6667V12H17.3334M17.3334 24H14.6667V21.3333H17.3334M1.33337 28H30.6667L16 2.66666L1.33337 28Z"
          fill="#F8C00B"
        />
      </svg>
    ),
  },
  {
    id: "error",
    bg: "bg-[#FEE2E2]",
    title: "Error",
    text: "Lorem ipsum dolor sit amet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 2.66666C23.3733 2.66666 29.3333 8.62666 29.3333 16C29.3333 23.3733 23.3733 29.3333 16 29.3333C8.62663 29.3333 2.66663 23.3733 2.66663 16C2.66663 8.62666 8.62663 2.66666 16 2.66666ZM20.7866 9.33332L16 14.12L11.2133 9.33332L9.33329 11.2133L14.12 16L9.33329 20.7867L11.2133 22.6667L16 17.88L20.7866 22.6667L22.6666 20.7867L17.88 16L22.6666 11.2133L20.7866 9.33332Z"
          fill="#F63A2F"
        />
      </svg>
    ),
  },
];

export function AlertShowcase() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const dismiss = (id: string) =>
    setDismissed((prev) => ({ ...prev, [id]: true }));
  const reset = () => setDismissed({});
  const allDismissed = alertsConfig.every((a) => dismissed[a.id]);

  return (
    <div className="flex flex-col gap-3">
      {alertsConfig.map((alert) =>
        dismissed[alert.id] ? null : (
          <div
            key={alert.id}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5",
              alert.bg,
            )}
          >
            <span>{alert.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-md font-semibold text-[#212121]">
                {alert.title}
              </p>
              <p className="text-sm text-[#757575]">{alert.text}</p>
            </div>
            <button
              onClick={() => dismiss(alert.id)}
              className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors mt-0.5"
              aria-label={`Dismiss ${alert.title} alert`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        ),
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
