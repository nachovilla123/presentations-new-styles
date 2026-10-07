import type { CSSProperties } from 'react';

const COLORS = ['#e8482b', '#2f6f8f', '#3f8f86', '#f6f1e7'];

interface Bubble {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  color: string;
}

// Deterministic pseudo-random so bubbles don't jump between renders.
const bubbles: Bubble[] = Array.from({ length: 16 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const unit = seed / 233280;
  return {
    left: Math.round(unit * 96),
    size: 8 + Math.round(((i * 7) % 5) * 5),
    duration: 16 + ((i * 5) % 14),
    delay: -((i * 3) % 18),
    drift: 12 + ((i * 11) % 30),
    color: COLORS[i % COLORS.length],
  };
});

/** Ambient rising bubbles for dark slides. */
export function Burbujas() {
  return (
    <div className="burbujas" aria-hidden>
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="burbuja"
          style={
            {
              left: `${bubble.left}%`,
              '--tam': `${bubble.size}px`,
              '--dur': `${bubble.duration}s`,
              '--desfase': `${bubble.delay}s`,
              '--deriva': `${bubble.drift}px`,
              '--color': bubble.color,
            } as CSSProperties
          }
        >
          <i className="burbuja-cuerpo" />
        </span>
      ))}
    </div>
  );
}
