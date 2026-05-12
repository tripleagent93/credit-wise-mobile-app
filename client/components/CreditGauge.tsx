function CreditGauge({ score }: { score: number }) {
  const cx = 100;
  const cy = 100;
  const R = 72;
  const sw = 16;

  // score 300 → 180°, score 850 → 0°
  const scoreToAngle = (s: number) => 180 - ((s - 300) / 550) * 180;

  const angleToPoint = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy - radius * Math.sin(rad),
    };
  };

  const bands = [
    { from: 300, to: 560, color: "#FF4B4B" },
    { from: 560, to: 640, color: "#FF8C42" },
    { from: 640, to: 720, color: "#FFD23F" },
    { from: 720, to: 790, color: "#7ED348" },
    { from: 790, to: 850, color: "#2ECC71" },
  ];

  const arcPath = (fromScore: number, toScore: number) => {
    const a1 = scoreToAngle(fromScore);
    const a2 = scoreToAngle(toScore);
    const p1 = angleToPoint(a1, R);
    const p2 = angleToPoint(a2, R);
    const largeArc = a1 - a2 > 180 ? 1 : 0;
    return `M ${p1.x.toFixed(3)} ${p1.y.toFixed(3)} A ${R} ${R} 0 ${largeArc} 0 ${p2.x.toFixed(3)} ${p2.y.toFixed(3)}`;
  };

  const scoreAngle = scoreToAngle(score);
  const needleTip = angleToPoint(scoreAngle, R - sw / 2);
  const leftPt = angleToPoint(180, R);
  const rightPt = angleToPoint(0, R);

  const bgPath = `M ${leftPt.x.toFixed(3)} ${leftPt.y.toFixed(3)} A ${R} ${R} 0 0 0 ${rightPt.x.toFixed(3)} ${rightPt.y.toFixed(3)}`;

  const getRating = (s: number) => {
    if (s < 580) return "Poor";
    if (s < 670) return "Fair";
    if (s < 740) return "Good";
    if (s < 800) return "Very Good";
    return "Excellent";
  };

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 140" width="200" height="140" role="img" aria-label={`Credit score gauge: ${score}`}>
        {/* Background arc */}
        <path
          d={bgPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={sw}
          strokeLinecap="butt"
        />
        {/* Colored score bands */}
        {bands.map((band) => (
          <path
            key={`band-${band.from}`}
            d={arcPath(band.from, band.to)}
            fill="none"
            stroke={band.color}
            strokeWidth={sw}
            strokeLinecap="butt"
          />
        ))}
        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={needleTip.x.toFixed(3)}
          y2={needleTip.y.toFixed(3)}
          stroke="#1E293B"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        {/* Needle tip circle */}
        <circle cx={needleTip.x} cy={needleTip.y} r={5} fill="#1E293B" />
        {/* Center pivot circle */}
        <circle cx={cx} cy={cy} r={4} fill="#1E293B" />
        {/* Score number */}
        <text
          x={cx}
          y={cy + 26}
          textAnchor="middle"
          fontSize={28}
          fontWeight={700}
          fill="#212121"
          fontFamily="Inter, sans-serif"
        >
          {score}
        </text>
        {/* Range labels */}
        <text
          x={leftPt.x.toFixed(3)}
          y={cy + 14}
          textAnchor="middle"
          fontSize={10}
          fill="#9CA3AF"
          fontFamily="Inter, sans-serif"
        >
          300
        </text>
        <text
          x={rightPt.x.toFixed(3)}
          y={cy + 14}
          textAnchor="middle"
          fontSize={10}
          fill="#9CA3AF"
          fontFamily="Inter, sans-serif"
        >
          850
        </text>
      </svg>
      <p className="text-sm text-[#757575] -mt-1">
        Rating:{" "}
        <span className="font-semibold text-[#212121]">{getRating(score)}</span>
      </p>
    </div>
  );
}

export function GaugeShowcase() {
  return (
    <div className="flex flex-col items-center gap-4 divide-y divide-gray-100">
      <div className="pb-2">
        <p className="text-xs text-gray-400 text-center mb-1">Score: 720</p>
        <CreditGauge score={720} />
      </div>
      <div className="pt-2 pb-2">
        <p className="text-xs text-gray-400 text-center mb-1">Score: 350</p>
        <CreditGauge score={350} />
      </div>
      <div className="pt-2">
        <p className="text-xs text-gray-400 text-center mb-1">Score: 849</p>
        <CreditGauge score={849} />
      </div>
    </div>
  );
}
