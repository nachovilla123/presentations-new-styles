import { motion } from 'motion/react';
import { StyleStage, type CssVars, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Glassmorphism', seccion: 'Estilos · 06', transition: 'fade' };

const BLOBS: ReadonlyArray<{ color: string; style: CssVars }> = [
  { color: '#ff4ecd', style: { left: '8vw', top: '6vw', width: '26vw', height: '26vw', '--dx': '14vw', '--dy': '8vw', '--wander': '11s' } },
  { color: '#4d7cff', style: { right: '6vw', top: '10vw', width: '30vw', height: '30vw', '--dx': '-10vw', '--dy': '10vw', '--wander': '15s' } },
  { color: '#22e1c0', style: { left: '34vw', bottom: '-6vw', width: '28vw', height: '28vw', '--dx': '8vw', '--dy': '-9vw', '--wander': '13s' } },
];

export default function EstiloGlassmorphism() {
  return (
    <StyleStage number="06" name="Glassmorphism" background="linear-gradient(135deg, #1b1442, #0d0b26)" color="#fff" fontFamily="'Inter', sans-serif">
      {BLOBS.map((blob) => (
        <div key={blob.color} className="glow-blob" style={{ ...blob.style, background: blob.color }} />
      ))}
      <motion.div
        className="glass-card"
        style={{ left: '14vw', top: '9vw', width: '44vw', height: '25vw', padding: '3vw' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.8 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <p style={{ margin: 0, fontSize: '1vw', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.7 }}>Frosted interface</p>
        <h1 style={{ margin: '1vw 0 0', fontSize: '6vw', lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.04em' }}>Glass-<br />morphism</h1>
      </motion.div>
      <motion.div
        className="glass-card"
        style={{ right: '12vw', bottom: '10vw', width: '24vw', height: '15vw', padding: '2vw', borderRadius: '1.6vw' }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
        transition={{ opacity: { delay: 0.4 }, x: { delay: 0.4, duration: 0.8 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span style={{ fontSize: '4vw', fontWeight: 800 }}>92%</span>
        <p style={{ margin: 0, fontSize: '1.1vw', opacity: 0.75 }}>Blur + transparencia + borde de luz</p>
      </motion.div>
      <motion.div
        className="glass-card"
        style={{ left: '8vw', bottom: '9vw', width: '10vw', height: '10vw', borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: '3.2vw' }}
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦
      </motion.div>
    </StyleStage>
  );
}
