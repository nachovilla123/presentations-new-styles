import type { CSSProperties } from 'react';

type WordVariant = 'outline' | 'solid' | 'hot';

const VARIANT_CYCLE: readonly WordVariant[] = ['outline', 'solid', 'outline', 'hot'];

interface MarqueeProps {
  words: readonly string[];
  /** Seconds for one full loop: higher is slower. */
  durationSeconds?: number;
  isReversed?: boolean;
  /** Separator printed after every word. */
  separator?: string;
  style?: CSSProperties;
}

/** Infinite ticker row. Stack several rows with different speeds/directions for depth. */
export function Marquee({ words, durationSeconds = 28, isReversed = false, separator = '✱', style }: MarqueeProps) {
  const trackStyle = {
    '--marquee-dur': `${durationSeconds}s`,
    '--marquee-dir': isReversed ? 'reverse' : 'normal',
  } as CSSProperties;
  // Two identical halves so translating by -50% loops with no visible jump.
  const half = words.map((word, index) => (
    <span key={`${word}-${index}`} className={`marquee-word ${VARIANT_CYCLE[index % VARIANT_CYCLE.length]}`}>
      {word} {separator}
    </span>
  ));
  return (
    <div className="marquee-row" style={style}>
      <div className="marquee-track" style={trackStyle}>
        {half}
        {half}
      </div>
    </div>
  );
}
