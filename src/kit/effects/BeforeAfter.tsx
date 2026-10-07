import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, type ReactNode } from 'react';

interface BeforeAfterProps {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  /** Seconds for the divider to sweep there and back. */
  sweepSeconds?: number;
}

/** Two layers stacked in a 16:10 frame; an accent divider sweeps back and forth revealing `after`. */
export function BeforeAfter({ before, after, beforeLabel = 'Antes', afterLabel = 'Después', sweepSeconds = 7 }: BeforeAfterProps) {
  const dividerPercent = useMotionValue(8);
  const clipPath = useTransform(dividerPercent, (value) => `inset(0 0 0 ${value}%)`);
  const dividerLeft = useTransform(dividerPercent, (value) => `${value}%`);

  useEffect(() => {
    const controls = animate(dividerPercent, [8, 92, 8], { duration: sweepSeconds, repeat: Infinity, ease: 'easeInOut' });
    return () => controls.stop();
  }, [dividerPercent, sweepSeconds]);

  return (
    <div className="compare">
      <div className="compare-layer">{before}</div>
      <motion.div className="compare-layer" style={{ clipPath }}>
        {after}
      </motion.div>
      <span className="compare-tag" style={{ left: 12, background: '#14120e', color: '#f6f1e7' }}>
        {beforeLabel}
      </span>
      <span className="compare-tag" style={{ right: 12, background: '#e8482b', color: '#fff' }}>
        {afterLabel}
      </span>
      <motion.div className="compare-handle" style={{ left: dividerLeft }} />
    </div>
  );
}
