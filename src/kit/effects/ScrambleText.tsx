import type { CSSProperties } from 'react';
import { useScramble } from '../../deck';

interface ScrambleTextProps {
  text: string;
  delayMs?: number;
  /** Milliseconds per resolved character. */
  perCharMs?: number;
  className?: string;
  style?: CSSProperties;
}

/** Text that decodes from random glyphs into `text`, left to right. */
export function ScrambleText({ text, delayMs = 0, perCharMs = 38, className, style }: ScrambleTextProps) {
  const decoded = useScramble(text, delayMs, perCharMs);
  return (
    <span className={className} style={style}>
      {decoded}
    </span>
  );
}
