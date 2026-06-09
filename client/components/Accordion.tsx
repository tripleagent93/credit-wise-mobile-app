import { useState } from "react";

export interface AccordionProps {
  open?: boolean;
}


const ChevronDown = () => (
  <svg
    width="20"
    height="20"
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
    width="20"
    height="20"
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
  { desc: "Max out my credit cards", gain: "25", result: "695" },
  { desc: "Pay down all my credit card balances to $0", gain: "50", result: "770" },
];

export function Accordion({ open }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(open ?? false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="divide-y divide-gray-100 bg-white rounded-lg border border-gray-200 px-4 py-3  w-full min-w-[25rem] max-w-sm">
      {/* Item 1 */}
      <div className="py-3">
        <button
          onClick={toggle}
          className="w-full flex items-center justify-between text-left gap-2"
        >
          <span className="text-sm font-medium text-[#212121]">
            Spend or pay on your accounts
          </span>
          <span className="text-gray-500 flex-shrink-0">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
        </button>
        {isOpen && (
          <div className="border-t border-gray-100 mt-4">
            <p className="mt-2 text-sm text-[#757575] leading-relaxed">
              Paying your accounts regularly improves your credit utilization ratio and boosts your
              score over time.
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {accordionSubItems.map((item, i) => (
                <div key={i} className={`flex items-center justify-between py-1 ${i !== accordionSubItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <p className="text-xs text-[#757575] flex-1 leading-relaxed">{item.desc}</p>
                  <div className="text-right flex-shrink-0">
                    <p className="flex gap-0.5 text-xs font-semibold text-[#2ECC71]">
                      <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12.9376 10.0606L8.56943 4.96312C8.49902 4.881 8.41168 4.81508 8.3134 4.76989C8.21512 4.72469 8.10823 4.70129 8.00005 4.70129C7.89188 4.70129 7.78499 4.72469 7.68671 4.76989C7.58843 4.81508 7.50109 4.881 7.43068 4.96312L3.06255 10.0606C2.64568 10.5472 2.9913 11.2987 3.63193 11.2987H12.3694C13.0101 11.2987 13.3557 10.5472 12.9376 10.0606Z" fill="#0BB074"/>
                        </svg>
                      </span>{item.gain}
                      </p>
                    <p className="text-xl font-bold text-[#212121] leading-tight">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
