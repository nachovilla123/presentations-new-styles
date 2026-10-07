import { motion } from 'motion/react';
import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Anillo 3D',
  seccion: 'Efectos · 07',
  hasGrid: true,
  transition: 'flip',
};

const CARDS = [
  { tag: '01', title: 'Investigar', body: 'Entender el problema' },
  { tag: '02', title: 'Definir', body: 'Elegir qué resolver' },
  { tag: '03', title: 'Idear', body: 'Explorar sin miedo' },
  { tag: '04', title: 'Prototipar', body: 'Hacerlo tangible' },
  { tag: '05', title: 'Probar', body: 'Aprender rápido' },
  { tag: '06', title: 'Entregar', body: 'Llevarlo a producción' },
] as const;

const STEP_DEGREES = 360 / CARDS.length;

export default function Anillo3d() {
  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Carrusel en perspectiva</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Un proceso que <span className="accent">gira</span>
      </h2>
      <div className="ring-stage reveal mt-m">
        <motion.div
          className="ring"
          initial={{ rotateY: 0, rotateX: -6 }}
          animate={{ rotateY: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        >
          {CARDS.map((card, index) => (
            <div
              key={card.tag}
              className="ring-card"
              style={{ transform: `rotateY(${index * STEP_DEGREES}deg) translateZ(17vw)` }}
            >
              <span className="c-tag">{card.tag}</span>
              <div>
                <span className="c-title" style={{ display: 'block' }}>{card.title}</span>
                <span className="c-body">{card.body}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Frame>
  );
}
