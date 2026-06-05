export interface BadgeProps {
  type?: "info" | "danger" | "success" | "warning";
  label: string;
  outlined?: boolean;
  hasIcon?: boolean;
}

export function Badge({
  type = "info",
  label = "Info",
  outlined = false,
  hasIcon = false,
}: BadgeProps) {
  const badgeStyles = {
    info: outlined
      ? "border border-blue-400 text-blue-700"
      : "bg-blue-100 text-blue-700",
    danger: outlined
      ? "border border-red-400 text-red-700"
      : "bg-red-100 text-red-700",
    success: outlined
      ? "border border-green-400 text-green-700"
      : "bg-green-100 text-green-700",
    warning: outlined
      ? "border border-orange-400 text-orange-700"
      : "bg-orange-100 text-orange-700",
  };

  const iconColors = {
    info: "#1d4ed8",
    danger: "#D32F2F",
    success: "#15803d",
    warning: "#F57C00",
  };

  return (
    <div
      className={`flex flex-row gap-1 items-center px-3 py-1 rounded-full text-sm font-medium ${badgeStyles[type]}`}
    >
      {hasIcon && (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill={iconColors[type]} />
        </svg>
      )}
      <span>{label}</span>
    </div>
  );
}
