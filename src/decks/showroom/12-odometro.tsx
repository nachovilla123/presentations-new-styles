import { motion } from 'motion/react';
import { Frame, Odometer, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Contadores mecánicos',
  seccion: 'Efectos · 03',
  hasGrid: true,
  transition: 'zoom',
};

const STATS = [
  { value: '12,840', label: 'Usuarios activos', isHot: true },
  { value: '98%', label: 'Satisfacción', isHot: false },
  { value: '4.7×', label: 'Retorno', isHot: false },
] as const;

export default function Odometro() {
  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Odómetro</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Los números también <span className="accent">se mueven</span>
      </h2>
      <div className="cards mt-l" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`card${stat.isHot ? ' acc' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="dato-grande"
              style={{ color: stat.isHot ? 'var(--color-acento)' : 'var(--color-fg)', fontSize: 'clamp(44px, 6vw, 120px)' }}
            >
              <Odometer value={stat.value} delay={0.7 + index * 0.25} />
            </span>
            <span className="c-body">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}
