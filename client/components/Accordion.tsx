import { useState } from "react";

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

export function AccordionShowcase() {
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
