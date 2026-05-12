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

export function BottomSheet() {
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
