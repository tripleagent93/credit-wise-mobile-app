import { CloseIcon } from "./ui/close-icon";

export function BottomSheet() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col max-w-sm">
      {/* Drag handle */}
      <div className="flex justify-center pt-3 pb-1">
        <svg width="35" height="4" viewBox="0 0 35 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="35" height="4" rx="2" fill="#d1d5db"/>
      </svg>
      </div>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <span className="font-semibold text-[#212121] text-md">Refinance your mortgage</span>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <CloseIcon />
        </button>
      </div>
      <div className="px-4 py-4 flex-1">
        <p className="text-sm text-[#757575] leading-relaxed mb-3">
            Refinancing your mortgage can be a complex process, but with the right preparation, you can streamline the procedure and potentially save thousands. Start by gathering all your financial documents, including income statements, tax returns, and current mortgage details.
        </p>
        <p className="text-sm text-[#757575] leading-relaxed">
          Next, compare rates from multiple lenders to ensure you're getting the best deal. Don't forget to factor in closing costs and other fees. Finally, stay organized and responsive throughout the application process to avoid delays. With these steps, you'll be well on your way to a smoother refinance.
        </p>
      </div>
      <div className="px-4 pb-4 pt-2">
        <button className="w-full bg-[#1851A0] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#144088] transition-colors">
          Check my Rates
        </button>
      </div>
    </div>
  );
}
