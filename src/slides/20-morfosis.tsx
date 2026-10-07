import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Morfosis de formas',
  seccion: 'Efectos · 11',
  variante: 'corte',
  transition: 'curtain',
};

/*
 * Every path has the same structure (M + 4 cubic segments + Z), so the browser
 * can interpolate the numbers between any two of them.
 */
const SHAPES = [
  { name: 'círculo', color: '#e8482b', d: 'M0,-100 C55,-100 100,-55 100,0 C100,55 55,100 0,100 C-55,100 -100,55 -100,0 C-100,-55 -55,-100 0,-100 Z' },
  { name: 'cuadrado', color: '#2f6f8f', d: 'M0,-100 C100,-100 100,-100 100,0 C100,100 100,100 0,100 C-100,100 -100,100 -100,0 C-100,-100 -100,-100 0,-100 Z' },
  { name: 'rombo', color: '#3f8f86', d: 'M0,-100 C33,-67 67,-33 100,0 C67,33 33,67 0,100 C-33,67 -67,33 -100,0 C-67,-33 -33,-67 0,-100 Z' },
  { name: 'estrella', color: '#f6f1e7', d: 'M0,-100 C12,-12 12,-12 100,0 C12,12 12,12 0,100 C-12,12 -12,12 -100,0 C-12,-12 -12,-12 0,-100 Z' },
  { name: 'gota', color: '#e8482b', d: 'M0,-110 C40,-60 100,-20 100,30 C100,80 55,100 0,100 C-55,100 -100,80 -100,30 C-100,-20 -40,-60 0,-110 Z' },
] as const;

export default function Morfosis() {
  const [shapeIndex, setShapeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setShapeIndex((current) => (current + 1) % SHAPES.length), 1900);
    return () => clearInterval(timer);
  }, []);

  const shape = SHAPES[shapeIndex];

  return (
    <Frame meta={meta} isCentered>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4vw' }}>
        <div>
          <p className="portada-kicker reveal">
            <span className="pk-num">11</span>
            <span>Morph</span>
          </p>
          <h2 className="display reveal mt-m" style={{ fontSize: 'var(--fs-section)' }}>
            Una forma,
            <br />
            <span className="accent">muchas</span>
          </h2>
          <div style={{ position: 'relative', height: 'clamp(44px, 5vw, 100px)', marginTop: '2vh', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={shape.name}
                className="hand"
                style={{ position: 'absolute', margin: 0, fontSize: 'clamp(30px, 3.4vw, 66px)' }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {shape.name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <svg viewBox="-150 -150 300 300" style={{ width: '32vw', overflow: 'visible' }}>
          <motion.path
            animate={{ d: shape.d, fill: shape.color, rotate: shapeIndex * 72 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.path
            fill="none"
            stroke="var(--color-fg)"
            strokeOpacity={0.25}
            strokeWidth={2}
            animate={{ d: shape.d, scale: 1.18, rotate: -shapeIndex * 40 }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      </div>
    </Frame>
  );
}
