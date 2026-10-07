import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Pipeline en vivo',
  seccion: 'Efectos · 13',
  variante: 'corte',
  transition: 'slide',
};

const STAGES = ['Brief', 'Ideas', 'Boceto', 'Prueba', 'Entrega'] as const;
const STEP_MS = 1300;

export default function Pipeline() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveStage((current) => (current + 1) % (STAGES.length + 1)), STEP_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <Frame meta={meta} isCentered>
      <p className="portada-kicker reveal">
        <span className="pk-num">13</span>
        <span>Estado secuencial</span>
      </p>
      <h2 className="display reveal mt-m" style={{ fontSize: 'var(--fs-title)' }}>
        Cada etapa <span className="accent">se enciende</span>
      </h2>
      <div className="reveal mt-l" style={{ display: 'flex', alignItems: 'center' }}>
        {STAGES.map((stage, index) => {
          const isDone = index < activeStage;
          const isCurrent = index === activeStage;
          return (
            <div key={stage} style={{ display: 'flex', alignItems: 'center', flex: index === STAGES.length - 1 ? '0 0 auto' : 1 }}>
              <motion.div
                animate={{
                  scale: isCurrent ? 1.12 : 1,
                  backgroundColor: isDone ? '#e8482b' : isCurrent ? '#f6f1e7' : 'rgba(246,241,231,0)',
                  color: isCurrent ? '#14120e' : '#f6f1e7',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{ padding: '0.7em 1.3em', border: '2px solid #f6f1e7', borderRadius: 999, fontWeight: 600, fontSize: 'var(--fs-chip)', whiteSpace: 'nowrap' }}
              >
                {isDone ? '✓ ' : ''}
                {stage}
              </motion.div>
              {index < STAGES.length - 1 && (
                <div style={{ position: 'relative', flex: 1, height: 3, margin: '0 0.6vw', background: 'rgba(246,241,231,0.2)' }}>
                  <motion.div
                    style={{ position: 'absolute', inset: 0, background: '#e8482b', transformOrigin: 'left' }}
                    animate={{ scaleX: isDone ? 1 : 0 }}
                    transition={{ duration: STEP_MS / 1000, ease: 'easeOut' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
