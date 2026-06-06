export interface CreditScoreGaugeProps {
  score: number;
  rating: "excellent" | "good" | "poor";
  trend?: "up" | "down" | "stable";
}

const ratingConfig: Record<
  string,
  { label: string; color: string; gradient: string; arcColor: string }
> = {
  excellent: {
    label: "Rating: Excellent",
    color: "text-data-score-excellent",
    gradient: "from-red-500 via-yellow-500 to-green-600",
    arcColor: "#0C8D5C",
  },
  good: {
    label: "Rating: Good",
    color: "text-data-score-good",
    gradient: "from-red-500 via-yellow-500 to-green-600",
    arcColor: "#0BB074",
  },
  poor: {
    label: "Rating: Poor",
    color: "text-data-score-poor",
    gradient: "from-red-500 via-yellow-500 to-green-600",
    arcColor: "#F63A2F",
  },
};

export function CreditScoreGauge({ score = 350, rating, trend }: CreditScoreGaugeProps) {
  const config = ratingConfig[rating];

  // 1. Convert score to a percentage (0 to 1)
  const pct = Math.max(0, Math.min(1, (score - 300) / 550));

  // 2. Map percentage to an angle in radians
  // 0% score = 180 degrees (Math.PI) -> 100% score = 0 degrees (0)
  const angle = Math.PI - (pct * Math.PI);

  // 3. Define dimensions matching your container dimensions (w-48 = 192px)
  const radius = 88;
  const centerX = 96;
  const centerY = 96;

  // 4. Calculate coordinates along the path
  const posX = centerX + radius * Math.cos(angle);
  const posY = centerY - radius * Math.sin(angle);

  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      <div className="relative w-48 h-32">
        {/* Gauge Background Arc */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 100"
          fill="none"
        >
          {/* Arcs (Kept identical to your original SVG elements) */}
          <path d="M199.954 97.934C199.57 79.3296 194.002 61.2015 183.877 45.5888L175.487 51.0299C184.6 65.0813 189.611 81.3966 189.957 98.1406L199.954 97.934Z" fill="#0C8D5C" />
          <path d="M179.683 39.6121C168.496 24.8454 153.426 13.4767 136.155 6.77409L132.537 16.0967C148.081 22.129 161.644 32.3608 171.713 45.6509L179.683 39.6121Z" fill="#0BB074" />
          <path d="M129.637 4.50014C111.843 -1.02652 92.8582 -1.47176 74.8245 3.21463L77.3396 12.8932C93.57 8.67542 110.656 9.07614 126.671 14.0501L129.637 4.50014Z" fill="#F8C00B" />
          <path d="M67.9133 5.2794C50.5262 11.1649 35.0945 21.7225 23.3091 35.7956L30.9757 42.216C41.5827 29.5503 55.4712 20.0484 71.1195 14.7515L67.9133 5.2794Z" fill="#FD7102" />
          <path d="M18.7052 41.7327C6.96299 58.1105 0.443058 77.654 0 97.8015L9.99758 98.0213C10.3963 79.8886 16.2643 62.2995 26.8323 47.5594L18.7052 41.7327Z" fill="#F63A2F" />
        </svg>

        {/* Dynamic Indicator Ring Element */}
        <div
          className="absolute w-6 h-6 pointer-events-none transition-transform duration-500 ease-out"
          style={{
            left: `0px`,
            top: `0px`,
            transform: `translate(${posX - 10}px, ${posY - 10}px)`,
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
            <circle cx="10" cy="10" r="9" fill={config.arcColor} stroke="white" strokeWidth="0" />
            <circle cx="10" cy="10" r="5" fill="white" />
          </svg>
        </div>

        {/* Score display */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center flex flex-row items-center gap-1">
          <div className="text-[2.5rem] font-semibold text-black">{score}</div>
          <div className="flex flex-col items-center">
            {trend === "up" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.9376 10.0606L8.56943 4.96312C8.49902 4.881 8.41168 4.81508 8.3134 4.76989C8.21512 4.72469 8.10823 4.70129 8.00005 4.70129C7.89188 4.70129 7.78499 4.72469 7.68671 4.76989C7.58843 4.81508 7.50109 4.881 7.43068 4.96312L3.06255 10.0606C2.64568 10.5472 2.9913 11.2987 3.63193 11.2987H12.3694C13.0101 11.2987 13.3557 10.5472 12.9376 10.0606Z" fill="#0BB074"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.9376 5.93938L8.56943 11.0369C8.49902 11.119 8.41168 11.1849 8.3134 11.2301C8.21512 11.2753 8.10823 11.2987 8.00005 11.2987C7.89188 11.2987 7.78499 11.2753 7.68671 11.2301C7.58843 11.1849 7.50109 11.119 7.43068 11.0369L3.06255 5.93938C2.64568 5.45282 2.9913 4.70125 3.63193 4.70125H12.3694C13.0101 4.70125 13.3557 5.45282 12.9376 5.93938Z" fill="#F63A2F"/>
              </svg>
            )}
            <div className="text-xs font-bold text-black">7</div>
          </div>
        </div>

        {/* Range labels */}
        <div className="absolute left-0 bottom-0 text-xs font-bold text-black">300</div>
        <div className="absolute right-0 bottom-0 text-xs font-bold text-black">850</div>
      </div>

      <div className="text-base font-semibold text-black text-center mt-2">
        {config.label}
      </div>
    </div>
  );
}
