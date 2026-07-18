interface WaveDecorationProps {
  className?: string;
  bars?: number;
  animated?: boolean;
}

export default function WaveDecoration({
  className = '',
  bars = 5,
  animated = true,
}: WaveDecorationProps) {
  const heights = [10, 22, 34, 22, 14, 28, 18, 10, 24, 16];
  return (
    <span
      className={`inline-flex items-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`voice-bar ${animated ? 'animate-voiceWave' : ''}`}
          style={{
            height: `${heights[i % heights.length]}px`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </span>
  );
}
