export function AppHeader() {
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
