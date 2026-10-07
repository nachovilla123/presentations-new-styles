import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Frame, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Magic move',
  seccion: 'Efectos · 05',
  hasGrid: true,
  transition: 'fade',
};

const ITEMS = [
  { id: 'idea', title: 'Idea', note: 'Una frase, un problema, una intuición.', color: '#e8482b', shape: 'circle' },
  { id: 'prompt', title: 'Prompt', note: 'Se la contás a la IA como a un colega.', color: '#2f6f8f', shape: 'square' },
  { id: 'boceto', title: 'Boceto', note: 'Tres direcciones en minutos.', color: '#3f8f86', shape: 'tri' },
  { id: 'ajuste', title: 'Ajuste', note: 'Cambiás una cosa y todo se recalcula.', color: '#14120e', shape: 'square' },
  { id: 'entrega', title: 'Entrega', note: 'Componentes listos para producción.', color: '#e8482b', shape: 'circle' },
] as const;

function Icon({ shape, color }: { shape: (typeof ITEMS)[number]['shape']; color: string }) {
  return (
    <motion.svg layout="position" className="mm-icon" viewBox="0 0 40 40">
      {shape === 'circle' && <circle cx="20" cy="20" r="17" fill={color} />}
      {shape === 'square' && <rect x="4" y="4" width="32" height="32" rx="6" fill={color} />}
      {shape === 'tri' && <path d="M20 4 L37 35 H3 Z" fill={color} />}
    </motion.svg>
  );
}

export default function MagicMove() {
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setIsGrid((current) => !current), 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Magic move · layout animation</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Mismos elementos, <span className="accent">otra forma</span>
      </h2>
      <motion.div
        layout
        className="mt-l"
        style={{
          display: 'grid',
          gap: '1.2vw',
          gridTemplateColumns: isGrid ? 'repeat(5, 1fr)' : '1fr',
        }}
        transition={{ type: 'spring', stiffness: 160, damping: 22 }}
      >
        {ITEMS.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="mm-card"
            style={{ flexDirection: isGrid ? 'column' : 'row', alignItems: isGrid ? 'flex-start' : 'center' }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          >
            <Icon shape={item.shape} color={item.color} />
            <motion.div layout="position" style={{ flex: 1 }}>
              <motion.span layout="position" className="c-title" style={{ display: 'block' }}>
                {item.title}
              </motion.span>
              <AnimatePresence>
                {!isGrid && (
                  <motion.span
                    className="c-body"
                    style={{ display: 'block', marginTop: 4 }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.note}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Frame>
  );
}
