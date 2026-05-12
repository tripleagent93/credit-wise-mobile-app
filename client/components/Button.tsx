export function ButtonShowcase() {
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
