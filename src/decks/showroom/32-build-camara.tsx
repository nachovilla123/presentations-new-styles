import { motion } from 'motion/react';
import { Frame, useStep, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Build · cámara',
  seccion: 'Builds · 10',
  variante: 'corte',
  steps: 4,
};

/** Regions of the "world" in % of its size; each step zooms the camera onto one. */
const REGIONS = [
  { title: 'Idea', note: 'Todo empieza con una intuición.', left: 14, top: 22, color: '#e8482b' },
  { title: 'Prototipo', note: 'La hacemos tangible en horas.', left: 80, top: 24, color: '#2f6f8f' },
  { title: 'Prueba', note: 'Personas reales, feedback real.', left: 74, top: 78, color: '#3f8f86' },
  { title: 'Producto', note: 'Y de ahí al mundo.', left: 18, top: 76, color: '#f6f1e7' },
] as const;

const ZOOM = 2.3;

export default function BuildCamara() {
  const step = useStep();
  const region = step > 0 ? REGIONS[step - 1] : null;
  const x = region ? `${50 - ZOOM * region.left}%` : '0%';
  const y = region ? `${50 - ZOOM * region.top}%` : '0%';

  return (
    <Frame meta={meta}>
      <div style={{ position: 'relative', flex: 1, margin: '3vh 0 0', overflow: 'hidden', border: '2px solid var(--color-linea)', borderRadius: 14 }}>
        <motion.div
          style={{ position: 'absolute', inset: 0, transformOrigin: '0 0' }}
          animate={{ scale: region ? ZOOM : 1, x, y }}
          transition={{ type: 'spring', stiffness: 70, damping: 20 }}
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" stroke="var(--color-muted)" strokeWidth="0.35" strokeDasharray="1.2 1.6">
            <path d="M14 22 L80 24 L74 78 L18 76 Z" />
          </svg>
          {REGIONS.map((item, index) => (
            <div key={item.title} style={{ position: 'absolute', left: `${item.left}%`, top: `${item.top}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', width: '22%' }}>
              <span className="c-tag" style={{ color: item.color, fontSize: '0.9vw' }}>{String(index + 1).padStart(2, '0')}</span>
              <span className="display" style={{ display: 'block', fontSize: '2.2vw', lineHeight: 1 }}>{item.title}</span>
              <span className="c-body" style={{ display: 'block', fontSize: '0.95vw', marginTop: '0.4vw' }}>{item.note}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Frame>
  );
}
