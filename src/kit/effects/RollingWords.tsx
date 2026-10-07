import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface RollingWordsProps {
  words: readonly string[];
  intervalMs?: number;
  /** CSS colour of the word and its underline. */
  color?: string;
}

/** One word slot that keeps swapping: the old word leaves upward, the new one rises in. */
export function RollingWords({ words, intervalMs = 1800, color = 'var(--color-acento)' }: RollingWordsProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setWordIndex((current) => (current + 1) % words.length), intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  return (
    <span style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', height: '1.08em' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[wordIndex]}
          style={{ display: 'inline-block', color }}
          initial={{ y: '105%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-105%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[wordIndex]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        style={{ position: 'absolute', left: 0, bottom: '0.04em', height: '0.06em', width: '100%', background: color, transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </span>
  );
}
