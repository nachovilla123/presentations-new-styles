import { motion } from 'motion/react';
import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Línea de tiempo',
  seccion: 'Efectos · 10',
  hasGrid: true,
  transition: 'slide',
};

const STOPS = [
  { year: '2022', label: 'Primeros modelos de imagen', isHot: false },
  { year: '2023', label: 'Chat como interfaz', isHot: false },
  { year: '2024', label: 'Agentes con herramientas', isHot: false },
  { year: '2025', label: 'Prototipos desde un prompt', isHot: false },
  { year: '2026', label: 'Hoy: diseñar conversando', isHot: true },
] as const;

const STOP_COUNT = STOPS.length;

export default function LineaDeTiempo() {
  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Cuatro años en una línea</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        De curiosidad a <span className="accent">herramienta</span>
      </h2>
      <div className="tl mt-m">
        <motion.div
          className="tl-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.div
          className="tl-pulse"
          initial={{ left: '0%', opacity: 0 }}
          animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.6, delay: 2.9, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
        />
        {STOPS.map((stop, index) => {
          const positionPercent = 10 + (index / (STOP_COUNT - 1)) * 80;
          const isAbove = index % 2 === 0;
          const delay = 0.4 + ((positionPercent / 100) * 2.4);
          return (
            <div key={stop.year} className="tl-stop" style={{ left: `${positionPercent}%` }}>
              <motion.div
                className={`tl-dot${stop.isHot ? ' hot' : ''}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 12, delay }}
              />
              <motion.div
                className={`tl-label ${isAbove ? 'up' : 'down'}`}
                initial={{ opacity: 0, y: isAbove ? 16 : -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.15 }}
                style={{ top: isAbove ? undefined : 26 }}
              >
                <span className="c-title" style={{ display: 'block', color: stop.isHot ? 'var(--color-acento)' : undefined }}>
                  {stop.year}
                </span>
                <span className="c-body">{stop.label}</span>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
