import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Kinetic type', seccion: 'Estilos · 02', transition: 'zoom' };

const WORDS = [
  { text: 'MOVE', color: '#ff3b1f' },
  { text: 'SHAKE', color: '#f6f1e7' },
  { text: 'BOUNCE', color: '#ffd400' },
  { text: 'SLAM', color: '#38e8c6' },
] as const;

const letterVariants = {
  enter: (index: number) => ({ y: '-120%', rotate: index % 2 === 0 ? -35 : 35, scale: 2.4, opacity: 0 }),
  center: { y: 0, rotate: 0, scale: 1, opacity: 1 },
  exit: (index: number) => ({ y: '120%', rotate: index % 2 === 0 ? 25 : -25, opacity: 0 }),
};

export default function EstiloCinetico() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setWordIndex((current) => (current + 1) % WORDS.length), 2300);
    return () => clearInterval(timer);
  }, []);

  const word = WORDS[wordIndex];

  return (
    <StyleStage number="02" name="Kinetic type" background="#0a0a0a" color="#fff" fontFamily="'Archivo Black', sans-serif">
      <AnimatePresence mode="wait">
        <motion.div
          key={word.text}
          style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: word.color, fontSize: '19vw', lineHeight: 1, letterSpacing: '-0.03em', overflow: 'hidden' }}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {word.text.split('').map((letter, index) => (
            <motion.span
              key={`${word.text}-${index}`}
              custom={index}
              variants={letterVariants}
              transition={{ type: 'spring', stiffness: 260, damping: 15, delay: index * 0.06 }}
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
      <div style={{ position: 'absolute', top: '4vw', left: '4vw', right: '4vw', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-code)', fontSize: '1vw', letterSpacing: '0.2em', opacity: 0.55 }}>
        <span>TYPE IN MOTION</span>
        <span>{String(wordIndex + 1).padStart(2, '0')} / 04</span>
      </div>
    </StyleStage>
  );
}
