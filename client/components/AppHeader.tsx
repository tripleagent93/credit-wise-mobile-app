import CreditWiseLogo from "../components/assets/images/CreditWise Logo.svg";

export function AppHeader() {
  return (
    <div className="grid grid-cols-3 items-center bg-white border border-gray-200 px-4 py-3 shadow-sm max-w-sm">
      <div className="flex"></div>
      <div className="flex justify-center">
        <img src={CreditWiseLogo} alt="CreditWise Logo" className="w-full" />
      </div>
      <div className="flex justify-end">
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
    </div>
  );
}
