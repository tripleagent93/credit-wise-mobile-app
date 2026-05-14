export interface CreditScoreGaugeProps {
  score: number;
  rating: "excellent" | "good" | "poor";
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

export function CreditScoreGauge({ score, rating }: CreditScoreGaugeProps) {
  const config = ratingConfig[rating];
  const percentage = ((score - 300) / 550) * 100;

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs">
      <div className="relative w-48 h-32">
        {/* Gauge Background Arc */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arcs */}
          <path
            d="M199.954 97.934C199.57 79.3296 194.002 61.2015 183.877 45.5888L175.487 51.0299C184.6 65.0813 189.611 81.3966 189.957 98.1406L199.954 97.934Z"
            fill="#0C8D5C"
          />
          <path
            d="M179.683 39.6121C168.496 24.8454 153.426 13.4767 136.155 6.77409L132.537 16.0967C148.081 22.129 161.644 32.3608 171.713 45.6509L179.683 39.6121Z"
            fill="#0BB074"
          />
          <path
            d="M129.637 4.50014C111.843 -1.02652 92.8582 -1.47176 74.8245 3.21463L77.3396 12.8932C93.57 8.67542 110.656 9.07614 126.671 14.0501L129.637 4.50014Z"
            fill="#F8C00B"
          />
          <path
            d="M67.9133 5.2794C50.5262 11.1649 35.0945 21.7225 23.3091 35.7956L30.9757 42.216C41.5827 29.5503 55.4712 20.0484 71.1195 14.7515L67.9133 5.2794Z"
            fill="#FD7102"
          />
          <path
            d="M18.7052 41.7327C6.96299 58.1105 0.443058 77.654 0 97.8015L9.99758 98.0213C10.3963 79.8886 16.2643 62.2995 26.8323 47.5594L18.7052 41.7327Z"
            fill="#F63A2F"
          />
        </svg>

        {/* Center indicator circle */}
        <svg
          className="absolute"
          style={{
            left: `${percentage * 2}px`,
            top: "7px",
            width: "20px",
            height: "20px",
          }}
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill={config.arcColor} />
          <circle cx="10" cy="10" r="6" fill="white" />
        </svg>

        {/* Score display */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-4xl font-bold text-black">{score}</div>
          <div className="text-xs font-bold text-black">↑ 7</div>
        </div>

        {/* Range labels */}
        <div className="absolute left-0 bottom-0 text-xs font-bold text-black">
          300
        </div>
        <div className="absolute right-0 bottom-0 text-xs font-bold text-black">
          850
        </div>
      </div>

      <div className="text-base font-bold text-black text-center">
        {config.label}
      </div>
    </div>
  );
}
