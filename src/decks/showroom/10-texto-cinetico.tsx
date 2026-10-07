import { motion } from 'motion/react';
import { Frame, MaskWords, type SlideMeta } from '../../deck';
import { RollingWords } from '../../kit';

export const meta: SlideMeta = {
  title: 'Texto cinético',
  seccion: 'Efectos · 01',
  hasGrid: true,
  transition: 'curtain',
  notes: 'Cada palabra sale de su propia máscara; la palabra que rota cambia cada 1.8 s.',
};

export default function TextoCinetico() {
  return (
    <Frame meta={meta} isCentered>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Texto cinético
      </motion.p>
      <h2 className="display mt-s" style={{ fontSize: 'var(--fs-section)', lineHeight: 1 }}>
        <MaskWords text="Diseñar" delay={0.45} /> <RollingWords words={['rápido', 'mejor', 'distinto', 'en equipo']} />
        <br />
        <MaskWords text="con ideas que se mueven." delay={0.8} accentFrom={3} />
      </h2>
    </Frame>
  );
}
