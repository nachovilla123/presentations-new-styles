import { motion } from 'motion/react';
import { Frame, Step, useStep, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Build · checklist y confeti',
  seccion: 'Builds · 09',
  hasGrid: true,
  steps: 5,
};

const ITEMS = ['Brief claro', 'Tres direcciones', 'Prototipo navegable', 'Prueba con usuarios', 'Listo para producción'] as const;

const CONFETTI = Array.from({ length: 28 }, (_, index) => {
  const angle = (index / 28) * Math.PI * 2;
  const reach = 160 + ((index * 37) % 140);
  return {
    x: Math.cos(angle) * reach,
    y: Math.sin(angle) * reach - 60,
    rotate: (index * 53) % 360,
    color: ['#e8482b', '#2f6f8f', '#3f8f86', '#14120e'][index % 4],
  };
});

export default function BuildChecklist() {
  const step = useStep();
  return (
    <Frame meta={meta} isCentered>
      <h2 className="display reveal" style={{ fontSize: 'var(--fs-title)' }}>
        Todo en <span className="accent">orden</span>
      </h2>
      <div className="mt-m" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.6vh' }}>
        {ITEMS.map((item, index) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1.4vw' }}>
            <svg viewBox="0 0 40 40" style={{ width: '3.2vw', flexShrink: 0 }} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="34" height="34" rx="8" stroke="var(--color-fg)" strokeWidth="3" />
              <motion.path
                d="M10 21 L18 29 L31 11"
                stroke="var(--color-acento)"
                strokeWidth="5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: step >= index + 1 ? 1 : 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            </svg>
            <Step at={index + 1} effect="left" isDimmedWhenPast>
              <span className="c-title" style={{ fontSize: 'clamp(20px, 2.6vw, 52px)' }}>{item}</span>
            </Step>
          </div>
        ))}
        {step >= 5 && (
          <div style={{ position: 'absolute', right: '12%', top: '40%', pointerEvents: 'none' }}>
            {CONFETTI.map((piece, index) => (
              <motion.i
                key={index}
                style={{ position: 'absolute', width: 12, height: 18, borderRadius: 2, background: piece.color }}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                animate={{ x: piece.x, y: [0, piece.y, piece.y + 260], opacity: [1, 1, 0], rotate: piece.rotate * 3, scale: [1, 1, 0.8] }}
                transition={{ duration: 1.9, ease: 'easeOut', times: [0, 0.45, 1] }}
              />
            ))}
          </div>
        )}
      </div>
    </Frame>
  );
}
