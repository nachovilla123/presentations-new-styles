import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Frame, MaskWords, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Texto cinético',
  seccion: 'Efectos · 01',
  hasGrid: true,
  transition: 'curtain',
  notes: 'Cada palabra sale de su propia máscara; la palabra que rota cambia cada 1.8 s.',
};

const ROLLING_WORDS = ['rápido', 'mejor', 'distinto', 'en equipo'] as const;

function RollingWord() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setWordIndex((current) => (current + 1) % ROLLING_WORDS.length), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', height: '1.08em' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLLING_WORDS[wordIndex]}
          className="accent"
          style={{ display: 'inline-block' }}
          initial={{ y: '105%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-105%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {ROLLING_WORDS[wordIndex]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        style={{ position: 'absolute', left: 0, bottom: '0.04em', height: '0.06em', width: '100%', background: 'var(--color-acento)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </span>
  );
}

export default function TextoCinetico() {
  return (
    <Frame meta={meta} isCentered>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Texto cinético
      </motion.p>
      <h2 className="display mt-s" style={{ fontSize: 'var(--fs-section)', lineHeight: 1 }}>
        <MaskWords text="Diseñar" delay={0.45} /> <RollingWord />
        <br />
        <MaskWords text="con ideas que se mueven." delay={0.8} accentFrom={3} />
      </h2>
    </Frame>
  );
}
