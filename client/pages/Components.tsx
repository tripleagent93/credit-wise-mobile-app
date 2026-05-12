import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// ── Section wrapper ────────────────────────────────────────────────────────────

function Section({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">{label}</p>
      <div
        className={cn(
          "border-2 border-dashed border-purple-200 rounded-lg p-4 bg-white h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

// ── 1. AppHeader ───────────────────────────────────────────────────────────────

function AppHeader() {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" aria-hidden="true">
          <path
            d="M2 20 A13 13 0 0 1 28 20"
            stroke="#1851A0"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M7 20 A8 8 0 0 1 23 20"
            stroke="#2ECC71"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="15" cy="20" r="2.5" fill="#1851A0" />
        </svg>
        <span className="font-opensans font-bold text-lg leading-none">
          <span className="text-[#1851A0]">Credit</span>
          <span className="text-[#2ECC71]">Wise</span>
        </span>
      </div>
      {/* Bell icon */}
      <button
        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Notifications"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
    </div>
  );
}

// ── 2. TabBar ──────────────────────────────────────────────────────────────────

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

function TabBar() {
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

// ── 3. Buttons ─────────────────────────────────────────────────────────────────

function ButtonShowcase() {
  return (
    <div className="flex flex-col gap-3">
      <button className="bg-[#1851A0] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#144088] transition-colors">
        Button
      </button>
      <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded-md bg-white text-sm font-medium hover:bg-gray-50 transition-colors">
        Button
      </button>
      <button className="text-gray-800 px-4 py-2 text-sm font-medium hover:underline transition-colors">
        Button
      </button>
      <button className="bg-[#1851A0] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-1.5 hover:bg-[#144088] transition-colors">
        <span className="text-base leading-none font-bold">+</span> Button
      </button>
      <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded-md bg-white text-sm font-medium flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-colors">
        <span className="text-base leading-none font-bold">+</span> Button
      </button>
    </div>
  );
}

// ── 4. Badges ──────────────────────────────────────────────────────────────────

function BadgeShowcase() {
  return (
    <div className="flex flex-col gap-4">
      {/* Outlined */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Outlined</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 border border-orange-400 text-orange-700 text-xs font-medium px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
            Fair
          </span>
          <span className="inline-flex items-center gap-1.5 border border-green-400 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            Excellent
          </span>
          <span className="inline-flex items-center gap-1.5 border border-red-400 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
            Poor
          </span>
          <span className="inline-flex items-center gap-1.5 border border-blue-400 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
            Good
          </span>
        </div>
      </div>
      {/* Filled pill */}
      <div>
        <p className="text-xs text-gray-400 mb-2">Filled Pill</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
            Fair
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
            Excellent
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
            Poor
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
            Good
          </span>
        </div>
      </div>
    </div>
  );
}

// ── 5. Alerts ──────────────────────────────────────────────────────────────────

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

function AlertShowcase() {
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

// ── 6. Modals ──────────────────────────────────────────────────────────────────

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

function ModalShowcase() {
  const [goalValue, setGoalValue] = useState(750);
  const currentScore = 720;
  const minScore = 300;
  const maxScore = 850;
  const range = maxScore - minScore;
  const currentPct = ((currentScore - minScore) / range) * 100;
  const goalPct = ((goalValue - minScore) / range) * 100;

  return (
    <div className="flex flex-col gap-5">
      {/* Modal 1 — Info / Start Goal */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-[#212121] text-sm">Start goal</span>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <XIcon />
          </button>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-[#757575] leading-relaxed">
            Reach a 740+ score to secure the lowest mortgage rates and save thousands in interest.
          </p>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full bg-[#1851A0] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#144088] transition-colors">
            Start Goal
          </button>
        </div>
      </div>

      {/* Modal 2 — Delete Confirm */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-[#212121] text-sm">Delete goal</span>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <XIcon />
          </button>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-gray-500 leading-relaxed">
            Are you sure you want to delete this goal? This action cannot be undone.
          </p>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full bg-red-500 text-white py-2.5 rounded-md text-sm font-medium hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </div>

      {/* Modal 3 — Goal Slider */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-[#212121] text-sm">Start goal</span>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <XIcon />
          </button>
        </div>
        <div className="px-4 py-4">
          {/* Slider with markers */}
          <div className="relative pt-7 pb-6">
            {/* Current score marker above */}
            <div
              className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
              style={{ left: `${currentPct}%` }}
            >
              <span className="text-xs font-semibold text-gray-600 bg-gray-100 rounded px-1 py-0.5 whitespace-nowrap">
                {currentScore}
              </span>
              <span className="w-px h-2 bg-gray-400 mt-0.5" />
            </div>

            {/* Gradient range input */}
            <input
              type="range"
              min={minScore}
              max={maxScore}
              value={goalValue}
              onChange={(e) => setGoalValue(Number(e.target.value))}
              className="gradient-slider w-full"
            />

            {/* Goal marker below */}
            <div
              className="absolute bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
              style={{ left: `${goalPct}%` }}
            >
              <span className="w-px h-2 bg-[#1851A0] mb-0.5" />
              <span className="text-xs font-semibold text-[#1851A0] bg-blue-50 border border-blue-200 rounded px-1 py-0.5 whitespace-nowrap">
                {goalValue}
              </span>
            </div>
          </div>

          {/* Below-slider labels */}
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">{currentScore} Current Score</span>
            <span className="text-xs text-[#1851A0] font-medium">{goalValue} Goal</span>
          </div>

          <p className="text-sm text-[#757575] mt-3 leading-relaxed">
            Reach a {goalValue} credit score to secure the lowest mortgage rates and save thousands
            in interest.
          </p>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full bg-[#1851A0] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#144088] transition-colors">
            Start Goal
          </button>
        </div>
      </div>
    </div>
  );
}

// ── 7. Social Login ────────────────────────────────────────────────────────────

const AppleLogo = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GoogleLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const FacebookLogo = ({
  size = 18,
  color = "#1877F2",
}: {
  size?: number;
  color?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

function SocialLoginShowcase() {
  return (
    <div className="flex flex-col gap-6">
      {/* Text / Full Width */}
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Sign In</p>
        <div className="flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <AppleLogo size={17} color="white" />
            Sign in with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <GoogleLogo size={17} />
            Sign in with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FacebookLogo size={17} />
            Sign in with Facebook
          </button>
        </div>
      </div>

      {/* Icon Only */}
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Icon Only</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-colors">
            <AppleLogo size={17} color="white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <GoogleLogo size={17} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <FacebookLogo size={17} />
          </button>
        </div>
      </div>

      {/* Continue With */}
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Continue With</p>
        <div className="flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <AppleLogo size={17} color="white" />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <GoogleLogo size={17} />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FacebookLogo size={17} />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

// ── 8. Credit Score Gauge ──────────────────────────────────────────────────────

function CreditGauge({ score }: { score: number }) {
  const cx = 100;
  const cy = 100;
  const R = 72;
  const sw = 16;

  // score 300 → 180°, score 850 → 0°
  const scoreToAngle = (s: number) => 180 - ((s - 300) / 550) * 180;

  const angleToPoint = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy - radius * Math.sin(rad),
    };
  };

  const bands = [
    { from: 300, to: 560, color: "#FF4B4B" },
    { from: 560, to: 640, color: "#FF8C42" },
    { from: 640, to: 720, color: "#FFD23F" },
    { from: 720, to: 790, color: "#7ED348" },
    { from: 790, to: 850, color: "#2ECC71" },
  ];

  const arcPath = (fromScore: number, toScore: number) => {
    const a1 = scoreToAngle(fromScore);
    const a2 = scoreToAngle(toScore);
    const p1 = angleToPoint(a1, R);
    const p2 = angleToPoint(a2, R);
    const largeArc = a1 - a2 > 180 ? 1 : 0;
    return `M ${p1.x.toFixed(3)} ${p1.y.toFixed(3)} A ${R} ${R} 0 ${largeArc} 0 ${p2.x.toFixed(3)} ${p2.y.toFixed(3)}`;
  };

  const scoreAngle = scoreToAngle(score);
  const needleTip = angleToPoint(scoreAngle, R - sw / 2);
  const leftPt = angleToPoint(180, R);
  const rightPt = angleToPoint(0, R);

  const bgPath = `M ${leftPt.x.toFixed(3)} ${leftPt.y.toFixed(3)} A ${R} ${R} 0 0 0 ${rightPt.x.toFixed(3)} ${rightPt.y.toFixed(3)}`;

  const getRating = (s: number) => {
    if (s < 580) return "Poor";
    if (s < 670) return "Fair";
    if (s < 740) return "Good";
    if (s < 800) return "Very Good";
    return "Excellent";
  };

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 140" width="200" height="140" role="img" aria-label={`Credit score gauge: ${score}`}>
        {/* Background arc */}
        <path
          d={bgPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={sw}
          strokeLinecap="butt"
        />
        {/* Colored score bands */}
        {bands.map((band) => (
          <path
            key={`band-${band.from}`}
            d={arcPath(band.from, band.to)}
            fill="none"
            stroke={band.color}
            strokeWidth={sw}
            strokeLinecap="butt"
          />
        ))}
        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={needleTip.x.toFixed(3)}
          y2={needleTip.y.toFixed(3)}
          stroke="#1E293B"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        {/* Needle tip circle */}
        <circle cx={needleTip.x} cy={needleTip.y} r={5} fill="#1E293B" />
        {/* Center pivot circle */}
        <circle cx={cx} cy={cy} r={4} fill="#1E293B" />
        {/* Score number */}
        <text
          x={cx}
          y={cy + 26}
          textAnchor="middle"
          fontSize={28}
          fontWeight={700}
          fill="#212121"
          fontFamily="Inter, sans-serif"
        >
          {score}
        </text>
        {/* Range labels */}
        <text
          x={leftPt.x.toFixed(3)}
          y={cy + 14}
          textAnchor="middle"
          fontSize={10}
          fill="#9CA3AF"
          fontFamily="Inter, sans-serif"
        >
          300
        </text>
        <text
          x={rightPt.x.toFixed(3)}
          y={cy + 14}
          textAnchor="middle"
          fontSize={10}
          fill="#9CA3AF"
          fontFamily="Inter, sans-serif"
        >
          850
        </text>
      </svg>
      <p className="text-sm text-[#757575] -mt-1">
        Rating:{" "}
        <span className="font-semibold text-[#212121]">{getRating(score)}</span>
      </p>
    </div>
  );
}

function GaugeShowcase() {
  return (
    <div className="flex flex-col items-center gap-4 divide-y divide-gray-100">
      <div className="pb-2">
        <p className="text-xs text-gray-400 text-center mb-1">Score: 720</p>
        <CreditGauge score={720} />
      </div>
      <div className="pt-2 pb-2">
        <p className="text-xs text-gray-400 text-center mb-1">Score: 350</p>
        <CreditGauge score={350} />
      </div>
      <div className="pt-2">
        <p className="text-xs text-gray-400 text-center mb-1">Score: 849</p>
        <CreditGauge score={849} />
      </div>
    </div>
  );
}

// ── 9. Text Input ──────────────────────────────────────────────────────────────

function TextInputShowcase() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="text-xs font-medium text-gray-500 mb-1 block">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-500 mb-1 block">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
        />
      </div>
    </div>
  );
}

// ── 10. Accordion ──────────────────────────────────────────────────────────────

const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronUp = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const accordionSubItems = [
  { desc: "Max out my credit cards", gain: "+25", result: "695" },
  { desc: "Pay down all my credit card balances to $0", gain: "+50", result: "770" },
];

function AccordionShowcase() {
  const [open, setOpen] = useState<boolean[]>([false, true]);

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="divide-y divide-gray-100">
      {/* Item 1 */}
      <div className="py-3 border-b border-gray-100">
        <button
          onClick={() => toggle(0)}
          className="w-full flex items-center justify-between text-left gap-2"
        >
          <span className="text-sm font-medium text-[#212121]">
            Spend or pay on your accounts
          </span>
          <span className="text-gray-500 flex-shrink-0">{open[0] ? <ChevronUp /> : <ChevronDown />}</span>
        </button>
        {open[0] && (
          <p className="mt-2 text-sm text-[#757575] leading-relaxed">
            Paying your accounts regularly improves your credit utilization ratio and boosts your
            score over time.
          </p>
        )}
      </div>

      {/* Item 2 */}
      <div className="py-3">
        <button
          onClick={() => toggle(1)}
          className="w-full flex items-center justify-between text-left gap-2"
        >
          <span className="text-sm font-medium text-[#212121]">
            Spend or pay on your accounts
          </span>
          <span className="text-gray-500 flex-shrink-0">{open[1] ? <ChevronUp /> : <ChevronDown />}</span>
        </button>
        {open[1] && (
          <div className="mt-3 flex flex-col gap-3">
            {accordionSubItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-3">
                <p className="text-xs text-[#757575] flex-1 leading-relaxed">{item.desc}</p>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-semibold text-[#2ECC71]">{item.gain}</p>
                  <p className="text-xl font-bold text-[#212121] leading-tight">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── 11. Bottom Sheet ───────────────────────────────────────────────────────────

function BottomSheet() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col">
      {/* Drag handle */}
      <div className="flex justify-center pt-3 pb-1">
        <span className="w-10 h-1.5 bg-gray-300 rounded-full" />
      </div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <span className="font-semibold text-[#212121] text-sm">Refinance your mortgage</span>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <XIcon />
        </button>
      </div>
      {/* Content */}
      <div className="px-4 py-4 flex-1">
        <p className="text-sm text-[#757575] leading-relaxed mb-3">
          Refinancing your mortgage can help you secure a lower interest rate, reduce your monthly
          payments, or shorten the life of your loan.
        </p>
        <p className="text-sm text-[#757575] leading-relaxed">
          With a strong credit score, you may qualify for the best available rates and save
          thousands over the lifetime of your mortgage.
        </p>
      </div>
      {/* Footer */}
      <div className="px-4 pb-4 pt-2">
        <button className="w-full bg-[#1851A0] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#144088] transition-colors">
          Check my Rates
        </button>
      </div>
    </div>
  );
}

// ── 12. Overlay ────────────────────────────────────────────────────────────────

function Overlay() {
  return (
    <div className="w-full h-40 bg-gray-400 rounded-lg flex items-center justify-center">
      <span className="text-white text-sm font-medium opacity-70">Overlay</span>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function Components() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Page header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-[#1851A0] hover:underline mb-4 font-medium"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-[#212121] font-inter">
            CreditWise Components
          </h1>
          <p className="text-[#757575] mt-1.5">
            Component library showcase — design system reference
          </p>
        </div>

        {/* Row 1: Header | Tab Bar | Buttons | Badges | Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <Section label="App Header">
            <AppHeader />
          </Section>
          <Section label="Tab Bar">
            <TabBar />
          </Section>
          <Section label="Buttons">
            <ButtonShowcase />
          </Section>
          <Section label="Badges">
            <BadgeShowcase />
          </Section>
          <Section label="Alerts">
            <AlertShowcase />
          </Section>
        </div>

        {/* Row 2: Modal | Social Login | Gauges | Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Section label="Modal">
            <ModalShowcase />
          </Section>
          <Section label="Social Login">
            <SocialLoginShowcase />
          </Section>
          <Section label="Credit Score Gauge">
            <GaugeShowcase />
          </Section>
          <Section label="Text Input">
            <TextInputShowcase />
          </Section>
        </div>

        {/* Row 3: Accordion | Bottom Sheet | Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
          <Section label="Accordion">
            <AccordionShowcase />
          </Section>
          <Section label="Bottom Sheet">
            <BottomSheet />
          </Section>
          <Section label="Overlay">
            <Overlay />
          </Section>
        </div>
      </div>
    </div>
  );
}
