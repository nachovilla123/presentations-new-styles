import { motion } from 'motion/react';
import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Swiss', seccion: 'Estilos · 01', transition: 'fade', steps: 0 };

const EASE = [0.16, 1, 0.3, 1] as const;
const COLUMN_LINES = [8.33, 16.66, 25, 33.33, 41.66, 50, 58.33, 66.66, 75, 83.33, 91.66] as const;

export default function EstiloSwiss() {
  return (
    <StyleStage number="01" name="Swiss style" background="#f2f1ec" color="#111" fontFamily="'Inter', 'Helvetica Neue', sans-serif">
      {COLUMN_LINES.map((left, index) => (
        <motion.i
          key={left}
          style={{ position: 'absolute', top: 0, bottom: 0, left: `${left}%`, width: 1, background: 'rgb(0 0 0 / 0.08)', transformOrigin: 'top' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, delay: index * 0.05, ease: EASE }}
        />
      ))}
      <motion.div
        style={{ position: 'absolute', right: '8.33%', top: '9%', width: '25vw', height: '25vw', borderRadius: '50%', background: '#e30613' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.5 }}
      />
      <motion.div
        style={{ position: 'absolute', left: '8.33%', top: '9%', height: '0.9vw', background: '#111', transformOrigin: 'left' }}
        initial={{ width: 0 }}
        animate={{ width: '41.66%' }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      />
      <motion.p
        style={{ position: 'absolute', left: '8.33%', top: '14%', width: '25%', margin: 0, fontSize: '1.15vw', lineHeight: 1.45, fontWeight: 600 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
      >
        Tipografía internacional. Grilla, asimetría, un solo color de acento y mucho aire.
        <br />
        <span style={{ fontWeight: 400, opacity: 0.6 }}>Zúrich y Basilea, años 50.</span>
      </motion.p>
      <div style={{ position: 'absolute', left: '8.33%', bottom: '14%', overflow: 'hidden' }}>
        <motion.h1
          style={{ margin: 0, fontSize: '17vw', lineHeight: 0.84, fontWeight: 900, letterSpacing: '-0.06em' }}
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
        >
          Swiss
        </motion.h1>
      </div>
      <motion.span
        style={{ position: 'absolute', right: '8.33%', bottom: '14%', fontSize: '9vw', fontWeight: 900, lineHeight: 0.8, letterSpacing: '-0.05em' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        01
      </motion.span>
    </StyleStage>
  );
}
