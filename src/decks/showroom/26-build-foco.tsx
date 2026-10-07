import { AnimatePresence, motion } from 'motion/react';
import { Frame, useStep, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Build · foco',
  seccion: 'Builds · 04',
  hasGrid: true,
  steps: 6,
};

const TILES = [
  { name: 'Color', detail: 'Una paleta corta: papel, tinta y un único acento.' },
  { name: 'Tipografía', detail: 'Títulos pesados y ajustados; texto de lectura sobrio.' },
  { name: 'Espacio', detail: 'Márgenes generosos: lo que no está también diseña.' },
  { name: 'Movimiento', detail: 'Cada animación explica algo, nunca decora.' },
  { name: 'Ritmo', detail: 'Alternar slides claras y oscuras marca los cortes.' },
  { name: 'Detalle', detail: 'Notas a mano y flechas que guían la mirada.' },
] as const;

export default function BuildFoco() {
  const step = useStep();
  const focused = step > 0 ? TILES[step - 1] : null;

  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Seis decisiones de diseño</p>
      <div className="cards reveal mt-m" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {TILES.map((tile, index) => {
          const isFocused = step === index + 1;
          return (
            <motion.div
              key={tile.name}
              className={`card${isFocused ? ' acc' : ''}`}
              animate={{ scale: isFocused ? 1.07 : 1, opacity: step === 0 || isFocused ? 1 : 0.28, y: isFocused ? -6 : 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              style={{ zIndex: isFocused ? 2 : 1 }}
            >
              <span className="c-tag">{String(index + 1).padStart(2, '0')}</span>
              <span className="c-title">{tile.name}</span>
            </motion.div>
          );
        })}
      </div>
      <div style={{ position: 'relative', height: '12vh', marginTop: '3vh' }}>
        <AnimatePresence mode="wait">
          {focused && (
            <motion.p
              key={focused.name}
              className="quote"
              style={{ position: 'absolute', maxWidth: '38ch', fontSize: 'clamp(20px, 2.4vw, 46px)' }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              {focused.detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Frame>
  );
}
