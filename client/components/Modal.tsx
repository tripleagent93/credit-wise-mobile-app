import { useState } from "react";

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

export function ModalShowcase() {
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
