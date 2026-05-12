import { useState } from "react";
import { cn } from "@/lib/utils";

type TabId = "Home" | "Score" | "Goals" | "More";

const tabConfig: { id: TabId; label: string; icon: React.ReactNode }[] = [
  {
    id: "Home",
    label: "Home",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "Score",
    label: "Score",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "Goals",
    label: "Goals",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "More",
    label: "More",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export function TabBar() {
  const [active, setActive] = useState<TabId>("Home");
  return (
    <div className="flex items-center justify-around bg-white border border-gray-200 rounded-xl shadow-sm py-2">
      {tabConfig.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={cn(
            "flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors",
            active === tab.id ? "text-[#1851A0]" : "text-gray-400"
          )}
        >
          {tab.icon}
          <span className="text-xs font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
