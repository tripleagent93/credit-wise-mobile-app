import { CloseIcon } from "./ui/close-icon";

export function BottomSheet() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col max-w-sm">
      {/* Drag handle */}
      <div className="flex justify-center pt-3 pb-1">
        <span className="w-10 h-1.5 bg-gray-300 rounded-full" />
      </div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <span className="font-semibold text-[#212121] text-md">Refinance your mortgage</span>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <CloseIcon />
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
