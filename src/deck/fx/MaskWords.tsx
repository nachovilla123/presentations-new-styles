import { motion } from 'motion/react';
import type { CSSProperties } from 'react';

interface MaskWordsProps {
  text: string;
  /** Seconds before the first word starts. */
  delay?: number;
  /** Seconds between consecutive words. */
  stagger?: number;
  /** Words from this index onward are painted with the accent colour. */
  accentFrom?: number;
  style?: CSSProperties;
}

/** Kinetic headline: every word rises out of its own clipping mask. */
export function MaskWords({ text, delay = 0, stagger = 0.09, accentFrom, style }: MaskWordsProps) {
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline', ...style }}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.14em', marginBottom: '-0.14em' }}
        >
          <motion.span
            className={accentFrom !== undefined && index >= accentFrom ? 'accent' : undefined}
            style={{ display: 'inline-block' }}
            initial={{ y: '115%', rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.95, delay: delay + index * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {' '}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
