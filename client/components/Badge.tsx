export function BadgeShowcase() {
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
