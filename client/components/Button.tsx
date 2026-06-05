export interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  label: string;
  hasIcon?: boolean;
  onClick?: () => void;
}

export function Button({
  type = "primary",
  label = "Button",
  hasIcon = false,
  onClick,
}: ButtonProps) {
  const buttonStyles = {
    primary: "bg-[#1851A0] text-white hover:bg-[#144088] transition-colors",
    secondary:
      "border border-gray-400 text-gray-800 bg-white hover:bg-gray-50 transition-colors",
    tertiary: "text-gray-800 hover:underline transition-colors",
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center gap-1 ${hasIcon ? "pl-3 pr-4" : "px-4"} py-2 rounded-md text-sm font-medium ${buttonStyles[type]}`}
    >
      {hasIcon && (
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 4.16666V15.8333M4.16669 9.99999H15.8334"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}
